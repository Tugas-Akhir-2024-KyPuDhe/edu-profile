import axios, { AxiosResponse } from "axios";

interface EkstrakurikulerService {
  all: () => Promise<unknown>;
  single: (id: number) => Promise<unknown>;
}

const EkstrakurikulerService = (): EkstrakurikulerService => {
  const all = async (): Promise<unknown> => {
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

  const single = async (id: number): Promise<unknown> => {
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
