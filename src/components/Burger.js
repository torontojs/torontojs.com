import React from 'react'
import { css } from 'glamor'
import { stack as Menu } from 'react-burger-menu'
const menu_styles = {
  home: {
    textDecoration: 'none',
    color: '#FFFFFF !important'
  },

  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '18px',
    marginBottom: '15px'
  },

  bmBurgerBars: {
    background: '#FFFFFF'
  },

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

export default class Burger extends React.Component {
    showSettings = (event) => {
        event.preventDefault()
    }
    
    render = () => {
        return(
            <Menu right styles={ menu_styles } width={ 280 }>
                <a id="burger_home" className="menu-item" href="/">Home</a>
                <a id="burger_jobs" className="menu-item" href="http://jobs.torontojs.com">Job Postings</a>
                <a id="burger_twitter" className="menu-item" href="http://twitter.com/TorontoJS">Twitter</a>
                <a id="burger_youtube" className="menu-item" href="https://www.youtube.com/channel/UC1samyyfqiKmOT6fq3uVO1A">YouTube</a>
            </Menu>
        )
    }
}