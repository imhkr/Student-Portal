import { Entity } from "./Entity";

export interface User  {
    id:number;
    __type?: string;
    first_name?: string;
    middle_name?: string;
    last_name?: string;
    guid?: string;
    role?: string;
    status?: string;
    profile_pic_url?: string;
    email?: string;
    job_type?: string;
    phone_number?: string;
    alternate_phone_number?: string;
    gender?:  "Male" | "Female";
    birth_year?: string;
    birth_month?: string;
    birth_date?: string;
    death_year?: string;
    urls?: any[];
    education?: string;
    hometown: string;
    created_at?: Date;
    updated_at?: Date;
    person?: Person;
}

export interface Person {
    id?: number;
    party?: string;
    job_type?: null;
    created_at?: Date;
    updated_at?: Date;
    occupations?: Occupation[];
    educations?: Education[];
}
export interface role{
    role?:"Software Developer";
}
export interface Education {
    __type?: string;
    id?: number;
    user_id?: number;
    course_name_short?: string;
    course_name?: string;
    school_name?: string;
    majors?: string;
    minors?: string;
    start_year?: string;
    end_year?: string;
    source?: string;
    created_at?: Date;
    updated_at?: Date;
}

export interface Occupation {
    id?: number;
    user_id?: number;
    title?: string;
    company?: string;
    start_year?: string;
    end_year?: string;
    created_at?: Date;
    updated_at?: Date;
}
