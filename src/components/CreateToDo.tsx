import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "../atoms";

interface IForm {
    toDo: string;
};

const Button = styled.button`
    padding: 10px;
    margin-left: 10px;
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

const Input = styled.input.attrs({ placeholder: "Write what you will do" })`
    padding: 10px;
    margin-left: 10px;
    background-color: ${(props) => props.theme.cardBgColor};
    border: none;
    border-radius: 5px;
    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px ${(props) => props.theme.bgColor};

    ::placeholder {
        color: ${(props) => props.theme.textColor};
    }
`;

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({toDo}: IForm) => {
        setToDos((prev) => [{text: toDo, id: Date.now(), category: category}, ...prev]);
        setValue("toDo", "");
    };
    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <Input {...register("toDo", {required: "Please write a To Do"})} />
            <Button>Add</Button>
        </form>
    );
};

export default CreateToDo;