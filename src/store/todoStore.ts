import { writable } from 'svelte/store';
import type { Todo, TodoStore } from '../types';

export const todos: TodoStore = writable<Todo[]>([]);

export const addTodo = (todo: string): void => {
  todos.update((currentTodos: Todo[]): Todo[] => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      todo,
      completed: false,
      createdAt: new Date(),
    };
    return [...currentTodos, newTodo];
  });
};

export const toggleTodo = (id: string): void => {
  todos.update((currentTodos: Todo[]): Todo[] =>
    currentTodos.map(
      (todo: Todo): Todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

export const deleteTodo = (id: string): void => {
  todos.update((currentTodos: Todo[]): Todo[] =>
    currentTodos.filter((todo: Todo) => todo.id !== id)
  );
};
