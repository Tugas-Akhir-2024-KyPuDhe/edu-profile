import { Gallery } from "../gallery";
  
export interface GetGalleryResponse {
    message: string;
    data: Gallery[];
}