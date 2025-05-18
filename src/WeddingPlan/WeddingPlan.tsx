import React from "react";
import * as S from "./WeddingPlan.styles";

const weddingPlan = [
    { time: "14:00", name: "Ślub" },
    { time: "16:00", name: "Przyjazd na salę weselną, życzenia oraz obiad" },
    { time: "17:30", name: "Pierwszy Taniec" },
    { time: "18:00", name: "Fotobudka - dostępna obok fontanny" },
    { time: "18:30", name: "Zdjęcia grupowe wraz z niespodzianką" },
    { time: "19:30", name: "I Kolacja" },
    { time: "21:00", name: "Fotobudka kończy uwiecznianie chwil" },
    { time: "21:30", name: "Tort Weselny pod gołym niebem" },
    { time: "22:30", name: "II Kolacja" },
    { time: "00:30", name: "III Kolacja" },
    { time: "02:00", name: "IV Kolacja" },
    { time: "", name: "Zabawa do białego rana!" },
]

const WeddingPlan: React.FC = () => (
    <S.SectionWrapper id="plan">
        <S.MaxContentWrapper>
            <S.StyledSectionTag text="PLAN WESELA" variant="dark" />
            <S.SectionTitle>Zobacz, jak wygląda plan naszego <S.BoldText>wielkiego dnia</S.BoldText></S.SectionTitle>
            <S.PlanWrapper>
                {weddingPlan.map(({ time, name }) => (
                    <S.Step key={time + name}>
                        <S.StepText key={time}>{time}</S.StepText>
                        <S.StepText key={name}>{name}</S.StepText>
                    </S.Step>
                ))}
            </S.PlanWrapper>
        </S.MaxContentWrapper>
    </S.SectionWrapper>
)

export default WeddingPlan
