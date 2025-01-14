<script lang="ts">
  import { addTodo } from '../store/todoStore';

  let todoText: string = '';

  const handleSubmit = (e: SubmitEvent): void => {
    e.preventDefault();
    if (todoText.trim()) {
      addTodo(todoText);
      todoText = '';
    }
  };
</script>

<form on:submit={handleSubmit} class="add-todo">
  <input
    type="text"
    bind:value={todoText}
    placeholder="Add a new todo..."
    class="add-todo-input"
  />
  <button type="submit" class="add-todo-button">Add</button>
</form>

<style>
  .add-todo {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .add-todo-input {
    flex: 1;
    padding: 0.75rem;
    border: 2px solid #e2e8f0;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: border-color 0.2s ease;
  }

  .add-todo-input:focus {
    outline: none;
    border-color: #3b82f6;
  }

  .add-todo-button {
    padding: 0.75rem 1.5rem;
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .add-todo-button:hover {
    background-color: #2563eb;
  }

  @media (max-width: 640px) {
    .add-todo {
      flex-direction: column;
      gap: 0.5rem;
    }

    .add-todo-button {
      width: 100%;
    }
  }
</style>
