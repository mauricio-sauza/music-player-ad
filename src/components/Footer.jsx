import React from 'react'
import styled from 'styled-components';
import PlayerTrack from './PlayerTrack';
import PlayerControls from './PlayerControls';

export default function Footer() {
  return (
    <Container>
      <PlayerControls/>
      <PlayerTrack/>
    </Container>
  )
}

const Container = styled.div`
  background-color: #f8f8f9;
  height: 100%;
  width: 100%;
  border-top: 1px solid;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;
