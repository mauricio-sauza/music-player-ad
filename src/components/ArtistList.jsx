import { Card, CardContent, Typography, List, Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

export default function ArtistList({ artists }) {
  return (
    <Container>
      <List>
        {artists.map((item) => (
          <ButtonCard key={item.id}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArtistImg src={item.image} alt={item.name} />
              <CardContent>
                <Typography variant="body2" component="div">
                  {item.name}
                </Typography>
              </CardContent>
            </Card>
          </ButtonCard>
        ))}
      </List>
    </Container>
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

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
