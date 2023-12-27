import React from 'react'

import {
  FaYoutube
  FaInstagram
  FaBriefcase
  FaUsers
  FaTwitter
} from 'react-icons/fa'

import './styles.sass'

export default Footer = ->
  <footer className="Footer">
    <a href="https://www.youtube.com/channel/UC1samyyfqiKmOT6fq3uVO1A"
      aria-label="Youtube">
      <FaYoutube/>
      <span className="label">
        YouTube
      </span>
    </a>
    <a href="https://www.instagram.com/toronto.js"
      aria-label="Instagram">
      <FaInstagram/>
      <span className="label">
        Instagram
      </span>
    </a>
    <a href="https://www.linkedin.com/company/torontojs"
      aria-label="LinkedIn">
      <FaBriefcase/>
      <span className="label">
        LinkedIn
      </span>
    </a>
    <a href="https://opencollective.com/torontojs"
      aria-label="Open Collective">
      <FaUsers/>
      <span className="label">
        Open Collective
      </span>
    </a>
    <a href="https://twitter.com/torontojs"
      aria-label="Twitter">
      <FaTwitter/>
      <span className="label">
        Twitter
      </span>
    </a>
  </footer>
