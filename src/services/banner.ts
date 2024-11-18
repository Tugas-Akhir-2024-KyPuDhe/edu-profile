import axios, { AxiosResponse } from "axios";
import { GetBannerResponse } from "../interfaces/responses";

interface BannerService {
    get: () => Promise<GetBannerResponse>;
}

const BannerService = (): BannerService => {
  const get = async (): Promise<GetBannerResponse> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/banner/get`
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

export default BannerService;
