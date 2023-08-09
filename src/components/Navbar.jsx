import React from "react";
import { useState, useEffect } from "react";
import { Button, Modal, Box, IconButton } from "@mui/material";
import ArtistForm from "./ArtistForm";
import styled from "styled-components";
import ArtistService from "../services/ArtistService";
import Dummy from "./Dummy";
import AlbumsForm from "./AlbumsForm";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AlbumIcon from "@mui/icons-material/Album";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [showLocalStorageModal, setShowLocalStorageModal] = useState(false);
  const [showAlbumModal, setShowAlbumModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleToggleAlbumModal = () => {
    setShowAlbumModal(!showAlbumModal);
  };

  const handleArtistSubmit = (artistData) => {
    setShowModal(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Music App</h1>
        <IconButton
          aria-label="Create Artist"
          size="large"
          onClick={handleToggleModal}
        >
          <AddCircleIcon fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="Create Album"
          size="large"
          onClick={handleToggleAlbumModal}
        >
          <AlbumIcon fontSize="large" />
        </IconButton>
        <ArtistForm
          open={showModal}
          onClose={handleToggleModal}
          onSubmit={handleArtistSubmit}
        />
        <AlbumsForm open={showAlbumModal} onClose={handleToggleAlbumModal} />
      </header>
    </div>
  );
}
