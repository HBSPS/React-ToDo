import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

interface IToDo {
    text: string;
    id: number;
    category: "TO_DO" | "DOING" | "DONE";
};

const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: []
});

interface IForm {
    toDo: string;
};

function ToDoList() {
    const [toDos, setToDos] = useRecoilState(toDoState); // [불러온 atom의 이름 지정, modifier function] = useRecoilState(불러올 atom)
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({toDo}: IForm) => {
        setToDos((prev) => [{text: toDo, id: Date.now(), category: "TO_DO"}, ...prev]);
        setValue("toDo", "");
    };
    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <form onSubmit={handleSubmit(handleValid)}>
                <input {...register("toDo", {required: "Please write a To Do"})} placeholder="Write what you will do" />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map((toDo) => <li key={toDo.id}>{toDo.text}</li>)}
            </ul>
        </div>
    );
};

export default ToDoList;