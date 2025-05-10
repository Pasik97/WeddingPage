import React from "react";
import * as S from "./Media.styles";

const photosLink = "https://drive.google.com/drive/folders/16GKRkj1p4Jn1QLN28HsXqernf_6iswPd?usp=sharing";
const moviesLink = "https://drive.google.com/drive/folders/1xa_9bTOFSMKsQwua_km_lUw9yESgwwiY?usp=drive_link";

const Media: React.FC = () => (
    <S.SectionWrapper id="media">
        <S.StyledSectionTag text="MEDIA" />
        <S.SectionText>Tutaj znajdziesz <S.BoldText>wspomnienia z naszego ślubu</S.BoldText></S.SectionText>
        <S.Info>W tym miejscu, na przestrzeni około 3 miesięcy, udostępnione zostaną zdjęcia i filmy z naszego wielkiego dnia, który chcemy zapamiętać na zawsze – razem z Wami. Przeżyjmy te magiczne chwile jeszcze raz! Przeglądaj, pobieraj, dziel się i wspominaj. To właśnie dzięki Wam ten dzień był tak wyjątkowy.</S.Info>
        <S.ButtonsWrapper>
            <S.Button href={photosLink} target="_blank">Zdjęcia</S.Button>
            <S.Button href={moviesLink} target="_blank">Filmy</S.Button>
        </S.ButtonsWrapper>
    </S.SectionWrapper>
)

export default Media
