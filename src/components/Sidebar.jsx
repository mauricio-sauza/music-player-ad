import React from "react";
import styled from "styled-components";
import ArtistList from "./ArtistList";
import logo from "../assets/Feezer.png";
import EarbudsIcon from "@mui/icons-material/Earbuds";

export default function Sidebar() {
  const artist = [
    {
      id: 1,
      name: "Coldplay",
      genres: ["Rock alternativo", "Pop rock", "Pop"],
      members: [
        "Chris Martin",
        "Guy Berryman",
        "Jonny Buckland",
        "Will Champion",
      ],
      website: "https://www.coldplay.com/",
      image: "https://i.scdn.co/image/ab6761610000e5eb989ed05e1f0570cc4726c2d3",
      albums: [
        {
          id: 1,
          title: "A Rush of Blood to the Head",
          genre: "Alternative Rock",
          releaseYear: 2002,
          coverImage:
            "https://i.scdn.co/image/ab67616d0000b273de09e02aa7febf30b7c02d82",
          songs: [
            {
              id: 1,
              title: "The Scientist",
              genre: "Alternative Rock",
              releaseYear: 2002,
              artist: "Coldplay",
              album: "A Rush of Blood to the Head",
              duration: "5:09",
              link: "link_to_listen_the_scientist.mp3",
            },
            {
              id: 2,
              title: "Clocks",
              genre: "Alternative Rock",
              releaseYear: 2002,
              artist: "Coldplay",
              album: "A Rush of Blood to the Head",
              duration: "5:07",
              link: "link_to_listen_clocks.mp3",
            },
            {
              id: 3,
              title: "In My Place",
              genre: "Alternative Rock",
              releaseYear: 2002,
              artist: "Coldplay",
              album: "A Rush of Blood to the Head",
              duration: "3:48",
              link: "link_to_listen_in_my_place.mp3",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Radiohead",
      genres: ["Rock alternativo", "Art rock", "Electrónica"],
      members: [
        "Thom Yorke",
        "Jonny Greenwood",
        "Colin Greenwood",
        "Ed O'Brien",
        "Philip Selway",
      ],
      website: "https://www.radiohead.com/",
      image: "https://i.scdn.co/image/ab6761610000e5eba03696716c9ee605006047fd",
      albums: [
        {
          id: 1,
          title: "OK Computer",
          genre: "Alternative Rock",
          releaseYear: 1997,
          coverImage:
            "https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856",
          songs: [
            {
              id: 1,
              title: "Paranoid Android",
              genre: "Alternative Rock",
              releaseYear: 1997,
              artist: "Radiohead",
              album: "OK Computer",
              duration: "6:23",
              link: "link_to_listen_paranoid_android.mp3",
            },
            {
              id: 2,
              title: "Karma Police",
              genre: "Alternative Rock",
              releaseYear: 1997,
              artist: "Radiohead",
              album: "OK Computer",
              duration: "4:21",
              link: "link_to_listen_karma_police.mp3",
            },
            {
              id: 3,
              title: "No Surprises",
              genre: "Alternative Rock",
              releaseYear: 1997,
              artist: "Radiohead",
              album: "OK Computer",
              duration: "3:49",
              link: "link_to_listen_no_surprises.mp3",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Arctic Monkeys",
      genres: ["Rock alternativo", "Indie rock", "Post-punk revival"],
      members: ["Alex Turner", "Jamie Cook", "Nick O'Malley", "Matt Helders"],
      website: "https://www.arcticmonkeys.com/",
      image: "https://i.scdn.co/image/ab6761610000e5eb7da39dea0a72f581535fb11f",
      albums: [
        {
          id: 1,
          title: "Whatever People Say I Am, That's What I'm Not",
          genre: "Indie Rock",
          releaseYear: 2006,
          coverImage:
            "https://i.scdn.co/image/ab67616d0000b273016a0b37dc6aa48356e7655f",
          songs: [
            {
              id: 1,
              title: "I Bet You Look Good On The Dancefloor",
              genre: "Indie Rock",
              releaseYear: 2006,
              artist: "Arctic Monkeys",
              album: "Whatever People Say I Am, That's What I'm Not",
              duration: "2:53",
              link: "link_to_listen_i_bet_you_look_good.mp3",
            },
            {
              id: 2,
              title: "When The Sun Goes Down",
              genre: "Indie Rock",
              releaseYear: 2006,
              artist: "Arctic Monkeys",
              album: "Whatever People Say I Am, That's What I'm Not",
              duration: "3:20",
              link: "link_to_listen_when_the_sun_goes_down.mp3",
            },
            {
              id: 3,
              title: "Fake Tales of San Francisco",
              genre: "Indie Rock",
              releaseYear: 2006,
              artist: "Arctic Monkeys",
              album: "Whatever People Say I Am, That's What I'm Not",
              duration: "2:56",
              link: "link_to_listen_fake_tales_san_francisco.mp3",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Tame Impala",
      genres: ["Psicodelia", "Rock psicodélico", "Indie rock"],
      members: ["Kevin Parker"],
      website: "https://official.tameimpala.com/",
      image: "https://i.scdn.co/image/ab6761610000e5eb90357ef28b3a012a1d1b2fa2",
      albums: [
        {
          id: 1,
          title: "Currents",
          genre: "Psychedelic Rock",
          releaseYear: 2015,
          coverImage:
            "https://i.scdn.co/image/ab67616d0000b2739e1cfc756886ac782e363d79",
          songs: [
            {
              id: 1,
              title: "The Less I Know The Better",
              genre: "Psychedelic Rock",
              releaseYear: 2015,
              artist: "Tame Impala",
              album: "Currents",
              duration: "3:39",
              link: "link_to_listen_less_i_know_the_better.mp3",
            },
            {
              id: 2,
              title: "Let It Happen",
              genre: "Psychedelic Rock",
              releaseYear: 2015,
              artist: "Tame Impala",
              album: "Currents",
              duration: "7:47",
              link: "link_to_listen_let_it_happen.mp3",
            },
            {
              id: 3,
              title: "Eventually",
              genre: "Psychedelic Rock",
              releaseYear: 2015,
              artist: "Tame Impala",
              album: "Currents",
              duration: "5:19",
              link: "link_to_listen_eventually.mp3",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Muse",
      genres: ["Rock alternativo", "Rock progresivo", "Rock sinfónico"],
      members: ["Matt Bellamy", "Chris Wolstenholme", "Dominic Howard"],
      website: "https://muse.mu/",
      image: "https://i.scdn.co/image/ab6761610000e5eb0accbbe13e1aa147dd27671c",
      albums: [
        {
          id: 1,
          title: "Black Holes and Revelations",
          genre: "Alternative Rock",
          releaseYear: 2006,
          coverImage: "https://i.scdn.co/image/ab67616d0000b273b634ebcb92dc538624139449",
          songs: [
            {
              id: 1,
              title: "Starlight",
              genre: "Alternative Rock",
              releaseYear: 2006,
              artist: "Muse",
              album: "Black Holes and Revelations",
              duration: "4:00",
              link: "link_to_listen_starlight.mp3",
            },
            {
              id: 2,
              title: "Supermassive Black Hole",
              genre: "Alternative Rock",
              releaseYear: 2006,
              artist: "Muse",
              album: "Black Holes and Revelations",
              duration: "3:29",
              link: "link_to_listen_supermassive_black_hole.mp3",
            },
            {
              id: 3,
              title: "Knights of Cydonia",
              genre: "Alternative Rock",
              releaseYear: 2006,
              artist: "Muse",
              album: "Black Holes and Revelations",
              duration: "6:06",
              link: "link_to_listen_knights_of_cydonia.mp3",
            },
          ],
        },
      ],
    },
  ];
  return (
    <Container>
      <Header>
        <EarbudsIcon fontSize="large" />
        <h1>Feezer</h1>
      </Header>
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
