import styled from "styled-components";
import SectionTag from "../SectionTag/SectionTag";
import { Colors } from "../constants/Colors";
import { desktopStart } from "../constants/media";

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    text-align: center;
    padding-top: 64px;
    padding-bottom: 80px;
    margin-top: 48px;
    background: ${Colors.textBlack};
    color: ${Colors.white};

    ${desktopStart} {
        padding-top: 96px;
        padding-bottom: 112px;
    }
`;

export const MaxContentWrapper = styled.div`
    ${desktopStart} {
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
    }
`;

export const StyledSectionTag = styled(SectionTag)`
    margin: 0 auto;
`;

export const PlanWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const StepText = styled.div`
    padding: 12px 0;
    border-bottom: 1px solid ${Colors.darkBorder};
    text-align: left;
    font-size: 16px;
    line-height: 20px;
    font-weight: 300;

    ${desktopStart} {
        font-size: 20px;
        padding: 12px 24px;
    }
`;

export const Step = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;

    ${desktopStart} {
        grid-template-columns: 1fr 1fr;

        ${StepText}:nth-child(odd) {
            text-align: right;
        }
    }

    &:last-of-type {
        ${StepText} {
            border: none;
        }
    }
`;


export const SectionTitle = styled.p`
    margin: 24px 0;
    font-family: "Fraunces", sans-serif;
    font-size: 32px;
    line-height: 40px;
    font-weight: 300;

    ${desktopStart} {
        max-width: 800px;
        margin: 32px auto;
        width: 100%;
        font-size: 56px;
        line-height: 64px;
    }
`;

export const BoldText = styled.span`
    font-weight: 400;
`;
