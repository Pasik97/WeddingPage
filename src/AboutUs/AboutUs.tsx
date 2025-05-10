import React from "react";
import * as S from "./AboutUs.styles";
import ImgSlider from "./ImgSlider/ImgSlider";

const AboutUs: React.FC = () => (
    <>
        <S.SectionWrapper id="aboutUs">
            <S.StyledSectionTag text="O NAS" />
            <S.SectionText><S.BoldText>Gabriela & Konrad,</S.BoldText> dwoje zakochanych, którzy są sobie przeznaczeni</S.SectionText>
            <S.SectionSubText>Nasza historia zaczęła się w Dębicy. Miasto to jest przepełnione wspomnieniami, radością i pierwszymi wspólnymi marzeniami. Poznaliśmy się w 2015 roku, zupełnie nie spodziewając się, że ten zwyczajny dzień stanie się początkiem czegoś tak pięknego. Od 2017 roku jesteśmy nierozłączni – zakochani, oddani i pełni wzajemnego wsparcia.</S.SectionSubText>
            <S.SectionSubText>Wspólnie dzielimy codzienność – tę pełną radości i tę wymagającą cierpliwości. Razem snujemy plany, marzymy i sięgamy po więcej, zawsze ramię w ramię, serce przy sercu.</S.SectionSubText>
            <S.SectionSubText>Rok 2024 przyniósł nam kolejny wyjątkowy rozdział – zaręczyny. To był dzień pełen wzruszeń, radości i cichego przeczucia, że teraz zaczyna się coś jeszcze piękniejszego.</S.SectionSubText>
            <S.SectionSubText>Przez te lata przeżyliśmy niezliczoną ilość pięknych, wzruszających i romantycznych chwil — zarówno w naszym rodzinnym mieście, jak i podróżując po całej Polsce oraz poza jej granicami. Każde miejsce, które odwiedziliśmy, każdy moment, który przeżyliśmy razem, umacniał naszą miłość i przekonanie, że chcemy iść wspólną drogą już na zawsze.</S.SectionSubText>
            <S.SectionSubText>Dziś stoimy u progu nowego etapu – z sercami przepełnionymi miłością i nadzieją, że przed nami jeszcze wiele wspólnych chwil, które uczynią naszą historię jeszcze piękniejszą.</S.SectionSubText>
        </S.SectionWrapper>
        <ImgSlider />
    </>
)

export default AboutUs
