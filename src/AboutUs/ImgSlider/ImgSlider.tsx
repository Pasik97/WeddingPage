import React from "react";
import * as S from "./ImgSlider.styles";
import ScrollContainer from 'react-indiana-drag-scroll'
import AlbertUrodziny from "../../assets/albert_urodziny.jpg";
import Bieszczady from "../../assets/bieszczady.jpg";
import Falesia from "../../assets/falesia.jpg";
import Gdansk from "../../assets/gdansk.jpg";
import Gdynia from "../../assets/gdynia.jpg";
import Jastrzebie from "../../assets/jastrzebie.jpg";
import Leba from "../../assets/leba.jpg";
import Lozko from "../../assets/lozko.jpg";
import Moszna from "../../assets/moszna.jpg";
import Paraga from "../../assets/praga.jpg";
import Riese from "../../assets/riese.jpg";
import Rzym from "../../assets/rzym.jpg";
import Spacer from "../../assets/spacer.jpg";
import Studiowka from "../../assets/studiowka.jpg";
import Swieta from "../../assets/swieta.jpg";
import Ustronie from "../../assets/ustronie.jpg";
import WeseleBarti from "../../assets/wesele_barti.jpg";
import WeseleKingi from "../../assets/wesele_kingi.jpg";
import Wieliczka from "../../assets/wieliczka.jpg";
import Zareczyny from "../../assets/zareczyny.jpg";
import GdyniaPlaza from "../../assets/Gdynia_plaza.jpg";
import WroclawRyby from "../../assets/Gdynia_ryby.jpg";
import Giewont from "../../assets/Giewont.jpg";
import Poczdam from "../../assets/poczdam.jpg";
import Porto from "../../assets/Porto.jpg";
import RzymPlaza from "../../assets/Rzym_plaza.jpg";
import RzymWatykan from "../../assets/Rzym_watykan.jpg";
import Ursa from "../../assets/ursa.jpg";
import DlugaLuka from "../../assets/dlugaLuka.jpg";
import Krakow from "../../assets/krakow.jpg";
import Lublin from "../../assets/lublin.jpg";
import Stanczyki from "../../assets/stanczyki.jpg";
import Szczecin from "../../assets/szczecinNoc.jpg";
import Leknica from "../../assets/leknica.jpg";

// STRZAŁKI!
const imgs = [
    { text: "Faro, Portugalia", year: "2024", photo: Zareczyny, rotation: -15 },
    { text: "Chotowa, Polska", year: "2019", photo: Studiowka, rotation: 12 },
    { text: "Dębica, Polska", year: "2017", photo: Lozko, rotation: -6 },
    { text: "Ustronie Morskie, Polska", year: "2024", photo: Ustronie, rotation: 17 },
    { text: "Praia da Ursa, Portugalia", year: "2024", photo: Ursa, rotation: 9 },
    { text: "Gdynia, Polska", year: "2023", photo: GdyniaPlaza, rotation: -16 },
    { text: "Praga, Czechy", year: "2024", photo: Paraga, rotation: 8 },
    { text: "Praia da Falesia, Portugalia", year: "2024", photo: Falesia, rotation: -15 },
    { text: "Poczdam, Niemcy", year: "2024", photo: Poczdam, rotation: 8 },
    { text: "Osadzki Wierch, Polska", year: "2022", photo: Bieszczady, rotation: -15 },
    { text: "Dębica, Polska", year: "2020", photo: Swieta, rotation: 8 },
    { text: "Porto, Portugalia", year: "2024", photo: Porto, rotation: -15 },
    { text: "Moszna, Polska", year: "2024", photo: Moszna, rotation: -3 },
    { text: "Dębica, Polska", year: "2017", photo: WeseleKingi, rotation: 12 },
    { text: "Gdańsk, Polska", year: "2020", photo: Gdansk, rotation: -7 },
    { text: "Ostia, Włochy", year: "2022", photo: RzymPlaza, rotation: 9 },
    { text: "Rzym, Włochy", year: "2023", photo: RzymWatykan, rotation: -16 },
    { text: "Gdynia, Polska", year: "2023", photo: Gdynia, rotation: -6 },
    { text: "Walim, Polska", year: "2024", photo: Riese, rotation: 8 },
    { text: "Łeba, Polska", year: "2023", photo: Leba, rotation: -8 },
    { text: "Wrocław, Polska", year: "2021", photo: WroclawRyby, rotation: -15 },
    { text: "Dębica, Polska", year: "2018", photo: Spacer, rotation: 12 },
    { text: "Izdebnik, Polska", year: "2021", photo: WeseleBarti, rotation: -6 },
    { text: "Rzym, Włochy", year: "2022", photo: Rzym, rotation: 17 },
    { text: "Dębica, Polska", year: "2024", photo: AlbertUrodziny, rotation: -4 },
    { text: "Wieliczka, Polska", year: "2023", photo: Wieliczka, rotation: -16 },
    { text: "Giewont, Polska", year: "2020", photo: Giewont, rotation: 8 },
    { text: `Ścieżka „Długa Luka”, Polska`, year: "2023", photo: DlugaLuka, rotation: -15 },
    { text: "Krakow, Polska", year: "2019", photo: Krakow, rotation: 3 },
    { text: "Lublin, Polska", year: "2023", photo: Lublin, rotation: 17 },
    { text: "Stańczyki, Polska", year: "2023", photo: Stanczyki, rotation: -4 },
    { text: "Szczecin, Polska", year: "2024", photo: Szczecin, rotation: -16 },
    { text: "Łęknica, Polska", year: "2024", photo: Leknica, rotation: 8 },
    { text: "Jastrzębia Góra, Polska", year: "2023", photo: Jastrzebie, rotation: -8 },
]

const ImgSlider: React.FC = () => (
    <S.CenterWrapper>
        <S.FadeWrapper>
            <ScrollContainer>
                <S.Slider>
                    {imgs.map((img, index) => <S.StyledPhoto key={index} text={img.text} photo={img.photo} rotation={img.rotation} secondText={img.year} />)}
                </S.Slider>
            </ScrollContainer>
        </S.FadeWrapper>
    </S.CenterWrapper>
)

export default ImgSlider
