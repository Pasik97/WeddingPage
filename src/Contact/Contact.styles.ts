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
        text-align: left;
        margin: 32px 0 48px;
    }
`;

export const ContentWrapper = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`;

export const BoldText = styled.span`
    font-weight: 400;
`;

export const Info = styled.p`
    padding-right: 24px;
    min-width: 290px;
    margin: 24px 0 16px;
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
    
    ${desktopStart} {
        font-size: 14px;
        line-height: 21px;
        text-align: left;
        margin-bottom: 24px;
        max-width: 480px;
    }
`;

export const ContactItem = styled.div`
    font-family: "Fraunces", sans-serif;
    text-align: left;
    border-bottom: 1px solid ${Colors.darkBorder};
    padding: 24px 0;

    ${desktopStart} {
        padding: 32px 0;
    }
`;

export const Label = styled.label`
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
`;

export const Name = styled.p`
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 4px;
`;

export const ContactIcon = styled.a`
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 20px;
        height: 20px;
        fill: ${Colors.white};
    }

    &:hover {
        svg {
            fill: ${Colors.lightGray};
        }
    }
`;

