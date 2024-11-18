import axios, { AxiosResponse } from "axios";
import { GetConfigSchool, GetStatisticSchool } from "../interfaces/responses";

interface SchoolService {
    get: () => Promise<GetConfigSchool>;
    statistics: () => Promise<GetStatisticSchool>;
}

const SchoolService = (): SchoolService => {
  const get = async (): Promise<GetConfigSchool> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/config-school/get`
      );
      
      return response.data;
    } catch (error) {
      console.error("Error fetch all:", error);
      throw error;
    }
  };

  const statistics = async (): Promise<GetStatisticSchool> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/config-school/statistik`
      );
      
      return response.data;
    } catch (error) {
      console.error("Error fetch all:", error);
      throw error;
    }
  };

  return {
    get,
    statistics
  };
};

export default SchoolService;
