import axios, { AxiosResponse } from "axios";
import { GetAllFajusekResponse, GetSingleFajusekResponse } from "../interfaces/responses";

interface EkstrakurikulerService {
  all: () => Promise<GetAllFajusekResponse>;
  single: (id: number) => Promise<GetSingleFajusekResponse>;
}

const EkstrakurikulerService = (): EkstrakurikulerService => {
  const all = async (): Promise<GetAllFajusekResponse> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/ekstrakurikuler/get`
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
        `${import.meta.env.VITE_API_URL}/api/ekstrakurikuler/get/${id}`
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

export default EkstrakurikulerService;
