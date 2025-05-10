import styled from "styled-components";
import SectionTag from "../SectionTag/SectionTag";
import { Colors } from "../constants/Colors";
import { desktopStart } from "../constants/media";
import Carousel from "../Carousel/Carousel";

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 24px 64px;
    text-align: center;
    background: ${Colors.white};

    ${desktopStart} {
        padding: 96px 0 48px;
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
        margin: 32px 0 32px;
        max-width: 840px;
        margin: 32px auto 16px;
    }
`;

export const SectionSubText = styled.p`
    margin: 0;
    margin-top: 16px;
    margin-bottom: 12px;
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;

    ${desktopStart} {
        font-size: 14px;
        line-height: 20px;
        max-width: 560px;
        margin: 32px auto 0;
        margin-bottom: 12px;
    }
`;

export const BoldText = styled.span`
    font-weight: 400;
`;

export const Info = styled.p`
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;

    ${desktopStart} {
        font-size: 14px;
        line-height: 21px;
    }
`;

export const InfoWrapper = styled.div`
    padding: 4px 24px 16px;
    margin: 56px 0 72px;

    ${desktopStart} {
        width: 100%;
        margin: 0;
    }
`;

export const IconWrapper = styled.div`
    svg {
        width: 48px;
    }
`;

export const SubTitle = styled.p`
    margin: 24px 0 16px;
    font-family: "Fraunces", sans-serif;
    font-size: 24px;
    line-height: 32px;
    font-weight: 300;
    text-align: left;
`;

export const StyledCarousel = styled(Carousel)`
    ${desktopStart} {
        display: none;
    }
`;

export const DesktopWrapper = styled.div`
    display: none;
    margin: 32px auto 64px;

    ${desktopStart} {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 64px;
        padding: 32px 0;
        max-width: 1200px;
        margin: 32px auto;
    }
`;

export const Divider = styled.div`
    width: 1px;
    background: ${Colors.textBlack};
    height: 200px;
`;
