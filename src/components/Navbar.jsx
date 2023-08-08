import React from "react";
import { useState, useEffect } from "react";
import { Button, Modal, Box } from "@mui/material";
import ArtistForm from "./ArtistForm";
import styled from "styled-components";
import ArtistService from "../services/ArtistService";
import Dummy from "./Dummy";

export default function Navbar() {
  const artist = new ArtistService();
  const [showModal, setShowModal] = useState(false);
  const [storedArtistData, setStoredArtistData] = useState(null);
  const [showLocalStorageModal, setShowLocalStorageModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleToggleLocalStorageModal = () => {
    setShowLocalStorageModal(!showLocalStorageModal);
  };

  const handleArtistSubmit = (artistData) => {
    // Agrega la lógica para manejar los datos del artista aquí
    console.log("Datos del artista:", artistData);
    setShowModal(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Music App</h1>
        <Button onClick={handleToggleModal} variant="contained">
          Create Artist
        </Button>
        <Button
          onClick={handleToggleLocalStorageModal}
          variant="contained"
        >
          LocalStorage
        </Button>
        <ArtistForm
          open={showModal}
          onClose={handleToggleModal}
          onSubmit={handleArtistSubmit}
        />
        <Dummy
          open={showLocalStorageModal}
          onClose={handleToggleLocalStorageModal}
        />
      </header>
    </div>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;
