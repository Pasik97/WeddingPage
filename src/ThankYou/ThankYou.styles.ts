import styled from "styled-components";
import SectionTag from "../SectionTag/SectionTag";
import { desktopStart } from "../constants/media";
import { Colors } from "../constants/Colors";

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 24px 48px;
    text-align: center;
    background: ${Colors.white};
    padding-top: 80px;

    ${desktopStart} {
        padding-top: 112px;
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
        max-width: 1000px;
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
        max-width: 740px;
    }
`;

export const SecondText = styled(Info)`
    margin: -8px auto 0;
`

export const Signature = styled(Info)`
    margin: 8px auto 24px;
    font-family: "Fraunces", sans-serif;
    font-size: 21px;

    ${desktopStart} {
        font-size: 24px;
    }
`
