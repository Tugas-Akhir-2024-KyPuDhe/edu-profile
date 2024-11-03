import axios, { AxiosResponse } from "axios";
import { GetAllArtikelResponse, GetSingleArtikelResponse } from "../interfaces";

interface ArticleService {
  all: () => Promise<GetAllArtikelResponse>;
  single: (id: number) => Promise<GetSingleArtikelResponse>;
}

const ArticleService = (): ArticleService => {
  const all = async (): Promise<GetAllArtikelResponse> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/artikel/get`
      );
      
      return response.data;
    } catch (error) {
      console.error("Error fetch all:", error);
      throw error;
    }
  };

  const single = async (id: number): Promise<GetSingleArtikelResponse> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/artikel/get/${id}`
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

export default ArticleService;
