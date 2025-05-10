import React from "react";
import * as S from "./Photo.styles";

interface PhotoProps {
    text?: string;
    secondText?: string;
    photo: string;
    rotation?: number;
    className?: string;
}

const Photo: React.FC<PhotoProps> = ({ className, text, photo, rotation = 0, secondText }) => (
    <S.PhotoWrapper className={className} tilt={rotation}>
        <S.OverflowWrapper><S.PhotoImg src={photo} /></S.OverflowWrapper>
        <S.TextWrapper><S.PhotoText>{text}</S.PhotoText><S.SecondText>{secondText}</S.SecondText></S.TextWrapper>
    </S.PhotoWrapper>
)

export default Photo;
