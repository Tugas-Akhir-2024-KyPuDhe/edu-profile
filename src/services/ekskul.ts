import axios, { AxiosResponse } from "axios";

interface EkstrakurikulerService {
  all: () => Promise<AxiosResponse>;
  single: (id: number) => Promise<AxiosResponse>;
}

const EkstrakurikulerService = (): EkstrakurikulerService => {
  const all = async (): Promise<AxiosResponse> => {
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

  const single = async (id: number): Promise<AxiosResponse> => {
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
