import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, IToDo, toDoState } from "../atoms";

const Ul = styled.ul`
    font-size: 20px;
`;

const Span = styled.span`
    margin-right: 20px;
    font-weight: bold;
`;

const Button = styled.button`
    padding: 8px;
    margin: 10px 5px;
    color: ${(props) => props.theme.accentColor};
    background-color: ${(props) => props.theme.cardBgColor};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px ${(props) => props.theme.bgColor};

    &:active {
        box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
    }
`;

const Cat = styled.span`
    padding: 3px 8px;
    color: ${(props) => props.theme.accentColor};
    background-color: ${(props) => props.theme.cardBgColor};
    border: none;
    border-radius: 5px;
    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px ${(props) => props.theme.bgColor};
`;

function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { currentTarget: { name } } = event;
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
            const newToDo = { text, id, category: name as any };
            return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
        });
    };
    const onClickDelete = () => {
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
            const newArray = [...oldToDos.slice(0, targetIndex), ...oldToDos.slice(targetIndex + 1)];
            window.localStorage.setItem("toDos", JSON.stringify(newArray));
            return newArray;
        });
    };
    return (
        <Ul>
            <Span><Cat>{category}</Cat>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text}</Span>
            {category !== Categories.TO_DO && <Button name={Categories.TO_DO} onClick={onClick}>To Do</Button>}
            {category !== Categories.DOING && <Button name={Categories.DOING} onClick={onClick}>Doing</Button>}
            {category !== Categories.DONE && <Button name={Categories.DONE} onClick={onClick}>Done</Button>}
            <Button onClick={onClickDelete}>❌</Button>
        </Ul>
    );
};

export default ToDo;