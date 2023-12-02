import React from 'react'

import Navbar from '/components/navbar'
import Footer from '/components/footer'
import ProfileCard from '/components/profile_card'
import VolunteerList from './volunteers.json'
import '/components/page/styles.sass'
import './styles.sass'

export default \
class Volunteers extends React.Component
  @path = '/volunteers'
  render: ->
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
            {for section in VolunteerList
              <>
                  <h2>{section.sectionName}</h2>
                  <div className="ProfileGrid">
                    {for member, index in section.members
                      <ProfileCard volunteer={member} />}
                  </div>
              </>}
        </div> 
        <Footer />
    </div>
