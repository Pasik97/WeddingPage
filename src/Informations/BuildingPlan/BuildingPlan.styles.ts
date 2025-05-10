import styled from "styled-components";
import { desktopStart } from "../../constants/media";

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 16px;
    width: 100%;
`;


export const SectionTitle = styled.p`
    margin-top: 32px;
    margin-bottom: 16px;
    font-family: "Fraunces", sans-serif;
    font-size: 24px;
    line-height: 32px;
    font-weight: 300;

    ${desktopStart} {
        margin-top: 16px;
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 32px;
    }
`;

export const ImagesWrapper = styled.div`
    width: 100%;
    height: 440px;
    overflow: hidden;
    margin-top: 24px;

    ${desktopStart} {
        margin-top: 32px;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 440px;
    padding-bottom: 40px;

    ${desktopStart} {
        padding-bottom: 48px;
    }
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
        max-width: 836px;
        margin: 8px auto 0;
    }
`;
