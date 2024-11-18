import { Media } from "./media";

export interface Banner {
  id: number;
  uuid: string;
  bannerId: string | null;
  title: string;
  title_link: string;
  description: string;
  link: string;
  status: string;
  prioritas: number;
  createdBy: string;
  updateBy: string;
  createdAt: string;
  updatedAt: string;
  banner: Media;
}
  