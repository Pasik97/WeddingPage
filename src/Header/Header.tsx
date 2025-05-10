import React from "react";
import * as S from "./Header.styles";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { ReactComponent as GKLogo } from "../assets/Gab_Kon_logo.svg";
import HeaderPhoto from "../assets/header.jpg";

const Header: React.FC = () => (
    <S.Header>
        <S.TopSection>
            <S.TopSectionContent>
                <S.LogoWrapper>
                    <Logo />
                </S.LogoWrapper>
                <S.GKLogoWrapper>
                    <GKLogo />
                </S.GKLogoWrapper>
            </S.TopSectionContent>
        </S.TopSection>
        <S.ImgWrapper>
            <S.HeaderImg src={HeaderPhoto} />
        </S.ImgWrapper>
    </S.Header>
)

export default Header
