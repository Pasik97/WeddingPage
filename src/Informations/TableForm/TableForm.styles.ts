import styled from "styled-components";
import { Colors } from "../../constants/Colors";
import { desktopStart } from "../../constants/media";

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    ${desktopStart} {
        flex-direction: row;
        gap: 146px;
        margin: 80px 0;
    }
`;


export const SectionTitle = styled.p`
    margin-top: 32px;
    margin-bottom: 24px;
    font-family: "Fraunces", sans-serif;
    font-size: 24px;
    line-height: 32px;
    font-weight: 300;

    ${desktopStart} {
        font-size: 40px;
        line-height: 48px;
        text-align: left;
        margin-bottom: 16px;
    }
`;

export const SectionText = styled.p`
    margin: 0;
    text-align: left;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    margin-bottom: 16px;

    ${desktopStart} {
        margin-bottom: 32px;
    }
`;

export const FormWrapper = styled.div`
    width: 100%;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 24px;
`;

export const InputLabel = styled.label`
    font-size: 10px;
    line-height: 18px;
    font-weight: 400;
    margin-bottom: 4px;

    ${desktopStart} {
        font-size: 12px;
        line-height: 20px;
        margin-bottom: 8px;
    }
`;

export const Input = styled.input`
    width: calc(100% - 32px);
    border: none !important;
    background: ${Colors.white};
    color: ${Colors.textBlack};
    height: 40px;
    font-size: 14px;
    padding: 2px 16px;

    &:focus, &:focus-visible {
        border: none;
        outline: none;
    }

    &::placeholder {
        color: ${Colors.placeholderColor};
    }
`;

export const Result = styled.div`
    margin-top: 16px;    
    background: ${Colors.white};
    padding: 64px;
    font-size: 32px;
    line-height: 36px;
    font-family: "Fraunces", sans-serif;
    font-weight: 200;
    color: ${Colors.darkGray};

    ${desktopStart} {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        line-height: 44px;
    }
`;

export const TextAndFromWrapper = styled.div``;
