import React from "react";
import { Card, CardMedia, CardContent } from "@material-ui/core";

function TeamCard({cardId, contentId, imgId, image}) {
  return (
    <Card id={cardId}>
      <CardContent id={contentId}>
        <CardMedia
          id={imgId} 
          image={image}
        />
        <Typography></Typography>
      </CardContent>
    </Card>
  );
}

export default TeamCard;
