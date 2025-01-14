<script lang="ts">
  import { deleteTodo, todos, toggleTodo } from '../store/todoStore';

  const handleToggle = (id: string): void => {
    toggleTodo(id);
  };
  const handleDelete = (id: string): void => {
    deleteTodo(id);
  };
</script>

<div class="todo-list">
  {#if $todos.length === 0}
    <p class="empty-state">No todos yet!</p>
  {:else}
    {#each $todos as todo (todo.id)}
      <div class="todo-item" class:completed={todo.completed}>
        <label class="checkbox-container">
          <input
            type="checkbox"
            checked={todo.completed}
            on:change={() => handleToggle(todo.id)}
          />
          <span class="checkmark"></span>
        </label>
        <span class="todo-text">{todo.todo}</span>
        <button class="delete-button" on:click={() => handleDelete(todo.id)}
          >Delete</button
        >
      </div>
    {/each}
  {/if}
</div>

<style>
  .todo-list {
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .empty-state {
    text-align: center;
    padding: 2rem;
    color: #64748b;
    font-style: italic;
  }

  .todo-item {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #e2e8f0;
  }

  .todo-item:last-child {
    border-bottom: none;
  }

  .todo-text {
    margin-left: 1rem;
    flex: 1;
  }

  .delete-button {
    padding: 0.5rem 1rem;
    background-color: #f87171;
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  button.delete-button:hover {
    background-color: #ef4444;
  }
  .completed .todo-text {
    text-decoration: line-through;
    color: #94a3b8;
  }

  .checkbox-container {
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    user-select: none;
  }

  .checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: -10px;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #fff;
    border: 2px solid #e2e8f0;
    border-radius: 4px;
  }

  .checkbox-container:hover input ~ .checkmark {
    border-color: #3b82f6;
  }

  .checkbox-container input:checked ~ .checkmark {
    background-color: #3b82f6;
    border-color: #3b82f6;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .checkbox-container input:checked ~ .checkmark:after {
    display: block;
  }

  .checkbox-container .checkmark:after {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
</style>
