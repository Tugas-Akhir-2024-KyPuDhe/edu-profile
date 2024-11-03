export interface Media {
    id: number;
    uuid: string;
    url: string;
    type: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Article {
    id: number;
    uuid: string;
    bannerId: string | null;
    title: string;
    description: string;
    date: Date;
    status: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    media: Media[];
    banner: string | null;
  }
  
  export interface GetAllArtikelResponse {
    message: string;
    data: Article[];
  }
  
  export interface GetSingleArtikelResponse {
    message: string;
    data: Article;
  }