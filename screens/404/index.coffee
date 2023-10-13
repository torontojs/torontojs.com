import React from 'react'

import ReactTypingEffect from 'react-typing-effect'

import Navbar from '/components/navbar'
import Footer from '/components/footer'

import './styles.sass'

import tower from 'bundle-text:/logo.svg'

export default \
class FourOhFour extends React.Component
  @path = '*'
  render: ->
    <div className="FourOhFour">
      <Navbar />
      <main>
        <div className="container">
          <div
            className="logo"
            dangerouslySetInnerHTML={{__html: tower}}
          >
          </div>
          <div className="title">
            <h1>
              <span className="Toronto">Four Oh</span>
              <span className="JS">Four</span>
            </h1>
            <ReactTypingEffect
              className="typing"
              text={['OH GEEZ', 'HOW DID I GET HERE?', 'I AM NOT GOOD WITH c̶̛̱͓̩̝̼̻̬̬̜̗͚͇̉ŏ̴̡̧̫̺̝̥ṁ̷̨̡̟̝̯̯̟̳̰͉́p̷̝͈͉̬̙̞͕͎̥̻̣̑͊͂͒͊̈́̿u̸̥̭̯̮̱͐͒̑͋́̿ͅt̵̘͔̜̣͙̱̣̘̤̟̑́̌͊͛͆̔̇͌̓͋̚͜ȩ̵̡͙͚̟̥͔̻̮̰́͑̌͑̐͊̍͗̋̽̒̀̉̀͝r̸̢̡̛̛͙̯͕͚͂̅̄͐̑̐́̚']}
              typingDelay={1500}
              speed={50}
              eraseDelay={1500}
              eraseSpeed={50}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
