import React from 'react'

import {
  FaSlackHash
  FaGithub
  FaComment
  FaStickyNote
  FaFlag
  FaFolder
} from 'react-icons/fa'

import GuildLogo from './guild_logo.png'

import './styles.sass'

export default Navbar = ->
  <nav className='Navbar'>
    <a href='https://join.slack.com/t/torontojs/shared_invite/zt-zgi31snl-omO3tXSZ0Q7zqN9WBQSf8Q'
      aria-label="Join Slack">
      <FaSlackHash/>
      <span className="label">
        Join Slack
      </span>
    </a>
    <a href='https://guild.host/torontojs'
      aria-label="Join us on Guild">
      <img src={GuildLogo} />
      <span className="label">
        Join us on Guild
      </span>
    </a>
    <a href='https://github.com/torontojs/torontojs.com'
      aria-label="Github link to contribute">
      <FaGithub/>
      <span className="label">
        Contribute
      </span>
    </a>
    <a href='https://docs.google.com/forms/d/e/1FAIpQLSc_ZA0ElHLsMedjdQjZechw5H1RJNhG1DZxtFTsqhkdut3eFg/viewform?usp=sf_link'
      aria-label="Give a talk">
      <FaComment/>
      <span className="label">
        Give a Talk
      </span>
    </a>
    <a href='/code_of_conduct'
      aria-label="Code of Conduct">
      <FaStickyNote/>
      <span className="label">
        Code of Conduct
      </span>
    </a>
    <a href='/report'
      aria-label="Report Abuse">
      <FaFlag/>
      <span className="label">
        Report Abuse
      </span>
    </a>
    <a href='https://tldr.torontojs.com'
      aria-label="Newsletter">
      <FaFolder/>
      <span className="label">
        Newsletter
      </span>
    </a>
  </nav>
