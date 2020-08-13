import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { MDBIcon } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesome'


function TeamCard({
  cardId,
  contentId,
  imgId,
  image,
  role,
  memberName,
  roleStyle,
  memberStyle,
  github,
}) {
  return (
    <Card id={cardId}>
      <CardContent id={contentId}>
        <CardMedia id={imgId} image={image} />
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
          <a href={github}>
          <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a href="https://www.youtube.com/channel/UCQwyx88uCtoqO31tymn2mPg">
          <FontAwesomeIcon icon={["fab", "youtube"]} />
          </a>
          <a href="https://www.reddit.com/user/Yeet_the_brick">
          <FontAwesomeIcon icon={["fab", "reddit"]} />

          </a>
          <a href="https://twitter.com/Em0Cracker">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
          <a href="http://www.bennocraft.net/#!/">
          <FontAwesomeIcon icon={["fas", "globe"]} />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

export default TeamCard;
