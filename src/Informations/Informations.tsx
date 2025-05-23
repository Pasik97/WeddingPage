import React, { useState } from "react";
import * as S from "./Informations.styles";
import { ReactComponent as CalendarIcon } from "../assets/calendarIcon.svg";
import { ReactComponent as ClockIcon } from "../assets/clockIcon.svg";
import { ReactComponent as ChurchIcon } from "../assets/churchIcon.svg";
import { ReactComponent as ChampagneIcon } from "../assets/champagne.svg";
import Map from "../assets/mapa.jpg";
import SzarwarkMap from "../assets/szarwarkMapa.jpg";
import BuildingPlan from "./BuildingPlan/BuildingPlan";
import TableForm from "./TableForm/TableForm";

const linkGoogleMaps = "https://www.google.com/maps/dir//Parafia+rzymskokatolicka+pw.+Naj%C5%9Bwi%C4%99tszego+Serca+Pana+Jezusa,+Orla+47,+39-200+D%C4%99bica/@50.0305434,21.3850825,17.38z/data=!4m9!4m8!1m0!1m5!1m1!1s0x473d0a059efbf8d3:0x4d9db14a396aaae8!2m2!1d21.3868811!2d50.0306565!3e0?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D";
const szarwarkLinkGoogleMaps = "https://www.google.com/maps/dir//Dom+Weselny+Szarwark,+Szarwark+36,+33-200+Szarwark/@50.1360714,21.0540534,16.25z/data=!4m9!4m8!1m0!1m5!1m1!1s0x473d798e5015516d:0x8b559b7a8735987b!2m2!1d21.0571989!2d50.1364876!3e0?entry=ttu&g_ep=EgoyMDI1MDUwMy4wIKXMDSoASAFQAw%3D%3D";

const Informations: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const onSlideChange = (index: number) => {
        setCurrentSlide(index);
    }

    return (
        <S.SectionWrapper id="info">
            <S.StyledSectionTag text="INFORMACJE ORGANIZACYJNE" />
            <S.SectionText>Wszystko, co musisz wiedzieć o naszym ślubie – <S.BoldText>baw się razem z nami!</S.BoldText></S.SectionText>
            <S.SectionSubText>Poniżej znajdziesz wszystkie najważniejsze informacje dotyczące naszego ślubu i przyjęcia weselnego.</S.SectionSubText>
            <S.SectionSubText>Aby ułatwić dojazd, przygotowaliśmy mapę z trasą do kościoła oraz sali weselnej – wystarczy kliknąć przycisk „Przejdź do Google Maps”, a wszystko stanie się jasne!</S.SectionSubText>
            <S.InfoAndMapWrapper>
                <S.WeddingInfoWrapper>
                    <S.LeftTitle>Szczegóły organizacyjne</S.LeftTitle>
                    <S.LeftText>Tutaj znajdziecie wszystkie istotne szczegóły dotyczące ceremonii ślubnej oraz przyjęcia weselnego.</S.LeftText>
                    <S.Info>
                        <S.InfoIconWrapper><S.IconWrapper><CalendarIcon /></S.IconWrapper><S.InfoText>Data:</S.InfoText></S.InfoIconWrapper>
                        <S.InfoText>07.06.2025</S.InfoText>
                    </S.Info>
                    <S.Info>
                        <S.InfoIconWrapper><S.IconWrapper><ClockIcon /></S.IconWrapper><S.InfoText>Godzina:</S.InfoText></S.InfoIconWrapper>
                        <S.InfoText>14:00</S.InfoText>
                    </S.Info>
                    <S.Info>
                        <S.InfoIconWrapper><S.IconWrapper><ChurchIcon /></S.IconWrapper><S.InfoText>Kościół:</S.InfoText></S.InfoIconWrapper>
                        <S.InfoText>Najświętszego Serca Pana Jezusa w Dębicy</S.InfoText>
                    </S.Info>
                    <S.Info>
                        <S.InfoIconWrapper><S.IconWrapper><ChampagneIcon /></S.IconWrapper><S.InfoText>Dom Weselny:</S.InfoText></S.InfoIconWrapper>
                        <S.InfoText>Dom Weselny Szarwark</S.InfoText>
                    </S.Info>
                </S.WeddingInfoWrapper>
                <S.MapWrapper>
                    <S.StyledCarousel onChange={onSlideChange}>
                        <S.ImgWrapper><S.Img src={Map} alt="map" /></S.ImgWrapper>
                        <S.ImgWrapper><S.Img src={SzarwarkMap} alt="szarwark_map" /></S.ImgWrapper>
                    </S.StyledCarousel>
                    <S.MockButton href={currentSlide === 0 ? linkGoogleMaps : szarwarkLinkGoogleMaps} target="_blank">Przejdź do Google Maps</S.MockButton>
                </S.MapWrapper>
            </S.InfoAndMapWrapper>
            <BuildingPlan />
            <TableForm />
        </S.SectionWrapper >
    )
}

export default Informations
