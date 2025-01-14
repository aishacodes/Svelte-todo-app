<script lang="ts">
  import AddTodo from './components/AddTodo.svelte';
  import TodoList from './components/TodoList.svelte';

  const title: string = 'Todo App';
</script>

<main class="container">
  <h1>{title}</h1>
  <AddTodo />
  <TodoList />
</main>

<style>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  h1 {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    .container {
      padding: 1rem;
    }

    h1 {
      font-size: 2rem;
    }
  }
</style>
