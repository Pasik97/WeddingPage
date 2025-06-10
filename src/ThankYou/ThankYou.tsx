import React from "react";
import * as S from "./ThankYou.styles";


const ThankYou: React.FC = () => (
    <S.SectionWrapper id="thankYou">
        <S.StyledSectionTag text="DZIĘKUJEMY!" />
        <S.SectionText>Kochani Goście, za Waszą obecność, radość i uśmiech jeszcze raz <S.BoldText>dziękujemy!</S.BoldText></S.SectionText>
        <S.Info>Z całego serca chcemy podziękować Wam za obecność w tym wyjątkowym dla nas dniu. Wasze uśmiechy, radość, ciepłe słowa i serdeczne gesty sprawiły, że nasz ślub i wesele stały się piękniejsze, niż mogliśmy sobie wymarzyć. To dzięki Wam ten dzień był tak pełen śmiechu i prawdziwej radości. Wasza obecność, widok Waszej dobrej zabawy i zaangażowanie w świętowanie razem z nami były dla nas najpiękniejszym prezentem, jaki mogliśmy otrzymać. Dziękujemy za każde dobre słowo, każdą myśl i każdy uśmiech, który tego dnia skierowaliście w naszą stronę. Cieszymy się, że mogliśmy dzielić ten niezwykły moment właśnie z Wami.</S.Info>
        <S.SecondText>Z wdzięcznością i miłością,</S.SecondText>
        <S.Signature>Gabriela i Konrad</S.Signature>
    </S.SectionWrapper>
)

export default ThankYou
