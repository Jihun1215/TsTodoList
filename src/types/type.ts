export type Item = {
  itemId: string;
  title?: string;
  isDone: boolean;
};

export type DayBeforeStateItem = {
  todoState: string[];
  percent: number;
}