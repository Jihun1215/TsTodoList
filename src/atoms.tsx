import { atom } from "recoil";
import { Item } from "./types/type";
import { recoilPersist } from "recoil-persist";



  const today: Date = new Date();
  const ThisDay = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

export const DarkModeToggleState = atom<boolean>({
    key: 'DarkModeToggleState',
    default: false
});

const { persistAtom } = recoilPersist({
    key: `${ThisDay}`, //원하는 key 값 입력
    storage: localStorage,
  })

export const ThisDayState = atom<Item[]>({
    key: `${ThisDay}`,
    default: [],
    effects_UNSTABLE: [persistAtom],
})

export const todoListPercen = atom<number>({
    key: 'todoListPercen',
    default: 0,
})

// export const beforeTodoState = atom({
//     key: "beforeTodoState",
//     default: [],
//     effects_UNSTABLE: [persistAtom]
// })