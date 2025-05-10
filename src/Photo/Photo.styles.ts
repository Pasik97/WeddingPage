import styled from "styled-components";
import { Colors } from "../constants/Colors";
import { desktopStart } from "../constants/media";

export const PhotoWrapper = styled.div<{ tilt: number; }>`
    background: ${Colors.white};
    padding: 16px 16px 12px;
    display: flex;
    flex-direction: column;
    transform: ${({tilt}) => `rotate(${tilt}deg);`};

    ${desktopStart} {
        padding-bottom: 8px;
    }
`

export const PhotoImg = styled.img`
    width: auto;
    height: 100%;
`

export const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SecondText = styled.span`
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
    align-self: center;
    margin-top: 12px;

    ${desktopStart} {
        margin-top: 8px;
        font-size: 14px;
        line-height: 20px;
    }
`;

export const PhotoText = styled.span`
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
    align-self: center;
    margin-top: 12px;

    ${desktopStart} {
        margin-top: 8px;
        font-size: 14px;
        line-height: 20px;
    }
`

export const OverflowWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    max-width: 100%;
`;
