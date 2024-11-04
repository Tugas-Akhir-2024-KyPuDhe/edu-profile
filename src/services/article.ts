import axios, { AxiosResponse } from "axios";
import { GetAllArtikelResponse, GetSingleArtikelResponse } from "../interfaces";

interface ArticleService {
  all: ({page, per_page}: {page?: number; per_page?: number }) => Promise<GetAllArtikelResponse>;
  single: (id: number) => Promise<GetSingleArtikelResponse>;
}

const ArticleService = (): ArticleService => {
  const all = async ({page = 1, per_page = 12}: {page?: number; per_page?: number }): Promise<GetAllArtikelResponse> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/artikel/get?page=${page}&per_page=${per_page}`
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
