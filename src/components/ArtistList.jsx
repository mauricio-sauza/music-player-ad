import { Card, CardContent, Typography, List } from '@mui/material';
import React from "react";
import styled from "styled-components";

export default function ArtistList({ artists }) {
  return (
    <div>
      <List>
        {artists.map((item) => (
          <Card
            key={item.id}
            sx={{ display: "flex", alignItems: "center", margin: "4px 5px 4px 5px" }}   
          >
            <ArtistImg src={item.image} alt={item.name} />
            <CardContent>
              <Typography  variant='body1' component="div">{item.name}</Typography>        
            </CardContent>
          </Card>
        ))}
      </List>
    </div>
  );
}

const ArtistImg = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 50%;
`;

