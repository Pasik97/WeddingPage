import React from "react";
import * as S from "./BuildingPlan.styles";
import { ReactComponent as Outside } from "../../assets/outside.svg";
import { ReactComponent as OutsideTablet } from "../../assets/outsideTablet.svg";
import { ReactComponent as OutsideMobile } from "../../assets/outsideMobile.svg";
import { ReactComponent as Inside } from "../../assets/inside.svg";
import { ReactComponent as InsideTablet } from "../../assets/insideTablet.svg";
import { ReactComponent as InsideMobile } from "../../assets/insideMobile.svg";

const BuildingPlan: React.FC = () => (
    <S.SectionWrapper id="tables">
        <S.SectionTitle>Rzut lokalu</S.SectionTitle>
        <S.SectionSubText>Dla ciekawych – zamieściliśmy również rzut sali weselnej oraz otoczenia, byś już teraz mógł poczuć klimat tego wyjątkowego miejsca.</S.SectionSubText>
        <S.SectionSubText>Na samym dole znajdziesz również formularz, który pozwoli Ci sprawdzić, przy którym stole będziesz siedzieć. Dzięki temu unikniesz zamieszania po przybyciu i od razu poczujesz się jak u siebie!</S.SectionSubText>
        <S.ImagesWrapper>
            <S.MobileCarousel>
                <S.Img><InsideMobile /></S.Img>
                <S.Img><OutsideMobile /></S.Img>
            </S.MobileCarousel>
            <S.TabletCarousel>
                <S.Img><InsideTablet /></S.Img>
                <S.Img><OutsideTablet /></S.Img>
            </S.TabletCarousel>
            <S.DesktopCarousel>
                <S.Img><Inside /></S.Img>
                <S.Img><Outside /></S.Img>
            </S.DesktopCarousel>
        </S.ImagesWrapper>
    </S.SectionWrapper>
)

export default BuildingPlan
