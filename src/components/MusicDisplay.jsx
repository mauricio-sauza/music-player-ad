import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Typography,
} from "@mui/material";
import styled from "styled-components";

export default function MusicDisplay({ artists }) {
  return (
    <Container>
      <Grid container spacing={3}>
        {artists.map((artist) => (
          <Grid item key={artist.name} xs={12}>
            {artist.albums.map((album) => (
              <div key={album.title}>
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <ArtistImg
                      src={album.coverImage}
                      alt={album.title}
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="h3">{album.title}</Typography>
                    <Typography variant="h5">
                      Year: {album.releaseYear}
                    </Typography>
                  </Grid>
                </Grid>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Year</TableCell>
                        <TableCell>Duration</TableCell>
                        <TableCell>Artist</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {album.songs.map((song) => (
                        <TableRow key={song.id}>
                          <TableCell>{song.title}</TableCell>
                          <TableCell>{song.releaseYear}</TableCell>
                          <TableCell>{song.duration}</TableCell>
                          <TableCell>{song.artist}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            ))}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

const ArtistImg = styled.img`
  width: 100%;
  height: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
