import React from 'react';
import Header from './Header';
import '../Styles/footer.css'
import TeamCard from './TeamCard';
const Footer = () => {
  return (
    <div className="footer__wrapper">
      <Header 
        name="footer__Header"
        title="Meet our team"
      />
      <TeamCard 
        name="footer__TeamCard"
        image="../Assets/bubbles.png"
      />
    </div>
  );
};

export default Footer;