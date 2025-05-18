import React from "react";
import * as S from "./Contact.styles";
import { ReactComponent as FacebookIcon } from "../assets/facebookIcon.svg";
import { ReactComponent as PhoneIcon } from "../assets/phoneIcon.svg";

const contacts = [
    { title: "Panna Młoda", name: "Gabriela Florka", tel: "+48 694 780 169", fb: "https://www.facebook.com/gabriela.florka" },
    { title: "Pan Młody", name: "Konrad Pasik", tel: "+48 517 532 850", fb: "https://www.facebook.com/Pasik97/" },
    { title: "Świadkowa", name: "Julia Florka", tel: "+48 733 744 674", fb: "https://www.facebook.com/profile.php?id=100011231405109" },
    { title: "Świadek", name: "Adrian Pasik", tel: "+48 508 997 416", fb: "https://www.facebook.com/adrian.pasik" },
]

const Contact: React.FC = () => (
    <S.SectionWrapper id="contact">
        <S.ContentWrapper>
            <S.StyledSectionTag text="KONTAKT" variant="dark" />
            <S.SectionText><S.BoldText>Skontaktuj</S.BoldText> się z nami!</S.SectionText>
            <S.Info>Jeśli masz jakiekolwiek pytania dotyczące ślubu, wesela, noclegu, dojazdu czy innych szczegółów – jesteśmy do Twojej dyspozycji! Chętnie pomożemy i rozwiejemy wszelkie wątpliwości.</S.Info>
            <div>
                {contacts.map(contact => (
                    <S.ContactItem key={contact.title}>
                        <S.Label>{contact.title}</S.Label>
                        <S.Name>
                            {contact.name}
                            <S.ContactIcon href={`tel:${contact.tel.replace(/ /g, '')}`}>
                                <PhoneIcon />
                            </S.ContactIcon>
                            <S.ContactIcon href={contact.fb} target="_blank">
                                <FacebookIcon />
                            </S.ContactIcon>
                        </S.Name>
                    </S.ContactItem>
                ))}
            </div>
        </S.ContentWrapper>
    </S.SectionWrapper>
)

export default Contact
