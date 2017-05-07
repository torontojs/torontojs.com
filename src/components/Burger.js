import React from 'react'
import { stack as Menu } from 'react-burger-menu'

export default class Burger extends React.Component {
  constructor(props) {
    super(props)
    this.state = { barColor: '#FFFFFF' }
  }

  componentDidMount() {
    window.addEventListener('scroll', (event) => {
      let lastScrollPos = window.scrollY;
      console.log(lastScrollPos);
      
      if (lastScrollPos >= 500) {
        this.setState({ barColor: 'rgb(238, 49, 36)'}) 
      }

      else {
        this.setState({barColor: '#FFFFFF'})
      }
    })
  }

  menuStyles = {
    home: {
      textDecoration: 'none',
    },

    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '18px',
      marginBottom: '15px'
    },

    bmBurgerBars: {},

    bmCrossButton: {
      height: '24px',
      width: '24px'
    },

    bmCross: {
      background: '#FFFFCC'
    },

    bmMenu: {
      background: 'rgb(60, 60, 60)',
      color: '#FFFFFF',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },

    menuItem: {
      webkitTransition: 'color 5s ease',
      transition: 'color 5s ease',
      padding: '15% 0 15% 0',
      marginBottom: '5%',
      textDecoration: 'none',
    },

    bmMorphShape: {
      fill: '#373a47'
    },

    bmItemList: {
      padding: '0.8em'
    },

    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  showSettings = (event) => {
    event.preventDefault()
  }    

  render = () => {
    this.menuStyles.bmBurgerBars.background = this.state.barColor;
    return(
      <Menu right styles={ this.menuStyles } width={ 280 }>
        <a id="burgerHome" className="menu-item" href="/">Home</a>
        <a id="burgerJobs" className="menu-item" href="http://jobs.torontojs.com">Job Postings</a>
        <a id="burgerTwitter" className="menu-item" href="http://twitter.com/TorontoJS">Twitter</a>
        <a id="burgerYoutube" className="menu-item" href="https://www.youtube.com/channel/UC1samyyfqiKmOT6fq3uVO1A">YouTube</a>
      </Menu>
    )
  }
}