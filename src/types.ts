export interface Todo {
  id: string;
  todo: string;
  completed: boolean;
  createdAt: Date;
}

export type TodoStore = {
  subscribe: (callback: (value: Todo[]) => void) => () => void;
  set: (value: Todo[]) => void;
  update: (updater: (todos: Todo[]) => Todo[]) => void;
};
