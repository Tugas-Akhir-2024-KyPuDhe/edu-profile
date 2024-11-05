import axios, { AxiosResponse } from "axios";
import { GetConfigSchool } from "../interfaces/responses";

interface SchoolService {
    get: () => Promise<GetConfigSchool>;
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

  return {
    get
  };
};

export default SchoolService;
