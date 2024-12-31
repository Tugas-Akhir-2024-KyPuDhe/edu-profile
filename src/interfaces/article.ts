import { Media } from "./media";

export interface Article {
  id: number;
  uuid: string;
  bannerId: string | null;
  title: string;
  description: string;
  date: Date;
  status: string;
  type: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  media: Media[];
  banner: Media | null;
}
  