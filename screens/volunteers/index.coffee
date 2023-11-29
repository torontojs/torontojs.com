import React from 'react'

import Navbar from '/components/navbar'
import Footer from '/components/footer'
import '/components/page/styles.sass'


volunteer_data = {
    contributors: [
      {
        name: "Jen Chan",
        profileURL: "https://www.jenchan.biz/",
        profileImageURL: "/images/jen.jpg",
      },
      {
        name: "Kieran Huggins",
        profileURL: "https://kieran.ca/",
        profileImageURL: "/images/kieran.png",
      },
      {
        name: "Alex Wilmer",
        profileURL: "https://twitter.com/benevolentNinja",
        profileImageURL: "",
      },
    ],
    honorary_members: [
      {
        name: "Sherry Yang",
        profileURL: "https://5hel2l2y.github.io/",
        profileImageURL: "",
      },
      {
        name: "Erik Derohanian",
        profileURL: "https://www.linkedin.com/in/erikjd/",
        profileImageURL: "",
      },
    ],
    organizers: [
      {
        name: "Aman Aalam",
        profileURL: "https://www.linkedin.com/in/amanaalam/",
        profileImageURL: "",
      },
      {
        name: "Dale Karp",
        profileURL: "https://dale.io/",
        profileImageURL: "",
      },
      {
        name: "Evert Pot",
        profileURL: "https://evertpot.com/",
        profileImageURL: "",
      },
      {
        name: "Sami Xie",
        profileURL: "https://www.linkedin.com/in/sami-xie-91bb4814a",
        profileImageURL: "",
      },
      {
        name: "Yuri Yang",
        profileURL: "https://www.linkedin.com/in/07yuri/",
        profileImageURL: "",
      },
      {
        name: "Marco Campos",
        profileURL: "https://madcampos.dev/",
        profileImageURL: "",
      },
      {
        name: "Ankur Kaushal",
        profileURL: "https://www.linkedin.com/in/ankur-kaushal/",
        profileImageURL: "",
      },
    ],
    directors: [
      {
        name: "Dann Toliver",
        profileURL: "https://danntoliver.com",
        profileImageURL: "",
      },
      {
        name: "Matthew Mihok",
        profileURL: "https://twitter.com/mihok",
        profileImageURL: "",
      },
      {
        name: "Jen Chan",
        profileURL: "https://www.jenchan.biz/",
        profileImageURL: "",
      },
    ],
    advisory: {
      members: [
        {
          name: "Taz Singh",
          profileURL: "https://twitter.com/tazsingh",
          profileImageURL: "",
        },
      ],
    },
    promotionModerationCommunityEngagement: [
      {
        name: "Alex Wilmer",
        profileURL: "https://twitter.com/benevolentNinja",
        profileImageURL: "",
      },
      {
        name: "Andrew Matte",
        profileURL: "https://www.linkedin.com/in/andrew-matte",
        profileImageURL: "",
      },
      {
        name: "Brandon Cha",
        profileURL: "https://www.linkedin.com/in/brandoncha/",
        profileImageURL: "",
      },
      {
        name: "Cam Remesz",
        profileURL: "https://www.linkedin.com/in/cameron-remesz/",
        profileImageURL: "",
      },
      {
        name: "Chris West",
        profileURL: "https://www.linkedin.com/in/chris-west-code-wrangler/",
        profileImageURL: "",
      },
      {
        name: "Divish Ram",
        profileURL: "https://www.linkedin.com/in/divish-ram-694b55230/",
        profileImageURL: "",
      },
      {
        name: "Danny Kim",
        profileURL: "https://www.linkedin.com/in/0916dhkim/",
        profileImageURL: "",
      },
      {
        name: "Drey Moreau",
        profileURL: "https://www.linkedin.com/in/dreymoreau/",
        profileImageURL: "",
      },
      {
        name: "Jack Li",
        profileURL: "https://www.linkedin.com/in/jackli0707/",
        profileImageURL: "",
      },
      {
        name: "Kaoru Tsumita",
        profileURL: "https://kaorut.com/",
        profileImageURL: "",
      },
      {
        name: "Ken Beaudin",
        profileURL: "https://www.linkedin.com/in/ken-beaudin-9a4061174/",
        profileImageURL: "",
      },
      {
        name: "Kieran Huggins",
        profileURL: "https://kieran.ca/",
        profileImageURL: "",
      },
      {
        name: "Lamisa Saadat",
        profileURL: "https://www.linkedin.com/in/lamisaadat/",
        profileImageURL: "",
      },
      {
        name: "Liz McCready",
        profileURL: "https://gingerkiwi.blog/",
        profileImageURL: "",
      },
      {
        name: "Matt J Jackson",
        profileURL: "https://www.linkedin.com/in/mattjacksondev/",
        profileImageURL: "",
      },
      {
        name: "Metkel Kebede",
        profileURL: "https://www.linkedin.com/in/metkel-kebede-50a79664/",
        profileImageURL: "",
      },
      {
        name: "Rajat Bansal",
        profileURL: "https://www.linkedin.com/in/rjtbansal/",
        profileImageURL: "",
      },
      {
        name: "Sammy Lam",
        profileURL: "https://www.linkedin.com/in/sammy-lam-full-stack-dev-electrician-car-wrapper-it/",
        profileImageURL: "",
      },
      {
        name: "Zeinab Farag",
        profileURL: "https://www.linkedin.com/in/zeinab454/",
        profileImageURL: "",
      },
      {
        name: "Tehseen Chaudry",
        profileURL: "https://matcha.so/tehseen",
        profileImageURL: "",
      },
      {
        name: "Zeinab Farag",
        profileURL: "https://www.linkedin.com/in/zeinab454/",
        profileImageURL: "",
      },
      {
        name: "Christine Hsiao",
        profileURL: "https://www.linkedin.com/in/christine-hsiao-dev/",
        profileImageURL: "",
      },
    ],
    educationalAccomplices: [
      {
        name: "Btara Truhandarien",
        profileURL: "https://btruhand.github.io/blog/",
        profileImageURL: "",
      },
      {
        name: "Connor Wilson",
        profileURL: "https://cwlsn.com/",
        profileImageURL: "",
      },
      {
        name: "David Wolever",
        profileURL: "https://twitter.com/wolever",
        profileImageURL: "",
      },
      {
          name: "Nicole Chung",
          profileURL: "https://www.linkedin.com/in/nicole-chung-6b06b33/",
          profileImageURL: "",
      },
      {
        name: "Niya Panamdanam",
        profileURL: "https://www.linkedin.com/in/niya-panamdanam/",
        profileImageURL: "",
      },
      {
        name: "Rachael Concessio",
        profileURL: "https://www.linkedin.com/in/rachaelconcessio/",
        profileImageURL: "",
      }
    ]
  }
export default \
class Volunteers extends React.Component
  @path = '/volunteers'
  render: ->
    console.log volunteer_data.contributors
    <div className="Page">
        <Navbar />
        <div className="Volunteers">
            <h1>Profile Photos</h1>
            <p>
                Volunteers and their contributions are what has kept this going, making Toronto JS the welcoming and expansive place it is today. 
                Many are self-taught, some are beginning their programming journey, others more experienced developers. We all believe there can be a space for people to practice, discuss and share knowledge about code as craft, and have honest discussions about engineering practice and career. 
                Everyone supports events by offering their unpaid time, connections and expertise to empower and elevate others. Whether it is event support, promotion, event organizing, mediating conflicts and removing trolls. This community would not be possible without the participation of our volunteers.
                We are grateful for the time and effort they put into making this community a welcoming place for all in tech.
                All volunteers agree to model and uphold the Code of Conduct. 
            </p>
            <h1>Promotion, Moderation, Community Engagement</h1>
            <ul>
                {for volunteer, index in volunteer_data.contributors
                    <li key={index}>{volunteer.name}<br /><a href={volunteer.profileURL} target="_blank"><img src={volunteer.profileImageURL} /></a></li>}
            </ul>
        </div> 
        <Footer />
    </div>
