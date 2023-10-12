import React from 'react'

import ReactTypingEffect from 'react-typing-effect'

import Navbar from '/components/navbar'
import Footer from '/components/footer'

import {
  GuildCard
  GuildList
} from '/components/guild'

import './styles.sass'

export default \
class Home extends React.Component
  @path = '/'
  render: ->
    <div className="Home">
      <Navbar />
      <main>

        <div className="hero">
          <div className="container">
            <div className="title">
              <h1>
                <span className="Toronto">Toronto</span>
                <span className="JS">JS</span>
              </h1>
              <ReactTypingEffect
                className="typing"
                text={['MEETUPS', 'TECH TALKS', 'MOB PROGRAMMING', 'WORKSHOPS', 'SOCIAL EVENTS']}
                typingDelay={1500}
                speed={50}
                eraseDelay={1500}
                eraseSpeed={50}
              />
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container top">
            <div className="description">
              <h2>We are a volunteer-run community that supports all in their learning and passion for sharing knowledge on JavaScript- and by extension, software development in Toronto and the GTA.</h2>
              <ul>
                <li>📅 Over 30+ events a year</li>
                <li>🚀 Community-led online and in-person events</li>
                <li>🦋 5800 on Slack</li>
                <li>🚀 Over 11000 on Meetup and 600 members on Guild</li>
                <li>👯🏻 40+ <a href="/volunteers">volunteers</a></li>
                <li>🧑🏻‍🤝‍🧑🏾 <a href="/mission">13 years of community</a> and still going! </li>
                <li>🎲 ~4 organizers</li>
              </ul>
            </div>
            <GuildCard />
          </div>
          <div className="container events">
            <div className="future">
              <h2>Upcoming Events</h2>
              <GuildList when="UPCOMING" />
            </div>
            <div className="past">
              <h2>Past Events</h2>
              <GuildList when="PAST" />
            </div>
          </div>
        </div>

      </main>
      <Footer/>
    </div>
