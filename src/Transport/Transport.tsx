import React from "react";
import * as S from "./Transport.styles";
import { ReactComponent as BusIcon } from "../assets/busIcon.svg";
import { ReactComponent as HotelIcon } from "../assets/hotelIcon.svg";

const infos = [
    { icon: <BusIcon />, text: "Od godziny 1:00 w nocy kursować będzie bus 10-osobowy, natomiast od godziny 3:00 dołączy do niego drugi minivan. Zachęcamy do skorzystania z transportu i odebrania samochodów następnego dnia, aby móc w pełni cieszyć się zabawą bez zmartwień." },
    { icon: <HotelIcon />, text: "Zameldowanie możliwe jest od godziny 14:00, a wymeldowanie do godziny 11:00 dnia następnego. Wierzymy, że nocleg będzie dla Ciebie miłym przedłużeniem naszego wspólnego świętowania!" },
]

const Transport: React.FC = () => (
    <S.SectionWrapper id="transport&Accommodation">
        <S.StyledSectionTag text="TRANSPORT & NOCLEG" />
        <S.SectionText>Zobacz, jak łatwo możesz <S.BoldText>odpocząć</S.BoldText> lub <S.BoldText>wrócić do domu</S.BoldText></S.SectionText>
        <S.SectionSubText>Z myślą o Waszym komforcie i bezpieczeństwie zadbaliśmy o transport powrotny, natomiast dla gości przyjezdnych przygotowaliśmy również noclegi na miejscu.</S.SectionSubText>
        <S.StyledCarousel showArrows={false}>
            {infos.map(({ text, icon }) => (
                <S.InfoWrapper>
                    <S.IconWrapper>{icon}</S.IconWrapper>
                    <S.Info key={text}>{text}</S.Info>
                </S.InfoWrapper>
            ))}
        </S.StyledCarousel>
        <S.DesktopWrapper>
            <S.InfoWrapper>
                <S.IconWrapper>{infos[0].icon}</S.IconWrapper>
                <S.Info>{infos[0].text}</S.Info>
            </S.InfoWrapper>
            <S.Divider />
            <S.InfoWrapper>
                <S.IconWrapper>{infos[1].icon}</S.IconWrapper>
                <S.Info>{infos[1].text}</S.Info>
            </S.InfoWrapper>
        </S.DesktopWrapper>
    </S.SectionWrapper>
)

export default Transport
