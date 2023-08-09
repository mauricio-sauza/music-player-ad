import React from "react";
import MusicDisplay from "./MusicDisplay";
import AlbumService from "../services/AlbumService";
import { artist } from "../utils/MockData";

export default function Body() {
  const album = new AlbumService();
  

  return (
    <div>
      <MusicDisplay artists={artist} />
    </div>
  );
}
