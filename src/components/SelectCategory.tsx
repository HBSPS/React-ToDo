import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryState, customCat } from "../atoms";

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
    const cat = useRecoilValue(customCat);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    };
    return (
        <>
            <Select onInput={onInput} value={category}>
                <Option>All</Option>
                {cat.map((category) => <Option value={category} key={category}>{category}</Option>)}
            </Select>
        </>
    );
};

export default SelectCategory;