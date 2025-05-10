import React from "react";
import * as S from "./BuildingPlan.styles";
import Carousel from "../../Carousel/Carousel";

const BuildingPlan: React.FC = () => (
    <S.SectionWrapper id="tables">
        <S.SectionTitle>Rzut lokalu</S.SectionTitle>
        <S.SectionSubText>Dla ciekawych – zamieściliśmy również rzut sali weselnej oraz otoczenia, byś już teraz mógł poczuć klimat tego wyjątkowego miejsca.</S.SectionSubText>
        <S.SectionSubText>Na samym dole znajdziesz również formularz, który pozwoli Ci sprawdzić, przy którym stole będziesz siedzieć. Dzięki temu unikniesz zamieszania po przybyciu i od razu poczujesz się jak u siebie!</S.SectionSubText>
        <S.ImagesWrapper>
            <Carousel>
                <S.Img src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
                <S.Img src="https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80" />
            </Carousel>
        </S.ImagesWrapper>
    </S.SectionWrapper>
)

export default BuildingPlan
