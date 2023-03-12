import React from 'react';
import styled from 'styled-components';
import Logo from './png/logo_circle.png';
import github from './png/github_logo.png';
import linkedin from './png/linkedin_logo.png';
import calendly from './png/calendly.png';

const Card = styled.div`
	width: 20%;
	height: 40vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 10px;
	box-shadow: 0px 0px 10px #ccc;
	gap: 20px;
`;

const ProfileImage = styled.img`
	background-color: red;
	width: 5vw;
	height: 5vw;
	object-fit: cover;
	border-radius: 50%;
`;

const Name = styled.h2`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 10px;
`;

const Background = styled.p`
	font-size: 16px;
	line-height: 1.5;
	text-align: center;
`;

const IconWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
`;

const Link = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
`;
const Icon = styled.img`
	font-size: 24px;
	width: 35px;
	margin: 0 10px;
	cursor: pointer;
`;

export default class MentorCard extends React.Component {
	render() {
		const { info } = this.props;
		return (
			<Card key={info.key}>
				<Name>{info.name}</Name>
				<ProfileImage src={Logo} />
				<Background>{info.background}</Background>
				<IconWrapper>
					<Link href={info.linkedin} target='_blank' rel='noopener noreferrer'>
						<Icon src={linkedin} />
					</Link>
					<Link href={info.github} target='_blank' rel='noopener noreferrer'>
						<Icon src={github} />
					</Link>

					<Link href={info.calendly} target='_blank' rel='noopener noreferrer'>
						<Icon src={calendly} />
					</Link>
				</IconWrapper>
			</Card>
		);
	}
}
