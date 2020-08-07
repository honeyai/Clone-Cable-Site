import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { MDBIcon } from "mdbreact";

function TeamCard({cardId, contentId, imgId, image, role, memberName, roleStyle, memberStyle, github}) {
  return (
    <Card id={cardId}>
      <CardContent id={contentId}>
        <CardMedia
          id={imgId} 
          image={image}
        />
        <Typography
          id={memberStyle}
          variant="overline"
          display="block" 
          gutterBottom
        >
          {memberName}
        </Typography>
        <Typography
          id={roleStyle}
          variant="subtitle2"
          display="block" 
          gutterBottom
        >
          {role}
        </Typography>
        <div className="socialLinks">
          <a href={github}><MDBIcon fab icon="github-alt" size="1g"/></a>
          {/* <a href="https://github.com/BennoCraft"><MDBIcon fab icon="github" /></a>
          <a href="https://www.youtube.com/channel/UCQwyx88uCtoqO31tymn2mPg"><MDBIcon fab icon="youtube" /></a>
          <a href="https://www.reddit.com/user/Yeet_the_brick"><MDBIcon fab icon="reddit" /></a>
          <a href="https://twitter.com/Em0Cracker"><MDBIcon fab icon="twitter" /></a>
          <a href="http://www.bennocraft.net/#!/"><MDBIcon icon="globe" /></a> */}
        </div>
      </CardContent>
    </Card>
  );
}

export default TeamCard;
