import styled from "styled-components";
import SectionTag from "../SectionTag/SectionTag";
import { desktopStart } from "../constants/media";

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    text-align: center;
    padding-top: 80px;

    ${desktopStart} {
        max-width: 1000px;
        margin: 0 auto 72px;
        padding-top: 112px;
    }
`;

export const StyledSectionTag = styled(SectionTag)`
    margin: 0 auto;
`;

export const TextWrapper = styled.div`
    display: flex;
`;

export const SectionText = styled.p`
    margin: 0;
    margin-top: 32px;
    margin-bottom: 32px;
    font-family: "Fraunces", sans-serif;
    font-size: 32px;
    line-height: 40px;
    font-weight: 300;

    ${desktopStart} {
        margin-top: 48px;
        font-size: 56px;
        line-height: 64px;
        margin-bottom: 32px;
    }
`;

export const BoldText = styled.span`
    font-weight: 500;
`;

export const SectionSubText = styled.p`
    margin: 0;
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;

    ${desktopStart} {
        font-size: 14px;
        line-height: 20px;
        max-width: 800px;
        margin: 24px auto 0;
    }
`;
