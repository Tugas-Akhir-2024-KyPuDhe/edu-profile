import { Fajusek } from "../fajusek";

export interface GetAllFajusekResponse {
    message: string;
    data: Fajusek[];
}
  
export interface GetSingleFajusekResponse {
    message: string;
    data: Fajusek;
}