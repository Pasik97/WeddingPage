import React, { useState } from "react";
import * as S from "./TableForm.styles";

const randomNumber = Math.round(Math.random());

const miejsca = {
    3: [
        "Agata Serkis",
        "Oliwia Szymaszek",
        "Julia Florka",
        "Łukasz Trela",
        "Patryk Szymaszek",
        "Q",
        "Bartosz Łabno",
        "Piotr Łabno",
        "Barbara Łabno",
        "Izabela Łabno",
        "Małgorzata Niziołek",
        "W",
        "Anna Niziołek",
        "Tadeusz Niziołek",
        "Bernadeta Majkowska",
        "Jan Majkowski",
        "Waldemar Majkowski",
        "Joanna Majkowska",
        "Zuzanna Majkowska",
        "Emilia Majkowska",
        "Bartosz Majkowski",
        "Karol Serkis",
        "Róża Florka",
        "Oliwia Gruszka",
        "Kamil Florka",
        "Wiesław Florka",
        "Halina Florka",
        "Stanisław Florka",
        "Emilia Florka",
        "Tomasz Florka",
        "Jolanta Szymaszek",
        "Grzegorz Szymaszek",
        "Piotr Serkis",
        "Justyna Serkis",
        "Jaś Serkis",
    ],
    1: [
        "Krystyna Kobylarz",
        "Ryszard Kobylarz",
        "Grzegorz Piątek",
        "Dominik Piątek",
        "Dorian Piątek",
        "Anna Piątek",
        "Jan Placek",
        "Kazimiera Placek",
        "Ewa Krajewska",
        "Beata Tekiela",
        "Michał Tekiela",
        "Tomasz Tekiela",
        "Janusz Trzeciak",
        "Grażyna Trzeciak",
        "Maria Pasik",
        "Halina Mazur",
        "Jan Mazur",
        "Sławomir Placek",
        "Monika Placek",
        "Krystyna Osikowska",
        "Marcin Osikowski",
        "Stanisław Pasik",
        "Grażyna Pasik",
    ],
    2: [
        "Magdalena Wrona",
        "Piotr Wrona",
        "Łukasz Wrona",
        "Krzysztof Sibiga",
        "Zosia Sibiga",
        "Agnieszka Sibiga",
        "Edyta Skóra",
        "Marek Skóra",
        "E",
        "A",
        "S",
        "Rafał Gurga",
        "Andżelika Mazur - Gurga",
        "Anna Syguła",
        "Iga Syguła",
        "Piotr Syguła",
        "Wiesław Babicz",
        "Renata Babicz",
        "Małgorzata Kuroś",
        "Jan Kuroś",
        "D",
        "Z",
    ],
    4: [
        "Przemysław Adamczyk",
        "Dominika Rusinek",
        "Dawid Bajor",
        "Natalia Wieczorek",
        "Aleksandra Urban - Preisner",
        "Bartosz Preisner",
        "Weronika Matejek",
        "Gabriela Matejek",
        "X",
        "Karol Sibiga",
        "Marcel Sibiga",
        "C",
        "Klaudia Skóra",
        "Kinga Stachowicz",
        "Janek Stachowicz",
        "Mateusz Stachowicz",
        "Paweł Mika",
        "Wiktoria Mika",
        "Jakub Gawenda",
        "V",
        "Karolina Strąg",
        "Mateusz Strąg",
        "Mateusz Bieś",
        "Dawid Piątek",
        "Wiktoria Piątek",
        "Sandra Kawa",
        "Jakub Skóra",
        "Joanna Osikowska",
        "Krzysztof Osikowski",
        "Adrian Pasik",
        "Aleksandra Pasik",
        "Albercik Pasik",
    ],
}

const parseName = (name: string) => name.replace(/ /g, '').toLocaleLowerCase();

const getTable = (argName: string) => {
    const [tableNumber, table] = Object.entries(miejsca).find(([, names]) => names.some(name => parseName(name) === argName)) ?? [];

    if (table) {
        return {
            tableNumber,
            table,
        }
    }

    return undefined;
}

const TableForm: React.FC = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [isResultVisible, setIsResultVisible] = useState(false)

    const onInputChange = (fieldName: string) => (event: any) => {
        if (fieldName === "name") {
            setName(event.target?.value?.trim() ?? "")
        } else {
            setSurname(event.target?.value?.trim() ?? "")
        }
    }

    const onBlur = () => {
        if (name && surname) {
            setIsResultVisible(true);
        }
    }

    const onFocus = () => {
        setIsResultVisible(false);
    }

    const onKeyUp = (e: React.KeyboardEvent) => {
        if(e.key === "Enter") {
            onBlur();
        }
    }

    const searchString = parseName(`${name}${surname}`);
    const { tableNumber, table } = getTable(searchString) ?? {};

    const halfTable = Math.ceil((table?.length ?? 0) / 2);

    const leftSeats = table?.slice(0, halfTable);
    const rightSeats = table?.slice(halfTable);

    return (
        <S.SectionWrapper>
            <S.TextAndFromWrapper>
                <S.SectionTitle>Wypełnij formularz</S.SectionTitle>
                <S.SectionText>Wpisz swoje imię i nazwisko, a system wskaże Twoje miejsce, dzięki temu szybciej odnajdziesz się po przybyciu na salę i będziesz mieć więcej czasu na zabawę!</S.SectionText>
                <S.FormWrapper>
                    <S.InputWrapper>
                        <S.InputLabel>Imię</S.InputLabel>
                        <S.Input placeholder={randomNumber === 0 ? "Konrad" : "Gabriela"} onChange={onInputChange("name")} value={name} onBlur={onBlur} onFocus={onFocus} onKeyUp={onKeyUp} />
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <S.InputLabel>Nazwisko</S.InputLabel>
                        <S.Input placeholder={randomNumber === 0 ? "Pasik" : "Florka"} onChange={onInputChange("surname")} value={surname} onBlur={onBlur} onFocus={onFocus} onKeyUp={onKeyUp} />
                    </S.InputWrapper>
                </S.FormWrapper>
            </S.TextAndFromWrapper>
            <S.Result>
                {isResultVisible && (
                    tableNumber && table ? (
                        <>
                            <S.SeatsWrapper>{leftSeats?.map((name) => <S.Seat highlight={parseName(name) === searchString} key={name} />)}</S.SeatsWrapper>
                            <S.TableName>Stół {tableNumber}</S.TableName>
                            <S.SeatsWrapper>{rightSeats?.map((name) => <S.Seat highlight={parseName(name) === searchString} key={name} />)}</S.SeatsWrapper>
                        </>
                    ) : "Nie udało się odnaleźć miejsca"
                )}
            </S.Result>
        </S.SectionWrapper>
    )
}

export default TableForm
