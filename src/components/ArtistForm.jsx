// src/ArtistForm.js
import React, { useState } from "react";
import { TextField, Button, Box, Modal } from "@mui/material";
import ArtistService from "../services/ArtistService";

const ArtistForm = ({ open, onClose, onSubmit }) => {
  const artist = new ArtistService();

  const [name, setName] = useState("");
  const [genres, setGenres] = useState("");
  const [members, setMembers] = useState("");
  const [website, setWebsite] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const artistData = { name, genres, members, website, image };
    artist.saveArtistData(artistData);
    setName('');
    setGenres('');
    setMembers('');
    setWebsite('');
    setImage('');
    console.log(artist.getStoredArtistData());
    onSubmit(artistData);
  };

  return (
    <Modal open={open} onClose={onClose}>
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
        <h2>Add Artist</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Genre"
            value={genres}
            onChange={(e) => setGenres(e.target.value)}
            fullWidth
          />
          <TextField
            label="Members"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
            fullWidth
          />
          <TextField
            label="Website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            fullWidth
          />
          <TextField
            label="Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ArtistForm;
