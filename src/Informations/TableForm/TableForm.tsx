import React, { useState } from "react";
import * as S from "./TableForm.styles";

const randomNumber = Math.round(Math.random());

const TableForm: React.FC = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const onInputChange = (fieldName: string) => (event: any) => {
        return;

        if (fieldName === "name") {
            setName(event.target?.value?.trim() ?? "")
        } else {
            setSurname(event.target?.value?.trim() ?? "")
        }
    }

    const onBlur = () => {
        if (name && surname) {
            console.log("elo")
        }
    }

    const result = "Formularz dostępny wkrótce"

    return (
        <S.SectionWrapper>
            <S.TextAndFromWrapper>
                <S.SectionTitle>Wypełnij formularz</S.SectionTitle>
                <S.SectionText>Wpisz swoje imię i nazwisko, a system wskaże Twoje miejsce, dzięki temu szybciej odnajdziesz się po przybyciu na salę i będziesz mieć więcej czasu na zabawę!</S.SectionText>
                <S.FormWrapper>
                    <S.InputWrapper>
                        <S.InputLabel>Imię</S.InputLabel>
                        <S.Input placeholder={randomNumber === 0 ? "Konrad" : "Gabriela"} onChange={onInputChange("name")} value={name} onBlur={onBlur} />
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <S.InputLabel>Nazwisko</S.InputLabel>
                        <S.Input placeholder={randomNumber === 0 ? "Pasik" : "Florka"} onChange={onInputChange("surname")} value={surname} onBlur={onBlur} />
                    </S.InputWrapper>
                </S.FormWrapper>
            </S.TextAndFromWrapper>
            <S.Result>{result}</S.Result>
        </S.SectionWrapper>
    )
}

export default TableForm
