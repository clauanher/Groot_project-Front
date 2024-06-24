import { useState } from 'react';
import './Home.css';
import { Image } from '../../assets/SCR-20240624-clci.png';

    <div className="home-container">
      <div className="left-panel">
        <p> Introduccion </p>
      </div>
      <div className="right-panel">
        {textInput && (
          <img src={myImage} alt="Mi Imagen" />
        )}
      </div>
    </div>

export default Home;