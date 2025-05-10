import styled from "styled-components";
import SectionTag from "../SectionTag/SectionTag";
import Photo from "../Photo/Photo";
import { desktopStart } from "../constants/media";
import { OverflowWrapper } from "../Photo/Photo.styles";

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 24px 32px;
    text-align: center;

    ${desktopStart} {
        padding: 96px 24px 80px;
    }
`;

export const StyledPhoto = styled(Photo)`
    width: auto;
    max-width: 360px;
    margin: 0 auto;
    background: #F6F6F6;
    padding: 0;

    ${OverflowWrapper} {
        background: #F6F6F6;
    }

    img {
        width: 100%;
        height: auto;
        mix-blend-mode: multiply;
    }

    ${desktopStart} {
        width: 100%;
    }
`;

export const StyledSectionTag = styled(SectionTag)`
    margin: 0 auto;
`;

export const SectionSubText = styled.p`
    margin: 0;
    margin-top: 24px;
    margin-bottom: 0px;
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;

    ${desktopStart} {
        font-size: 14px;
        line-height: 20px;
        max-width: 556px;
        margin: 0 auto 0;
        margin-bottom: 48px;
    }
`;

export const SectionText = styled.p`
    margin: 24px 0 8px;
    font-family: "Fraunces", sans-serif;
    font-size: 32px;
    line-height: 40px;
    font-weight: 300;

    ${desktopStart} {
        font-size: 56px;
        line-height: 64px;
        max-width: 960px;
        margin: 32px auto 24px;
    }
`;

export const BoldText = styled.span`
    font-weight: 400;
`;

export const Drink = styled.div`
    padding-bottom: 24px;
    margin: 0 8px;

    ${desktopStart} {
        display: flex;
        gap: 60px;
        align-items: center;
        max-width: 1000px;
        margin: 0 auto;
        padding-bottom: 64px;
    }
`;

export const TextsWrapper = styled.div`
    ${desktopStart} {
        width: 100%;
    }
`;

export const DrinkTitle = styled.p`
    margin: 0px 0 16px;
    font-family: "Fraunces", sans-serif;
    font-size: 24px;
    line-height: 32px;
    font-weight: 300;
    text-align: left;

    ${desktopStart} {
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 32px;
    }
`;

export const DrinkItems = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: cetner;
`;

export const DrinkItem = styled.div`
    display: grid;
    margin-bottom: 32px;
    grid-template-columns: 80px 1fr;

    ${desktopStart} {
        margin-bottom: 24px;
    }
`;

export const ItemName = styled.span`
    width: 100px;
    font-size: 14px;
    line-height: 21px;
    font-weight: 600;
`;

export const Step = styled.span`
    font-size: 14px;
    line-height: 21px;

    ${desktopStart} {
        max-width: 460px;
    }
`;
