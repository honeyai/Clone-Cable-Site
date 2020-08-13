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
  youtube,
  reddit,
  twitter,
  site
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
        <div className="teamCard__socialLinks">
          <a href={github} id="teamCard__Link">
          <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
          </a>
          <a href={youtube} id="teamCard__Link">
          <FontAwesomeIcon icon={["fab", "youtube"]} size="lg" />
          </a>
          <a href={reddit} id="teamCard__Link">
          <FontAwesomeIcon icon={["fab", "reddit"]} size="lg" />

          </a>
          <a href={twitter} id="teamCard__Link">
          <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
          </a>
          <a href={site} id="teamCard__Link">
          <FontAwesomeIcon icon={["fas", "globe"]} size="lg" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

export default TeamCard;
