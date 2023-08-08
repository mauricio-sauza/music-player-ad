class ArtistService {
  saveArtistData(artistData) {
    const artists = this.getStoredArtistData();
    artists.push(artistData);
    localStorage.setItem("artists", JSON.stringify(artists));
  }

  getStoredArtistData() {
    const storedData = localStorage.getItem("artists");
    return storedData ? JSON.parse(localStorage.getItem("artists")) : [];
  }

  clearStoredArtistData() {
    localStorage.removeItem("artists");
  }
}

export default ArtistService;
