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
        image={require("../Assets/bubbles.png")}
        memberName="Bubbles"
        memberStyle="footer__member"
        roleStyle="footer__role"
        role="Web and Bot Developer"
        github="https://github.com/BennoCraft"
      />
      <TeamCard
        cardId="footer__TeamCardHoneyes"
        contentId="footer__content"
        imgId="footer__img"
        image={require("../Assets/honeyes.png")}
        memberName="Honeyes"
        memberStyle="footer__member"
        roleStyle="footer__role"
        role="Web Developer"
      />
      <div className="footer__copyright"> Copyright © Cable Development Team - 2020 </div>
    </div>
  );
};

export default Footer;