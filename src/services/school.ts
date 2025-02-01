import axios, { AxiosResponse } from "axios";
import { GetConfigSchool, GetStatisticSchool } from "../interfaces/responses";
import { FormTracer } from "../interfaces/school";
import { TracerPostResponse } from "../interfaces/responses/school";

interface SchoolService {
    get: () => Promise<GetConfigSchool>;
    statistics: () => Promise<GetStatisticSchool>;
    tracer: (data: FormTracer) => Promise<TracerPostResponse>;
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

  const tracer = async (data : FormTracer): Promise<TracerPostResponse> => {
    try {
      const response: AxiosResponse = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/study-tracer/store`,
        data
      );
      
      return response.data;
    } catch (error) {
      console.error("Error fetch all:", error);
      throw error;
    }
  };

  return {
    get,
    statistics,
    tracer
  };
};

export default SchoolService;
