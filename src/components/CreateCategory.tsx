import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { customCat } from "../atoms";

interface ICat {
    newCat: string
};

const Button = styled.button`
    padding: 10px;
    margin-left: 10px;
    margin-right: 50px;
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

const Input = styled.input.attrs({ placeholder: "Write a new Category" })`
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

function CreateCategory() {
    const [categories, setCategories] = useRecoilState(customCat);
    const { register, handleSubmit, setValue } = useForm<ICat>();
    const handleValid = ({newCat}: ICat) => {
        setCategories((prev) => [newCat, ...prev]);
        setValue("newCat", "");
    };
    window.localStorage.setItem("Categories", JSON.stringify(categories));
    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <Input {...register("newCat")} />
            <Button>Add</Button>
        </form>
    );
};

export default CreateCategory;