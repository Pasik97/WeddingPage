import styled from "styled-components";
import Carousel from "../../Carousel/Carousel";
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
    overflow: hidden;
    margin-top: 24px;

    ${desktopStart} {
        margin-top: 32px;
    }
`;

export const Img = styled.div`
    width: 100%;
    padding-bottom: 40px;

    svg {
        max-height: 540px;
        border: 1px solid #E6E6E6;
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

export const MobileCarousel = styled(Carousel)`
    @media only screen and (min-width: 600px) {
        display: none;
    }
`

export const TabletCarousel = styled(Carousel)`
    display: none;

    @media only screen and (min-width: 600px) and (max-width: 799px) {
        display: block;
    }
`

export const DesktopCarousel = styled(Carousel)`
    display: none;

    @media only screen and (min-width: 800px) {
        display: block;
    }
`
