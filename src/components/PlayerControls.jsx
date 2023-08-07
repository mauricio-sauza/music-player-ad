import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { IconButton } from '@mui/material';
import styled from 'styled-components';

export default function PlayerControls() {
  return (
    <Container>
        <IconButton size='large'>
            <SkipPreviousIcon fontSize='medium'/>
        </IconButton>
        <IconButton size='large'>
            <PlayArrowIcon fontSize='large'/>
        </IconButton>
        <IconButton size='large'>
            <SkipNextIcon fontSize='medium'/>
        </IconButton>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;