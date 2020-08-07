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
        cardId="footer__TeamCardBubbles"
        contentId="footer__content"
        imgId="footer__img"
        image="/Users/Student_ga122/Desktop/Cable Site/Cable/src/Assets/bubbles.png"
      />
      <div className="footer__copyright"> Copyright © Cable Development Team - 2020 </div>
    </div>
  );
};

export default Footer;