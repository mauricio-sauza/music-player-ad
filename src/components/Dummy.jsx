// src/LocalStorageModal.js
import React, { useState } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";
import ArtistService from "../services/ArtistService";

const Dummy = ({ open, onClose }) => {
  const [localStorageData, setLocalStorageData] = useState([]);
  const artists = new ArtistService();

  const handleClearLocalStorage = () => {
    artists.clearStoredArtistData();
    setLocalStorageData([]);
  };

  const handleClose = () => {
    setLocalStorageData([]);
    onClose();
  };

  const storedData = artists.getStoredArtistData();
  const localStorageEntries = Object.entries(storedData);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h5">
          Datos almacenados en el LocalStorage:
        </Typography>
        {localStorageEntries.map(([key, value], index) => (
          <Typography key={index}>
            <strong>{key}:</strong> {JSON.stringify(value)}
          </Typography>
        ))}
        <Button
          variant="contained"
          onClick={handleClearLocalStorage}
        >
          Borrar todos los datos
        </Button>
        <Button variant="contained" onClick={handleClose}>Cerrar</Button>
      </Box>
    </Modal>
  );
};

export default Dummy;
