import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";
import "../Styles/teamCard.css";

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
  site,
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
          {github ? (
            <a target="_blank" href={github} id="teamCard__Link">
              <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
            </a>
          ) : null}

          {youtube ? (
            <a target="_blank" href={youtube} id="teamCard__Link">
              <FontAwesomeIcon icon={["fab", "youtube"]} size="lg" />
            </a>
          ) : null}

          {reddit ? (
            <a target="_blank" href={reddit} id="teamCard__Link">
              <FontAwesomeIcon icon={["fab", "reddit"]} size="lg" />
            </a>
          ) : null}

          {twitter ? (
            <a target="_blank" href={twitter} id="teamCard__Link">
              <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
            </a>
          ) : null}
          
          {site ? (
            <a target="_blank" href={site} id="teamCard__Link">
              <FontAwesomeIcon icon={["fas", "globe"]} size="lg" />
            </a>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

export default TeamCard;
