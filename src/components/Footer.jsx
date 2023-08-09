import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PlayerTrack from "./PlayerTrack";
import PlayerControls from "./PlayerControls";
import { artist } from "../utils/MockData";

export default function Footer() {
  const [songs, setSongs] = useState(artist);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(artist[0].albums[0].songs[0]);

  const audio = useRef();

  useEffect(() => {
    if (isPlaying) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [isPlaying]);

  return (
    <Container>
      <audio src={currentSong.link} ref={audio} />
      <PlayerControls
        songs={songs}
        setSongs={setSongs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        audio={audio}
      />
      <PlayerTrack />
    </Container>
  );
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
