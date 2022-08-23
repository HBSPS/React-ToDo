import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoSelector } from "../atoms";
import CreateCategory from "./CreateCategory";
import CreateToDo from "./CreateToDo";
import DeleteCategories from "./DeleteCategories";
import SelectCategory from "./SelectCategory";
import ToDo from "./ToDo";

const Title = styled.h1`
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    display: block;
    margin: 20px 0px;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0px;
`;

const ItemList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    width: 400px;
    text-align: right;
`;

function ToDoList() {
    const toDos = useRecoilValue(toDoSelector);
    return (
        <>
            <Title>To Dos</Title>
            <hr />
            <Main>
                <Container>
                    <CreateCategory />
                    <SelectCategory />
                    <CreateToDo />
                    <DeleteCategories />
                </Container>
                <ItemList>
                    {toDos.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
                </ItemList>
            </Main>
        </>
    );
};

export default ToDoList;