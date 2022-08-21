import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, categoryState } from "../atoms";

const Select = styled.select`
    padding: 10px;
    background-color: ${(props) => props.theme.cardBgColor};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px ${(props) => props.theme.bgColor};
`;

const Option = styled.option`
    padding: 10px;
    color: ${(props) => props.theme.textColor};
    background: ${(props) => props.theme.cardBgColor};
`;

function SelectCategory() {
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    };
    return (
        <Select onInput={onInput} value={category}>
            <Option value={Categories.TO_DO}>To Do</Option>
            <Option value={Categories.DOING}>Doing</Option>
            <Option value={Categories.DONE}>Done</Option>
        </Select>
    );
};

export default SelectCategory;