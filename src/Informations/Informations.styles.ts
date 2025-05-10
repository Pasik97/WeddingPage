import styled from "styled-components";
import SectionTag from "../SectionTag/SectionTag";
import { Colors } from "../constants/Colors";
import { desktopStart } from "../constants/media";

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    text-align: center;
    padding-top: 16px;

    ${desktopStart} {
        max-width: 1200px;
        margin: 0 auto;
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
    font-family: "Fraunces", sans-serif;
    font-size: 32px;
    line-height: 40px;
    font-weight: 300;
    margin-bottom: 40px;

    ${desktopStart} {
        font-size: 56px;
        line-height: 64px;
        max-width: 960px;
        margin: 48px auto 32px;
    }
`;

export const BoldText = styled.span`
    font-weight: 500;
`;

export const SectionSubText = styled.p`
    margin: 0;
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;

    ${desktopStart} {
        font-size: 14px;
        line-height: 20px;
        max-width: 688px;
        margin: 8px auto 0;
    }
`;

export const WeddingInfoWrapper = styled.div`
    width: 100%;
`;

export const LeftTitle = styled.p`
    font-size: 24px;
    line-height: 32px;
    font-weight: 300;
    font-family: "Fraunces", sans-serif;
    text-align: left;
    margin: 16px 0;

    ${desktopStart} {
        font-size: 40px;
        line-height: 48px;
    }
`;

export const LeftText = styled.p`
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
    text-align: left;
    margin: 0;
    max-width: 360px;

    ${desktopStart} {
        font-size: 14px;
        line-height: 20px;
        margin: 0 0 12px;
        
    }
`;

export const InfoText = styled.span`
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    max-width: 50%;
    text-align: left;

    ${desktopStart} {
        font-size: 20px;
    }
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${Colors.borderColor};
    padding: 24px 0;

    &:last-of-type {
        border: none;
    }

    & > ${InfoText} {
        text-align: right;
    }

    ${desktopStart} {
        padding: 20px 4px;
    }
`;

export const InfoIconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const IconWrapper = styled.div`
    width: 24px;
    height: 24px;
`;

export const MapWrapper = styled.div`
    overflow: hidden;
    position: relative;
    height: 420px;

    ${desktopStart} {
        height: 420px;
        width: 100%;
        margin: 64px 0 64px;
    }
`;

export const MockButton = styled.a`
    background: ${Colors.textBlack};
    color: ${Colors.white};
    padding: 16px;
    border-radius: 8px;
    font-size: 14px;
    line-height: 14px;
    position: absolute;
    bottom: 52px;
    right: 12px;
    text-decoration: none;

    ${desktopStart} {
        bottom: 60px;
    }
`;

export const Img = styled.img`
    height: 400px;
    width: auto !important;
    padding-bottom: 20px;

    ${desktopStart} {
        padding-bottom: 28px;
    }
`;

export const ImgWrapper = styled.div`
    height: 420px;
    display: flex;
    justify-content: center;
    overflow: hidden;
`;

export const InfoAndMapWrapper = styled.div`
    margin-top: 32px;

    ${desktopStart} {
        display: flex;
        align-items: center;
        gap: 146px;
        margin-top: 0px;
    }
`;
