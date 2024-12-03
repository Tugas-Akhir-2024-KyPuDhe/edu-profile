import { Media } from "./media"

export interface School {
    name: string,
    about: string,
    vision: string,
    mission: string,
    address: string,
    mediaId: null,
    telp: string,
    email: string,
    npsn: string,
    fb: string,
    ig: string,
    tiktok: string,
    maps: string,
    logo: Media
}

export interface Statistic {
    student: number,
    teacher: number,
    staff: number,
    major: number,
    alumni: number
}