import React from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { IconButton } from "@mui/material";
import styled from "styled-components";

export default function PlayerControls({ audio, isPlaying, setIsPlaying, currentSong }) {
  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Container>
        <p>{currentSong.title}</p>
      <IconButton size="large">
        <SkipPreviousIcon fontSize="medium" />
      </IconButton>
      {isPlaying ? (
        <IconButton size="large" onClick={playPause}>
          <PauseCircleIcon fontSize="large" />
        </IconButton>
      ) : (
        <IconButton size="large" onClick={playPause}>
          <PlayCircleIcon fontSize="large" />
        </IconButton>
      )}
      <IconButton size="large">
        <SkipNextIcon fontSize="medium" />
      </IconButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
