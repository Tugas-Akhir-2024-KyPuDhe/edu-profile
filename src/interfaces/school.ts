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

export interface FormTracer {
    "name": string
    "birth_place": string,
    "birth_date": string,
    "ttl": string,
    "gender": string
    "address": string
    "addressNow": string,
    "phone": string
    "email": string
    "startYear": string
    "endYear": string
    "employmentStatus": string
    "institutionName": string,
    "institutionAddress": string,
    "isSatisfactionMet": string,
    "disSatisfactionFactors": string,
    "studyIssues": string
  }