import { Media } from "./media";

export interface Fajusek {
  id: number;
  uuid: string;
  name: string;
  description: string;
  prioritas: number;
  createdAt: string;
  updatedAt: string;
  media: Media[];
}