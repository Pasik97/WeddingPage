import styled from "styled-components";
import Photo from "../../Photo/Photo";
import { Colors } from "../../constants/Colors";
import { desktopStart } from "../../constants/media";

export const CenterWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 48px 0;
    cursor: grab;
`

export const FadeWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 700px;

    &:after {
        display: block;
        content: "";
        background: black;
        width: 80px;
        height: 100%;
        position: absolute;
        background: linear-gradient(to left, rgba(255,255,255,0) 50%,${Colors.backgroundGray} 100%);
        top: 0;
        left: 0;
        z-index: 1;

        ${desktopStart} {
            background: linear-gradient(to left, rgba(255,255,255,0) 10%,${Colors.backgroundGray} 100%);
        }
    }

    &:before {
        display: block;
        content: "";
        background: black;
        width: 80px;
        height: 100%;
        position: absolute;
        background: linear-gradient(to right, rgba(255,255,255,0) 65%,${Colors.backgroundGray} 100%);
        top: 0;
        z-index: 1;
        right: 0;

        ${desktopStart} {
            background: linear-gradient(to right, rgba(255,255,255,0) 60%,${Colors.backgroundGray} 100%);
        }
    }

    ${desktopStart} {
        max-width: 1300px;
    }
`;

export const Slider = styled.div`
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    padding: 32px 16px;

    ${desktopStart} {
        grid-auto-flow: column;
        padding: 32px 48px 72px;
    }
`

export const StyledPhoto = styled(Photo)`
    width: 232px;
    height: 256px;
`
