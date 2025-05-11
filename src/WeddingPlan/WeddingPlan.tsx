import React from "react";
import * as S from "./WeddingPlan.styles";

const weddingPlan = [
    { time: "14:00", name: "Ślub" },
    { time: "15:00", name: "Przyjazd na salę weselną" },
    { time: "16:00", name: "Obiad" },
    { time: "17:00", name: "Pierwszy Taniec" },
    { time: "19:00", name: "Tort" },
    { time: "21:00", name: "I Kolacja" },
    { time: "00:00", name: "Oczepiny" },
    { time: "02:00", name: "Zabawa do białego rana!" },
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
