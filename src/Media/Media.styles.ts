import styled from "styled-components";
import SectionTag from "../SectionTag/SectionTag";
import { Colors } from "../constants/Colors";
import { desktopStart } from "../constants/media";

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 24px 32px;
    text-align: center;

    ${desktopStart} {
        padding-bottom: 16px;
    }
`;

export const StyledSectionTag = styled(SectionTag)`
    margin: 0 auto;
`;

export const SectionText = styled.p`
    margin: 24px 0 16px;
    font-family: "Fraunces", sans-serif;
    font-size: 32px;
    line-height: 40px;
    font-weight: 300;

    ${desktopStart} {
        font-size: 56px;
        line-height: 64px;
        max-width: 800px;
        margin: 32px auto 16px;
    }
`;

export const BoldText = styled.span`
    font-weight: 400;
`;

export const Info = styled.p`
    padding-right: 24px;
    min-width: 290px;
    margin: 24px 0 32px;
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;

    ${desktopStart} {
        font-size: 14px;
        line-height: 21px;
        margin: 24px auto 48px;
        max-width: 560px;
    }
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 32px;
    padding-bottom: 24px;
`;

export const Button = styled.a`
    background: ${Colors.textBlack};
    color: ${Colors.white};
    padding: 16px;
    border-radius: 8px;
    font-size: 14px;
    line-height: 14px;
    text-decoration: none !important;
    min-width: 72px;
`;
