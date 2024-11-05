import { Article } from "../article";

export interface GetAllArtikelResponse {
    message: string;
    total: number,
    per_page: number,
    current_page: number,
    last_page: number,
    from: number,
    to: number,
    data: Article[];
}
  
export interface GetSingleArtikelResponse {
    message: string;
    data: Article;
}