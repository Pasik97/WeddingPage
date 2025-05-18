import styled from "styled-components";
import SectionTag from "../SectionTag/SectionTag";
import { Colors } from "../constants/Colors";
import { desktopStart } from "../constants/media";
import Carousel from "../Carousel/Carousel";

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 24px 32px;
    text-align: center;
    background: ${Colors.white};

    ${desktopStart} {
        padding-top: 96px;
        padding-bottom: 80px;
    }
`;

export const StyledSectionTag = styled(SectionTag)`
    margin: 0 auto;
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
        max-width: 556px;
        margin: 32px auto 0;
        margin-bottom: 12px;
    }
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
        max-width: 960px;
        margin: 32px auto 16px;
    }
`;

export const BoldText = styled.span`
    font-weight: 400;
`;

export const Menu = styled.div`
    padding: 0 16px 24px;

    ${desktopStart} {
        max-width: 380px;
    }
`;

export const MenuTitle = styled.p`
    margin: 32px 0;
    font-family: "Fraunces", sans-serif;
    font-size: 24px;
    line-height: 32px;
    font-weight: 300;
    text-align: left;

    ${desktopStart} {
        font-size: 32px;
        line-height: 36px;
    }
`;

export const MenuItems = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: cetner;
`;

export const MenuItem = styled.div`
    display: flex;
    margin-bottom: 32px;
`;

export const ItemName = styled.span`
    min-width: 100px;
    font-size: 14px;
    line-height: 21px;
    font-weight: 600;
`;

export const ItemFoods = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Food = styled.span`
    font-size: 14px;
    line-height: 21px;
    margin: 2px 0;

    &:first-of-type {
        margin-top: 0;
    }

    ${desktopStart} {
        margin: 4px 0;
    }
`;

export const ItemWege = styled.div`
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 2px 0;

    ${desktopStart} {
        margin: 4px 0;
    }
`;

export const WegeIcon = styled.div`
    width: 16px;
    height: 16px;
`;

export const StyledCarousel = styled(Carousel)`
    ${desktopStart} {
        display: none;
    }
`;

export const CenterWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const DesktopMenus = styled.div`
    display: none;

    ${desktopStart} {
        display: flex;
        justify-content: center;
        gap: 200px;
    }
`;
