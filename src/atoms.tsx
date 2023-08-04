import { atom } from "recoil";
import { Item } from "./types/type";
import { recoilPersist } from "recoil-persist";

export const DarkModeToggleState = atom<boolean>({
    key: 'DarkModeToggleState',
    default: false
});

export const todoItemState = atom<Item[]>({
    key: 'todoItemState',
    default: []
})

export const todoListPercen = atom<number>({
    key: 'todoListPercen',
    default: 0,
})

const { persistAtom } = recoilPersist({
    key: "localStorage", //원하는 key 값 입력
    storage: localStorage,
})


export const beforeTodoState = atom({
    key: "beforeTodoState",
    default: [],
    effects_UNSTABLE: [persistAtom]
})