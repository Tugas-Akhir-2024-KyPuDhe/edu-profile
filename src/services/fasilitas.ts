import axios, { AxiosResponse } from "axios";

interface FasilitasService {
  all: () => Promise<AxiosResponse>;
  single: (id: number) => Promise<AxiosResponse>;
}

const FasilitasService = (): FasilitasService => {
  const all = async (): Promise<AxiosResponse> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/fasilitas/get`
      );
      
      return response;
    } catch (error) {
      console.error("Error fetch all:", error);
      throw error;
    }
  };

  const single = async (id: number): Promise<AxiosResponse> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/fasilitas/get/${id}`
      );
      return response;
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
