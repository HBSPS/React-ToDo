import { atom, selector } from "recoil";

const toDos = window.localStorage.getItem("toDos");
const categories = window.localStorage.getItem("Categories");

export enum Categories {
    "ALL" = "All",
    "TO_DO" = "To Do",
    "DOING" = "Doing",
    "DONE" = "Done"
};


export interface IToDo {
    text: string;
    id: number;
    category: Categories;
};

export const customCat = atom<string[]>({
    key: "customCat",
    default: ['To Do', 'Doing', 'Done'],
    //['To Do','Doing','Done']
    
});

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.ALL
});

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: JSON.parse(toDos ? toDos : "[]")
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        if (category === "All") {
            return toDos
        };
        return toDos.filter((toDo) => toDo.category === category);
    }
});