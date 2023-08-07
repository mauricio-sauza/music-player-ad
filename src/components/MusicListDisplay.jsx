import React from "react";
import styled from "styled-components";
import { Card, CardContent, Typography, List } from "@mui/material";
import MusicDisplay from "./MusicDisplay";

export default function MusicListDisplay({ artists }) {
  return (
    <div>
      {/* <List>
        {artists.map((item) => (
          <Card
            key={item.id}
            sx={{
              display: "flex",
              alignItems: "center",
              margin: "4px 5px 4px 5px",
            }}
          >
            <ArtistImg src={item.image} alt={item.name} />
            <CardContent>
              <Typography gutterBottom  variant="h5" component="div">
                {item.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </List> */}
      <MusicDisplay artists={artists}/>
    </div>
  );
}

const ArtistImg = styled.img`
  width: 8em;
  height: 8em;;
`;
