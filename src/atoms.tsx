import { atom } from "recoil";
import { Item } from "./types/type";
import { recoilPersist } from "recoil-persist";


  // 오늘 저장된 리스트를 가지고 오기 위한 로컬스토리지 키 값
  const today: Date = new Date();
  const ThisDay = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
//   const todoListGet = localStorage.getItem(ThisDay);
//   const todoData = todoListGet ? JSON.parse(todoListGet) : [];


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