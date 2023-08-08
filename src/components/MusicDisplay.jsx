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
  IconButton,
  Button,
} from "@mui/material";
import styled from "styled-components";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function MusicDisplay({ artists }) {
  return (
    <Section>
      <Grid container spacing={3}>
        {artists.map((artist) => (
          <Grid item key={artist.name} xs={12}>
            {artist.albums.map((album) => (
              <div key={album.title}>
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <ArtistImg src={album.coverImage} alt={album.title} />
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
                          <TableCell>
                            <Container>
                              <Button>
                                <PlayArtist
                                  src={album.coverImage}
                                  alt={album.title}
                                />
                              </Button>
                              {song.title}
                            </Container>
                          </TableCell>
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
    </Section>
  );
}

const ArtistImg = styled.img`
  width: 100%;
  height: auto;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
`;

const PlayArtist = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 50%;
  margin-right: 1em;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
