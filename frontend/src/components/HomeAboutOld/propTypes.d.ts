import { ReactNode } from "react";
// Standard Props
export type HomeAboutProps = {
    title: string;
    description: string;
    thumbnail: string;
    reverse?: boolean;
};
// Compount Component - Pattern Desgin
export type HomeAboutItemProps = {
    className?: string;
    children: ReactNode;
};