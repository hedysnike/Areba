import { SegmentedControl } from "@mantine/core";

export interface Profile {
    id: number;
    country: string;
    mame: string;
    surname: string;
    phoneNumber: number;
    mail: string;
    posts?: Post[];
  }
  
  export interface Post {
    id: number;
    title: string;
    content: string;
  }