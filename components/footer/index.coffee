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
    <a href="https://www.youtube.com/channel/UC1samyyfqiKmOT6fq3uVO1A">
      <FaYoutube/>
      <span className="label">
        YouTube
      </span>
    </a>
    <a href="https://www.instagram.com/toronto.js">
      <FaInstagram/>
      <span className="label">
        Instagram
      </span>
    </a>
    <a href="https://tldr.torontojs.com">
      <FaBriefcase/>
      <span className="label">
        LinkedIn
      </span>
    </a>
    <a href="https://opencollective.com/torontojs">
      <FaUsers/>
      <span className="label">
        Open Collective
      </span>
    </a>
    <a href="https://twitter.com/torontojs">
      <FaTwitter/>
      <span className="label">
        Twitter
      </span>
    </a>
  </footer>
