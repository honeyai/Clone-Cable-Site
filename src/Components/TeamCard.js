import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

function TeamCard({cardId, contentId, imgId, image, role, memberName, roleStyle, memberStyle}) {
  return (
    <Card id={cardId}>
      <CardContent id={contentId}>
        <CardMedia
          id={imgId} 
          image={image}
        />
        <Typography
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
      </CardContent>
    </Card>
  );
}

export default TeamCard;
