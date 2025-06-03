import React from "react";
import * as S from "./Bar.styles";
import Carousel from "../Carousel/Carousel";
import AperolSpiritz from "../assets/aperol-spritz.jpg";
import BlueHawaiian from "../assets/blue-hawaiian.jpg";
import Cosmopolitan from "../assets/cosmopolitan.jpg";
import CubaLibre from "../assets/cuba-libre.jpg";
import LongIsland from "../assets/long-island-ice-tea.jpg";
import SexOnTheBeach from "../assets/sex-on-the-beach.jpg";
import TequilaSunrise from "../assets/tequila-sunrise.jpg";
import Mohito from "../assets/mohito.jpg";
import PinaColada from "../assets/pina-colada.jpg";

const drinks = [
    {
        title: "Blue Hawaiian",
        photo: BlueHawaiian,
        steps: [
            "Do szklanki dodaj 1 porcję rumu, 1 porcję wódki, 3/4 porcji Blue Curaçao, 3/4 porcji syropu cukrowego, 3/4 porcji soku z cytryny.",
            "Uzupełnij drink preferowaną ilością lodu oraz soku ananasowego.",
            "Delikatnie wymieszaj składniki łyżeczką.",
            "(Opcjonalnie) Udekoruj drink plasterkiem ananasa.",
        ],
    },
    {
        title: "Aperol Spritz",
        photo: AperolSpiritz,
        steps: [
            "Do szklanki lub kieliszka do wina dodaj 2 porcje prosecco oraz 1 porcję Aperolu.",
            "Uzupełnij drink preferowaną ilością lodu oraz wody gazowanej.",
            "(Opcjonalnie) Dodaj 2-3 plasterki pomarańczy.",
            "Delikatnie wymieszaj składniki łyżeczką.",
            "(Opcjonalnie) Udekoruj drink plasterkiem pomarańczy.",
        ],
    },
    {
        title: "Mojito / Mohito",
        photo: Mohito,
        steps: [
            "Do szklanki dodaj 2 łyżeczki cukru brązowego, 3-4 liście mięty oraz 1.5 porcji soku z cytryny.",
            "Za pomocą długiej łyżeczki rozgnieć składniki. Cukier powinien rozpuścić się w soku.",
            "Dodaj 2 porcje rumu oraz 0.5 limonki pokrojonej w plasterki.",
            "Uzupełnij drink preferowaną ilość lodu oraz wodą gazowaną.",
            "Delikatnie wymieszaj składniki łyżeczką.",
            "(Opcjonalnie) Udekoruj drink plasterkiem limonki oraz listkiem mięty.",
        ],
    },
    {
        title: "Cuba Libre",
        photo: CubaLibre,
        steps: [
            "Do szklanki dodaj 3 porcje rumu oraz 3/4 porcji soku z cytryny.",
            "Uzupełnij drink preferowaną ilość lodu oraz colą.",
            "Delikatnie wymieszaj składniki łyżeczką.",
            "(Opcjonalnie) Udekoruj drink plasterkiem limonki.",
        ],
    },
    {
        title: "Cosmopolitan",
        photo: Cosmopolitan,
        steps: [
            "Do szklanki lub kieliszka do wina dodaj 3 porcje wódki, 1.5 porcji soku z cytryny oraz 3/4 porcji likieru pomarańczowego.",
            "Uzupełnij drink preferowaną ilością lodu oraz soku żurawinowego.",
            "Delikatnie wymieszaj składniki łyżeczką.",
            "(Opcjonalnie) Udekoruj drink plasterkiem limonki.",
        ],
    },
    {
        title: "Long Island Iced Tea",
        photo: LongIsland,
        steps: [
            "Do szklanki dodaj 1 porcję wódki, 1 porcję rumu, 1 porcję tequili, 1 porcję ginu, 1 porcję likieru pomarańczowego, 1 porcję soku z cytryny oraz 1 porcję syropu cukrowego.",
            "Uzupełnij drink preferowaną ilością lodu oraz coli.",
            "Delikatnie wymieszaj składniki łyżeczką.",
            "(Opcjonalnie) Udekoruj drink plasterkiem limonki.",
        ],
    },
    {
        title: "Pina colada",
        photo: PinaColada,
        steps: [
            "Do szklanki dodaj 1.5 porcji rumu, 1 porcję malibu oraz 1.5 porcji mleka kokosowego.",
            "Uzupełnij drink preferowaną ilością lodu oraz soku ananasowego.",
            "Delikatnie wymieszaj składniki łyżeczką.",
            "(Opcjonalnie) Udekoruj drink plasterkiem ananasa.",
        ],
    },
    {
        title: "Sex on the beach",
        photo: SexOnTheBeach,
        steps: [
            "Do szklanki dodaj 2 porcje wódki oraz 1 porcję likieru brzoskwiniowego.",
            "Uzupełnij drink preferowaną ilością lodu oraz soku pomarańczowego i soku żurawinowego w proporcji 1/1.",
            "Delikatnie wymieszaj składniki łyżeczką.",
            "(Opcjonalnie) Udekoruj drink plasterkiem pomarańczy.",
        ],
    },
    {
        title: "Tequila sunrise",
        photo: TequilaSunrise,
        steps: [
            "Do szklanki dodaj 2.5 porcji tequili.",
            "Uzupełnij drink preferowaną ilością lodu oraz soku pomarańczowego.",
            "Delikatnie wymieszaj składniki łyżeczką.",
            "Powoli dodaj 1 porcję grenadiny tak aby opadła na spód szklanki.",
            "(Opcjonalnie) Udekoruj drink plasterkiem pomarańczy.",
        ],
    },
]

const Bar: React.FC = () => (
    <S.SectionWrapper id="drinks">
        <S.StyledSectionTag text="COŚ MOCNIEJSZEGO" />
        <S.SectionText>Przepisy na drinki, które przygotujesz <S.BoldText>samodzielnie</S.BoldText> w kilka chwil</S.SectionText>
        <S.SectionSubText>Dla spragnionych dobrej zabawy przygotowaliśmy coś specjalnego! Znajdziesz tu proste i szybkie przepisy na pyszne drinki, które możesz samodzielnie skomponować przy naszym barze. Kilka składników, odrobina fantazji i gotowe – stwórz swój ulubiony koktajl i wznieś z nami toast za miłość!</S.SectionSubText>
        <Carousel showArrows={false}>
            {drinks.map(drink => (
                <S.Drink key={drink.title}>
                    <S.StyledPhoto photo={drink.photo} />
                    <S.TextsWrapper>
                        <S.DrinkTitle>{drink.title}</S.DrinkTitle>
                        <S.DrinkItems>
                            {drink.steps.map((step, index) => (
                                <S.DrinkItem key={step}>
                                    <S.ItemName>KROK {index + 1}</S.ItemName>
                                    <S.Step>{step}</S.Step>
                                </S.DrinkItem>
                            ))}
                        </S.DrinkItems>
                    </S.TextsWrapper>
                </S.Drink>
            ))}
        </Carousel>
    </S.SectionWrapper>
)

export default Bar
