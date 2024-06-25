<script setup>
import { useTodos } from '../composables/useTodos';


const { todos, newTodo, addTodo, toggleTodo, removeTodo } = useTodos();


</script>


<template>
  <div>
    <h1>Todo List</h1>
    <input class="input" v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo" />
    <button @click="addTodo">Add</button>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <label>
          <input type="checkbox" v-model="todo.done" @change="toggleTodo(index)" />
          <span :style="{ textDecoration: todo.done ? 'line-through' : 'none' }">{{ todo.text }}</span>
        </label>
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>



<style scoped>
/* Add some basic styling */
h1 {
  font-size: 24px;
}
.input {
  width: 20rem;
  height: 2.5rem;
  padding: 5px;
}
button {
  margin-left: 8px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  margin: 8px 0;
}
label {
  flex-grow: 1;
}
</style>
