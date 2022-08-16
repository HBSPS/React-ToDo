import React, { useState } from "react";

function ToDoList() {
    const [toDo, setToDo] = useState("");
    const [toDoError, setToDoError] = useState("");
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const { currentTarget: { value } } = event;
        setToDoError("");
        setToDo(value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (toDo.length < 11) {
            return setToDoError("To do should be longer than 10")
        };
        console.log("submit");
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} placeholder="Write what you will do" />
                <button>Add</button>
                {toDoError !== "" ? toDoError : null}
            </form>
        </div>
    );
};

export default ToDoList;