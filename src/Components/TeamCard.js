import React from "react";
import { Card, CardMedia, CardContent } from "@material-ui/core";

function TeamCard({name, imgClass, image}) {
  return (
    <Card className={name}>
      <CardContent>
        <CardMedia
          className={imgClass} 
          image={image}
        />
      </CardContent>
    </Card>
  );
}

export default TeamCard;
