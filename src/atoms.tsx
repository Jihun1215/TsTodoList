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

// export interface TodoItem {
//     itemId: number;
//     title: string,
//     isDone: boolean,
// }

// // 각각의 할 일 항목을 나타내는 atom
// export const todoItemState = atom<TodoItem>({
//     key: 'todoItemState',
//     default: { itemId: 20000, title: 'Sample Todo', isDone: false },
//   });
  
//   // 할 일 목록을 나타내는 atom
//   export const todoListState = atom<TodoItem[]>({
//     key: 'todoListState',
//     default: [],
//   });