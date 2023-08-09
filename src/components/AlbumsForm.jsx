// src/ArtistForm.js
import React, { useState } from "react";
import { TextField, Button, Box, Modal } from "@mui/material";
import AlbumService from "../services/AlbumService";

const AlbumsForm = ({ open, onClose, onSubmit }) => {
  const album = new AlbumService();

  const [title, setTitle] = useState("");
  const [genres, setGenres] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [artistId, setArtistId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const albumData = { title, genres, releaseYear, coverImage, artistId };
    album.saveAlbumData(albumData);
    setTitle('');
    setGenres('');
    setReleaseYear('');
    setCoverImage('');
    setArtistId('');
    onSubmit(albumData);
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
        <h2>Add Albums</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
          <TextField
            label="Genres"
            value={genres}
            onChange={(e) => setGenres(e.target.value)}
            fullWidth
          />
          <TextField
            label="Release Year"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            fullWidth
          />
          <TextField
            label="Cover Image"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            fullWidth
          />
          <TextField
            label="Artist"
            value={artistId}
            onChange={(e) => setArtistId(e.target.value)}
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

export default AlbumsForm;
