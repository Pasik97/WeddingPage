import React from "react";
import * as S from "./Menu.styles";
import { ReactComponent as LeafIcon } from "../assets/leaf.svg";

const obiad = [
    { title: "DANIE I", foods: ["Rosół Królewski"], wege: "Krem pomidorowy z grzankami" },
    { title: "DANIE II", foods: ["Półmisek mięs: Tradycyjny kotlet schabowy, Devolay, Grilowany filet z kurczaka nadziewany szynką oraz mascarpone, Pieczeń z karkówki", "Ziemniaki z koprem"], wege: "Kotlet z batata" },
    { title: "DODATKI", foods: ["Surówka marchewka z mandarynką", "Surówka z czerwonej kapusty z sosem jogurtowo - majonezowym", "Mizeria"], },
    { title: "DESER", foods: ["Fondant czekoladowy z lodami i frużeliną z wiśni"] },
]

const kolacje = [
    { title: "KOLACJA I", foods: ["Zrazy z warzywami w sosie z kluskami śląskimi"], wege: "Papryka nadziewana ryżem i warzywami" },
    { title: "KOLACJA II", foods: ["Bułeczka Bao z szarpaną wołowiną"], wege: "Bułeczka Bao z warzywami" },
    { title: "KOLACJA III", foods: ["Strogonow"], wege: "Krem z cukinii z grznkami" },
    { title: "KOLACJA IV", foods: ["Barszcz czerwony z pierożkiem krucho - drożdżowym"], wege: "Barszcz czerwony z pizzerinką" },
    { title: "TORT", foods: ["Z musem z białej czekolady, frużeliną malinową i chrupką z nutellą"] }
]

const Menu: React.FC = () => (
    <S.SectionWrapper id="menu">
        <S.StyledSectionTag text="MENU" />
        <S.SectionText>Sprawdź, co <S.BoldText>pysznego</S.BoldText> dla Ciebie przygotowaliśmy! Smacznego!</S.SectionText>
        <S.SectionSubText>Poniżej znajdziesz menu obiadowe oraz menu z daniami na ciepło, które będą serwowane w trakcie przyjęcia. Zachęcamy również do odwiedzenia słodkiego stołu, pełnego ciast, deserów i innych łakoci, a także wiejskiego stołu, gdzie czekają różnorodne przekąski i przysmaki. Niech to będzie uczta nie tylko dla serca, ale i dla podniebienia!</S.SectionSubText>
        <S.StyledCarousel showArrows={false}>
            <S.CenterWrapper>
                <S.Menu>
                    <S.MenuTitle>Obiad</S.MenuTitle>
                    <S.MenuItems>
                        {obiad.map(({ title, foods, wege }) => (
                            <S.MenuItem key={title}>
                                <S.ItemName>{title}</S.ItemName>
                                <S.ItemFoods>
                                    {foods?.map(food => <S.Food key={food}>{food}</S.Food>)}
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
                                    {foods?.map(food => <S.Food key={food}>{food}</S.Food>)}
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
                                    {foods?.map(food => <S.Food key={food}>{food}</S.Food>)}
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
                                    {foods?.map(food => <S.Food key={food}>{food}</S.Food>)}
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
