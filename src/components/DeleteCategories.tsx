import styled from "styled-components";

const Button = styled.button`
    padding: 10px;
    margin-left: 50px;
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

function DeleteCategories() {
    const rollBack = () => {
        window.localStorage.setItem("Categories", '["To Do", "Doing", "Done"]');
        window.localStorage.setItem("toDos", '[]');
        return;
    };
    return (
        <form onSubmit={rollBack}>
            <Button type="submit">Delete Everything ❌</Button>
        </form>
    );
};

export default DeleteCategories;