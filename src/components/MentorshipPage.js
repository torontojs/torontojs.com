import React from 'react'
import Splash from './Splash'
import MentorCard from './MentorCard'
import styled from 'styled-components'
import mentors from '../data/mentorData'

const Container = styled.div`
	padding: 30px;
	gap: 40px;
	margin: 0 auto;
	width: 60%;
	display: flex;
	justify-content: space-around;
	flex-flow: row wrap;
`

const JoinButton = styled.button`
	display: flex;
	justify-content: center;
	margin: 20px auto;
	padding: 10px;
	border: 3px solid rgb(238, 49, 36);
	border-radius: 0.25rem;
	transition: 0.3s;
	&:hover {
		background-color: rgb(238, 49, 36);
		border: 3px solid black;
	}
`

export default class Mentorship extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mentors }
  }

  render() {
    return (
      <div>
        <Splash />
        <JoinButton>Become A Mentor</JoinButton>
        <Container>
          {this.state.mentors.map((mentor) => (
            <MentorCard info={mentor} />
					))}
        </Container>
      </div>
    )
  }
}
