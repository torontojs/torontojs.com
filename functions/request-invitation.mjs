import * as Sentry from "@sentry/aws-serverless";
import { nodeProfilingIntegration } from "@sentry/profiling-node";
import crypto from "crypto";

Sentry.init({
  dsn: "https://dad25bea52bbb5cffbd7c49f357c0935@o289382.ingest.us.sentry.io/4507892554399744",
  integrations: [nodeProfilingIntegration()],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions

  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});

import jwt from "jsonwebtoken";
import assert from "node:assert";

const handler = async (req, context) => {
  try {
    // verify JWT from cookie
    const token = context.cookies.get("token");
    const user = jwt.verify(token, process.env.JWT_PUBLIC_KEY, {
      algorithm: "ES512",
    });
    Sentry.setUser({ id: user.github, email: user.email, username: user.name });

    // post to slack
    await post_to_slack(slack_payload(user));

    // return 200
    return new Response("gotcha", { status: 200 });
  } catch (e) {
    Sentry.captureException(e);
    console.log(e);
    console.log(`token: ${token}`);
    return new Response(e, { status: 500 });
  }
};

const post_to_slack = async (payload) => {
  console.log(`payload:\n\n${JSON.stringify(payload, null, 2)}\n`);
  const response = await fetch(process.env.SLACK_WEBHOOK, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (!response.ok)
    throw new Error(
      `Response status: ${response.status}\n\n${await response.text()}`
    );

  return true;
};

const slack_payload = ({
  name,
  email,
  company,
  bio,
  github,
  website,
  avatar,
  created_at,
}) => {
  // {
  //   "name": "Kieran Huggins",
  //   "email": "kieran@kieran.ca",
  //   "company": "Universe",
  //   "bio": "Director of R&D @uniiverse / Maker of votewell.ca, baristajs, myttc\r\n/ Lover of terse, readable code",
  //   "github": "kieran",
  //   "website": "http://kieran.ca",
  //   "avatar": "https://avatars.githubusercontent.com/u/3444?v=4",
  //   "created_at": "2008-03-19T21:02:08Z",
  //   "iat": 1724362049
  // }
  const header = (text) => {
    return {
      type: "header",
      text: { type: "plain_text", text: text || "undefined" },
    };
  };

  const getImageAccessory = () => {
    // Convert email into MD5 hash for gravatar as backup image
    const hash = crypto
      .createHash("md5")
      .update(email.trim().toLowerCase())
      .digest("hex");

    return {
      type: "image",
      image_url:
        avatar || `https://www.gravatar.com/avatar/${hash}?s=96&d=identicon`,
      alt_text: "User Avatar",
    };
  };

  const infoBlock = () => {
    return {
      type: "section",
      text: {
        type: "mrkdwn",
        text: [
          `Email: ${email || "undefined"}`,
          `GitHub: <https://github.com/${github}|${github}>`,
          `Created At: ${created_at || "undefined"}`,
          `Company: ${company || "undefined"}`,
          `Website: ${website || "undefined"}`,
          ``,
          `Bio: ${bio}`,
        ].join("\n"),
      },
      accessory: getImageAccessory(),
    };
  };

  return {
    channel: process.env.SLACK_CHANNEL,
    username: "InviteBot™",
    blocks: [header(name), infoBlock()],
  };
};

export default Sentry.wrapHandler(handler, { captureTimeoutWarning: false });
