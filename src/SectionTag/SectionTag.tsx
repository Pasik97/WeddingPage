import React from "react";
import * as S from "./SectionTag.styles";

interface SectionTagProps {
    text: string;
    variant?: "light" | "dark";
    className?: string
}

const SectionTag: React.FC<SectionTagProps> = ({ text, variant = "light", className }) => (
    <S.Tag className={className} variant={variant}>{text}</S.Tag>
)

export default SectionTag
