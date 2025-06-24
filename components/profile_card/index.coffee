import React from 'react'
import './styles.sass'

import defaultImage from 'url:./torontojs.jpg'

ProfileCard = ({volunteer, avatar}) ->
  <a href={volunteer.profileURL} target="_blank" rel="noopener" className="ProfileCard">
    <img
      className="ProfileCardAvatar"
      src={avatar or defaultImage}
      width="120"
      height="120"
      loading="lazy"
    />
    <span className="ProfileCardDesc">
      <span className="ProfileCardName">{volunteer.name}</span>
      <span className="ProfileCardUrl">{volunteer.profileURLText}</span>
    </span>
  </a>

export default ProfileCard
