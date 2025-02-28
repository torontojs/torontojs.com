import React, { useState } from 'react'
import JoinUs from '/components/join-us'

import {
  FaSlackHash
  FaGithub
  FaComment
  FaStickyNote
  FaFlag
  FaPenNib
  FaBars
  FaTimes
} from 'react-icons/fa'

import GuildLogo from './guild_logo.png'
import './styles.sass'

export default Navbar = ({ afterDark = false }) ->
  [menuOpen, setMenuOpen] = useState false

  <nav className="Navbar #{if afterDark then 'after-dark' else ''}">
    <button className="menu-toggle" onClick={() -> setMenuOpen(!menuOpen)} aria-label="Toggle menu">
      {if menuOpen then <FaTimes /> else <FaBars />}
    </button>

    <div className="nav-links #{if menuOpen then 'open' else ''}">
      <JoinUs
        button={(toggle) ->
          <a href='#' onClick={toggle} aria-label="Join Slack">
            <FaSlackHash/>
            <span className="label">Join Slack</span>
          </a>
        }
      />
      <a href='https://guild.host/torontojs' aria-label="Join us on Guild">
        <img src={GuildLogo} alt="logo for Guild.host"/>
        <span className="label">Join us on Guild</span>
      </a>
      <a href='https://github.com/torontojs/torontojs.com' aria-label="Github link to contribute">
        <FaGithub/>
        <span className="label">Contribute</span>
      </a>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSc_ZA0ElHLsMedjdQjZechw5H1RJNhG1DZxtFTsqhkdut3eFg/viewform?usp=sf_link' aria-label="Give a talk">
        <FaComment/>
        <span className="label">Give a Talk</span>
      </a>
      <a href='/code_of_conduct' aria-label="Code of Conduct">
        <FaStickyNote/>
        <span className="label">Code of Conduct</span>
      </a>
      <a href='/report' aria-label="Report Abuse">
        <FaFlag/>
        <span className="label">Report Abuse</span>
      </a>
      <a href='https://blog.torontojs.com' aria-label="Blog">
        <FaPenNib/>
        <span className="label">Blog</span>
      </a>
    </div>
  </nav>


