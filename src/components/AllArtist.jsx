import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import deezer from '../assets/Deezer.png';
import styled from "styled-components";

export default function () {
  return (
    <div>
      <ButtonCard>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ArtistImg src={deezer} alt={deezer} />
          <CardContent>
            <Typography variant="body2" component="div">
              All Artists
            </Typography>
          </CardContent>
        </Card>
      </ButtonCard>
    </div>
  );
}

const ArtistImg = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 50%;
`;

const ButtonCard = styled(Button)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  /* width: 100%; */
  padding: 0;
`;