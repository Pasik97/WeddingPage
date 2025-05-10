import styled from "styled-components";
import { Colors } from "../constants/Colors";
import { desktopStart } from "../constants/media";

export const Tag = styled.span<{ variant: "light" | "dark" }>`
    font-family: "Figtree", sans-serif;
    padding: 4px 8px;
    border-radius: 8px;
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;

    ${({ variant }) => variant === "light" ? `
        color: ${Colors.textBlack};
        background: ${Colors.lightGray};
    ` : `
        color: ${Colors.white};
        background: ${Colors.darkGray};
    `}

    ${desktopStart} {
        font-size: 14px;
        line-height: 20px;
    }
`;
