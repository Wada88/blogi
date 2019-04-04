import React from 'react'

import Footer from './Footer'
import matti from '../assets/images/matti.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image matti">
            <img src={matti} alt="matti" />
          </a>
          <h1>
            <strong>Yuki Matti Wada</strong>
            <p>Finnish-Japanese entrepreneur and upcoming web developer</p>
            <br />
            <a href="http://html5up.net">My CV</a>
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
