import React from 'react'
import './styles.sass'

DEFAULT_PROFILE_IMAGE = "/avatars/torontojs.jpg"

ProfileCard = ({volunteer}) ->
  <a href={volunteer.profileURL} target="_blank" rel="noopener" className="ProfileCard">
    <img
      className="ProfileCardAvatar"
      src={if volunteer.avatarName then "/avatars/thumbs/#{volunteer.avatarName}.jpg" else DEFAULT_PROFILE_IMAGE}
      width="120"
      height="120"
      loading="lazy"
    />
    <span class="ProfileCardDesc">
      <span className="ProfileCardName">{volunteer.name}</span>
      <span className="ProfileCardUrl">{volunteer.profileURLText}</span>
    </span>
  </a>

export default ProfileCard