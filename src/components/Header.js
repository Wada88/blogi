import React from 'react'

import Footer from './Footer'
import matti from '../assets/images/matti.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image matti"><img src={matti} alt="matti"/></a>
                    <h1><strong>I am Strata</strong>, a super simple<br />
                    responsive site template freebie<br />
                    crafted by <a href="http://html5up.net">HTML5 UP</a>.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header