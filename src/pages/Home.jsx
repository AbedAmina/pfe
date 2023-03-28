import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import img1 from './pic/img1.jpeg';
import img2 from './pic/img2.jpeg';
import img3 from './pic/img3.jpeg';
import img4 from './pic//img4.jpeg';
import img5 from './pic/img5.jpeg';
import Header from '../Header';

function Slider() {
  return (
 
      <>
        <ul className="slider">
          <li className="slide s1"><Link to="/Mecanic"><img src={img1} alt="Mécanique" /></Link></li>
          <li className="slide s2"><Link to="/Electric"><img src={img2} alt="Electronique" /></Link></li>
          <li className="slide s3"><Link to="/Math"><img src={img3} alt="Mathématiques" /></Link></li>
          <li className="slide s4"><Link to="/Economie"><img src={img4} alt="Economie" /></Link></li>
          <li className="slide s5"><Link to="/Info"><img src={img5} alt="Informatique" /></Link></li>
        </ul>
        </>
  );
}

function Home() {
  return (
    <div className="App">
      <Header />
      <Slider />
    </div>
  );
}

export default Home;