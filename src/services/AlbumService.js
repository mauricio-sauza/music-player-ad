class AlbumService {
    saveAlbumData(albumData) {
      const albums = this.getStoredAlbumData();
      albums.push(albumData);
      localStorage.setItem("albums", JSON.stringify(artists));
    }
  
    getStoredAlbumData() {
      const storedData = localStorage.getItem("albums");
      return storedData ? JSON.parse(localStorage.getItem("albums")) : [];
    }
  
    clearStoredAlbumData() {
      localStorage.removeItem("albums");
    }
  }
  
  export default AlbumService;
  