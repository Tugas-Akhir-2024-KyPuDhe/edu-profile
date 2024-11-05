import axios, { AxiosResponse } from "axios";
import { GetAllFajusekResponse, GetSingleFajusekResponse } from "../interfaces/responses";

interface FasilitasService {
  all: () => Promise<GetAllFajusekResponse>;
  single: (id: number) => Promise<GetSingleFajusekResponse>;
}

const FasilitasService = (): FasilitasService => {
  const all = async (): Promise<GetAllFajusekResponse> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/fasilitas/get`
      );
      
      return response.data;
    } catch (error) {
      console.error("Error fetch all:", error);
      throw error;
    }
  };

  const single = async (id: number): Promise<GetSingleFajusekResponse> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/fasilitas/get/${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetch single:", error);
      throw error;
    }
  };

  return {
    all,
    single
  };
};

export default FasilitasService;
