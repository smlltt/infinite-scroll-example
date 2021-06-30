import axios from "axios";
import unsplashApiKey from "../config";

const UnsplashApi = {
  getPhotos: async () => {
    try {
      return await axios.get(
        `https://api.unsplash.com/photos/random?client_id=${unsplashApiKey}&count=20`
      );
    } catch (error) {
      console.log(error.response.body);
    }
  },
};

export default UnsplashApi;
