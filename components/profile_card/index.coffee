import React from 'react'
import './styles.sass'

DEFAULT_PROFILE_IMAGE = "/images/torontojs.png"

ProfileCard = ({volunteer}) ->
    <div className="ProfileCard">
        <a href={volunteer.profileURL} target="_blank" className="ProfileLink">
            <img
                className="ProfileImage"
                src={if volunteer.profileImageURL then volunteer.profileImageURL else DEFAULT_PROFILE_IMAGE}
                width="200"
                height="200"
            />
                    <br />
        <span className="profile-name">{volunteer.name}</span>
        </a>

    </div>

export default ProfileCard