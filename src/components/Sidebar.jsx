import React from "react";
import styled from "styled-components";
import ArtistList from "./ArtistList";
import logo from "../assets/Feezer.png";
import EarbudsIcon from "@mui/icons-material/Earbuds";
import AllArtist from "./AllArtist";
import ArtistService from "../services/ArtistService";
import { artist } from "../utils/MockData";

export default function Sidebar() {

  const artists = new ArtistService();

  const artist = artists.getStoredArtistData();

  return (
    <Container>
      <Header>
        <EarbudsIcon fontSize="large" />
        <h1>Feezer</h1>
      </Header>
      <AllArtist/>
      <ArtistList artists={artist} />
    </Container>
  );
}

const Container = styled.div`
  background-color: #f8f8f9;
`;

const Header = styled.header`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
`;
