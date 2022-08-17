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

interface IForm {
    Email: string;
    FirstName: string;
    LastName: string;
    Username: string;
    Password1: string;
    Password2: string;

    extraError?: string;
};

function ToDoList() {
    const { register, handleSubmit, formState: { errors }, setError } = useForm<IForm>({
        defaultValues: {
            Email: "@naver.com"
        }
    });
    const onValid = (data: IForm) => {
        if (data.Password1 !== data.Password2) {
            setError("Password2", { message: "Passwords are not the same" }, { shouldFocus: true });
        };
        setError("extraError", { message: "Server Offline." });
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onValid)} style={{display:"flex", flexDirection: "column"}}>
                <input {...register("Email", { required: "Email is Required", pattern: {value: /^[A-Za-z0-9._%+-]+@naver.com/, message: "Only 'naver.com' is allowd"} })} placeholder="Email" />
                <span>{errors?.Email?.message}</span>
                <input {...register("FirstName")} placeholder="First Name" />
                <input {...register("LastName")} placeholder="Last Name" />
                <input {...register("Username")} placeholder="Username" />
                <input {...register("Password1")} placeholder="Password" />
                <input {...register("Password2")} placeholder="Password" />
                <span>{errors?.Password2?.message}</span>
                <button>Add</button>
            </form>
        </div>
    );
};

export default ToDoList;