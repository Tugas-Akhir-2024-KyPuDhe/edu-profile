import axios, { AxiosResponse } from "axios";
import { GetGalleryResponse } from "../interfaces/responses/gallery";

interface GalleryService {
    get: () => Promise<GetGalleryResponse>;
}

const GalleryService = (): GalleryService => {
  const get = async (): Promise<GetGalleryResponse> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/gallery/get`
      );
      
      return response.data;
    } catch (error) {
      console.error("Error fetch all:", error);
      throw error;
    }
  };

  return {
    get
  };
};

export default GalleryService;
