
import { ref } from 'vue';

export function useTodos() {
  const todos = ref([]);
  const newTodo = ref('');

  const addTodo = () => {
    if (newTodo.value.trim() !== '') {
      todos.value.push({ text: newTodo.value.trim(), done: false });
      newTodo.value = '';
    }
  };

  const toggleTodo = (index) => {
    !todos.value[index].done 
  };

  const removeTodo = (index) => {
    todos.value.splice(index, 1);
  };

  return {
    todos,
    newTodo,
    addTodo,
    toggleTodo,
    removeTodo
  };
}
