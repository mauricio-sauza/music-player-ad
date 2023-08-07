import React from "react";
import styled from "styled-components";
import Slider from "@mui/material/Slider";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import { IconButton } from '@mui/material';

export default function PlayerTrack() {
  return (
    <Container>
      <Slider
        size="small"
        defaultValue={30}
        valueLabelDisplay="auto"
      />
      <IconButton size="large">
        <ShuffleIcon fontSize="medium" />
      </IconButton>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
