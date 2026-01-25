import type { ReactElement } from "react";

interface UserDetails {
  _id: string;
  fullname: string;
  email: string;
  hash: string;
  contentDetails: {
    totalPosts: number;
    publicPosts: number;
  };
  __v: number
}

interface SharedData {
  _id:string;
  hash: string;
  userId: {
    fullname: string;
    _id: string;
  }
  publicSharing: {
    _id: string;
    title: string;
    description: string;
    link: string;
    type: string;
    tags: string[];
    userId: string;
    __v: number;
  }[];
  __v: number;
}
interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg" | "xl";
  text: string;
  pIcon?: ReactElement;
  sIcon?: ReactElement;
  onClick: () => void;
  customStyles?: string;
  disabled?: boolean
}
interface CardProps {
  _id: string;
  title: string;
  description: string;
  link: string;
  type: string;
  tags: string[];
  userId: string;
  __v: number;
  deleteContent?: (id: string) => void;
}

type ContentType = 'Post' | 'Link' | 'Idea' | 'Video' | 'Document' | 'Todo' | 'Other' | 'Important';

export type {
  UserDetails,
  ButtonProps,
  CardProps,
  ContentType,
  SharedData
}