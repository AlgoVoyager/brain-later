import type { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg" | "xl";
    text: string;
    pIcon?: ReactElement;
    sIcon?: ReactElement;
    onClick: () => void;
    customStyles?:string;
}
interface CardProps  {
    _id: string;
    title: string;
    description: string;
    link: string;
    type: string;
    tags: string[];
    userId: string;
    __v: number;
}

type ContentType = 'Post' | 'Link' | 'Idea' | 'Video' | 'Document' | 'Todo' | 'Other' | 'Important';

export type {
    ButtonProps,
    CardProps,
    ContentType
}