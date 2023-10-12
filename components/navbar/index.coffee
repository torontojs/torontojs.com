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
    <a href='https://join.slack.com/t/torontojs/shared_invite/zt-zgi31snl-omO3tXSZ0Q7zqN9WBQSf8Q'>
      <FaSlackHash/>
      <span className="label">
        Join Slack
      </span>
    </a>
    <a href='https://guild.host/torontojs'>
      <img src={GuildLogo} />
      <span className="label">
        Join us on Guild
      </span>
    </a>
    <a href='https://github.com/torontojs/torontojs.com'>
      <FaGithub/>
      <span className="label">
        Contribute
      </span>
    </a>
    <a href='https://docs.google.com/forms/d/e/1FAIpQLSc_ZA0ElHLsMedjdQjZechw5H1RJNhG1DZxtFTsqhkdut3eFg/viewform?usp=sf_link'>
      <FaComment/>
      <span className="label">
        Give a Talk
      </span>
    </a>
    <a href='/code_of_conduct'>
      <FaStickyNote/>
      <span className="label">
        Code of Conduct
      </span>
    </a>
    <a href='/report'>
      <FaFlag/>
      <span className="label">
        Report Abuse
      </span>
    </a>
    <a href='https://tldr.torontojs.com'>
      <FaFolder/>
      <span className="label">
        Newsletter
      </span>
    </a>
  </nav>
