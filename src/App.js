import React from 'react';
import './App.css';
import { Link, Element } from 'react-scroll';
import backgroundImage from './images/bg.png';
import personImage from './images/bg-profile-positive.png';
import About from './About';
import './Fonts.css'

function App() {
  return (
    <div>
      <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="content">
          <img src={personImage} alt="Person" className="person-image" />
          <Link to="about" smooth={true} duration={1000}>
            <button className="start-button">Start</button>
          </Link>
        </div>
      </div>
      <Element name="about" className="element">
        <About />
      </Element>
    </div>
  );
}

export default App;
