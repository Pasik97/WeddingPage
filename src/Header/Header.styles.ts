import styled from "styled-components";
import { Colors } from "../constants/Colors";
import { desktopStart } from "../constants/media";

export const Header = styled.div`
    padding-bottom: 80px;

    ${desktopStart} {
        padding-bottom: 112px;
    }
`;

export const TopSection = styled.div`
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${Colors.white};
`;

export const TopSectionContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 4px 16px;

    ${desktopStart} {
        padding: 4px 80px;
    }
`;

export const LogoWrapper = styled.div`
    svg {
        width: 68px;
        height: 62px;
    }

    ${desktopStart} {
        svg {
            width: 80px;
            height: auto;
        }
    }
`;

export const GKLogoWrapper = styled.div`
    svg {
        width: 124px;
        height: 47px;
    }

    ${desktopStart} {
        svg {
            width: 160px;
            height: auto;
        }
    }
`;

export const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    ${desktopStart} {
        height: 800px;
        overflow: hidden;
    }
`;

export const HeaderImg = styled.img`
    height: 664px;

    ${desktopStart} {
        height: auto;
    }
`;
