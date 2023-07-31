import { atom } from "recoil";
import { Item } from "./types/type";

export const DarkModeToggleState = atom<boolean>({
    key:'DarkModeToggleState',
    default: false
});

export const todoItemState = atom<Item[]>({
    key:'todoItemState',
    default: []
}) 
