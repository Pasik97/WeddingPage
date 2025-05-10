import React from "react";
import * as S from "./Menu.styles";
import { ReactComponent as LeafIcon } from "../assets/leaf.svg";

const obiad = [
    { title: "DANIE I", foods: ["Rosół Królewski"], wege: "Krem z czegośtam" },
    { title: "DANIE II", foods: ["Półmisek mięs", "Ziemniak", "Frytki"], wege: "Papryka nadziewana czymś tam" },
    { title: "DODATKI", foods: ["Mizeria", "Surówka z czerwonej kapusty"], }
]

const kolacje = [
    { title: "KOLACJA I", foods: ["Szynka z kluskami śląskimi oraz surówką"], wege: "Bakłażan coś tam" },
    { title: "KOLACJA II", foods: ["Bułeczka Bao z szarpaną wieprzowiną"], wege: "Barszcz czerwony z czymś tam" },
    { title: "TORT", foods: ["Jakis tam - jakis z tam z żelką jakąś tam"] }
]

const Menu: React.FC = () => (
    <S.SectionWrapper id="menu">
        <S.StyledSectionTag text="MENU" />
        <S.SectionText>Sprawdź, co <S.BoldText>pysznego</S.BoldText> dla Ciebie przygotowaliśmy! Smacznego!</S.SectionText>
        <S.SectionSubText>Poniżej znajdziesz menu obiadowe oraz menu z daniami na ciepło, które będą serwowane w trakcie przyjęcia. Zachęcamy również do odwiedzenia słodkiego stołu, pełnego ciast, deserów i innych łakoci, a także szwedzkiego stołu, gdzie czekają różnorodne przekąski i przysmaki. Niech to będzie uczta nie tylko dla serca, ale i dla podniebienia!</S.SectionSubText>
        <S.StyledCarousel showArrows={false}>
            <S.CenterWrapper>
                <S.Menu>
                    <S.MenuTitle>Obiad</S.MenuTitle>
                    <S.MenuItems>
                        {obiad.map(({ title, foods, wege }) => (
                            <S.MenuItem key={title}>
                                <S.ItemName>{title}</S.ItemName>
                                <S.ItemFoods>
                                    {foods.map(food => <S.Food key={food}>{food}</S.Food>)}
                                    {!wege ? null : (
                                        <S.ItemWege>
                                            <S.WegeIcon>
                                                <LeafIcon />
                                            </S.WegeIcon>
                                            {wege}
                                        </S.ItemWege>
                                    )}
                                </S.ItemFoods>
                            </S.MenuItem>
                        ))}
                    </S.MenuItems>
                </S.Menu>
            </S.CenterWrapper>
            <S.CenterWrapper>
                <S.Menu>
                    <S.MenuTitle>Kolacje</S.MenuTitle>
                    <S.MenuItems>
                        {kolacje.map(({ title, foods, wege }) => (
                            <S.MenuItem key={title}>
                                <S.ItemName>{title}</S.ItemName>
                                <S.ItemFoods>
                                    {foods.map(food => <S.Food key={food}>{food}</S.Food>)}
                                    {!wege ? null : (
                                        <S.ItemWege>
                                            <S.WegeIcon>
                                                <LeafIcon />
                                            </S.WegeIcon>
                                            {wege}
                                        </S.ItemWege>
                                    )}
                                </S.ItemFoods>
                            </S.MenuItem>
                        ))}
                    </S.MenuItems>
                </S.Menu>
            </S.CenterWrapper>
        </S.StyledCarousel>
        <S.DesktopMenus>
            <S.CenterWrapper>
                <S.Menu>
                    <S.MenuTitle>Obiad</S.MenuTitle>
                    <S.MenuItems>
                        {obiad.map(({ title, foods, wege }) => (
                            <S.MenuItem key={title}>
                                <S.ItemName>{title}</S.ItemName>
                                <S.ItemFoods>
                                    {foods.map(food => <S.Food key={food}>{food}</S.Food>)}
                                    {!wege ? null : (
                                        <S.ItemWege>
                                            <S.WegeIcon>
                                                <LeafIcon />
                                            </S.WegeIcon>
                                            {wege}
                                        </S.ItemWege>
                                    )}
                                </S.ItemFoods>
                            </S.MenuItem>
                        ))}
                    </S.MenuItems>
                </S.Menu>
            </S.CenterWrapper>
            <S.CenterWrapper>
                <S.Menu>
                    <S.MenuTitle>Kolacje</S.MenuTitle>
                    <S.MenuItems>
                        {kolacje.map(({ title, foods, wege }) => (
                            <S.MenuItem key={title}>
                                <S.ItemName>{title}</S.ItemName>
                                <S.ItemFoods>
                                    {foods.map(food => <S.Food key={food}>{food}</S.Food>)}
                                    {!wege ? null : (
                                        <S.ItemWege>
                                            <S.WegeIcon>
                                                <LeafIcon />
                                            </S.WegeIcon>
                                            {wege}
                                        </S.ItemWege>
                                    )}
                                </S.ItemFoods>
                            </S.MenuItem>
                        ))}
                    </S.MenuItems>
                </S.Menu>
            </S.CenterWrapper>
        </S.DesktopMenus>
    </S.SectionWrapper>
)

export default Menu
