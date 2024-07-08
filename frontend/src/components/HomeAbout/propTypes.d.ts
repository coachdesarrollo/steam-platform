import { ReactNode } from "react";
// Standard Props
export type HomeAboutProps = {
    title: string;
    description: string;
    thumbnail: string;
};
// Compount Component - Pattern Desgin
export type HomeAboutItemProps = {
    className?: string;
    children: ReactNode;
};