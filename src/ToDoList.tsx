import React, { useState } from "react";
import { useForm } from "react-hook-form";

/*
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
*/

function ToDoList() {
    const { register, handleSubmit } = useForm();
    const onValid = (data: any) => {
        console.log(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onValid)}>
                <input {...register("Email")} placeholder="Email" />
                <input {...register("FirstName")} placeholder="First Name" />
                <input {...register("LastName")} placeholder="Last Name" />
                <input {...register("Username")} placeholder="Username" />
                <input {...register("Password1")} placeholder="Password" />
                <input {...register("Password2")} placeholder="Password" />
                <button>Add</button>
            </form>
        </div>
    );
};

export default ToDoList;