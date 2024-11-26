import { Media } from './media';
export interface  Gallery{
    id: number,
    uuid: string,
    name: string,
    description: string,
    prioritas: number,
    status: string,
    createdAt: string,
    updatedAt: string,
    media: Media[]
}