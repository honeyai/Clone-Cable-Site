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
      <div className="footer__teamContainer">
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
          youtube="https://www.youtube.com/channel/UCQwyx88uCtoqO31tymn2mPg"
          reddit="https://www.reddit.com/user/Yeet_the_brick"
          twitter="https://twitter.com/Em0Cracker"
          site="http://www.bennocraft.net/#!/"
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
        <TeamCard
          cardId="footer__TeamCardJrock"
          contentId="footer__content"
          imgId="footer__img"
          image={require("../Assets/jrock.jpg")}
          memberName="Jrock"
          memberStyle="footer__member"
          roleStyle="footer__role"
          role="Web Developer"
        />
      </div>
      <div className="footer__copyright"> Copyright © Cable Development Team - 2020 </div>
    </div>
  );
};

export default Footer;