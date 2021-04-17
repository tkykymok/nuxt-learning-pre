<template>
  <main class="p-20">
    <div class="flex m-auto w-1/2 mb-2">
      <input
        v-model="inputId"
        type="text"
        class="rounded-md  bg-yellow-200 pl-2 mt-2"
      />
      <button
        class="bg-blue-300 hover:bg-blue-400 p-2  rounded-md text-white mt-2"
        @click="$router.push({ path: `detail?id=${inputId}` })"
      >
        送信
      </button>
    </div>

    <div class="flex justify-center m-auto w-1/2 mb-20">
      <div class="w-full">
        <table class="w-full text-left">
          <thead>
            <tr>
              <th class="border-b border-grey-light">Id</th>
              <th class="border-b border-grey-light">Title</th>
              <th class="border-b border-grey-light">Completed</th>
              <th class="border-b border-grey-light"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="hover:bg-blue-100"
              v-for="todo of todoList"
              :key="todo.id"
            >
              <td class="border-b border-grey-light">{{ todo.id }}</td>
              <td class="border-b border-grey-light">{{ todo.title }}</td>
              <td class="border-b border-grey-light">{{ todo.completed }}</td>
              <td class="border-b border-grey-light">
                <button
                  class="bg-green-400 p-2"
                  @click="$router.push({ path: `todoList/${todo.id}` })"
                >
                  詳細
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Todo } from '~/classes/todo';
import axios from 'axios';

@Component({
  name: 'TodoList'
})
export default class extends Vue {
  inputId: number | null = null;

  public todoList: Todo[] = [];

  created() {}

  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
      for (let todo of response.data) {
        let tmpTodo = new Todo();
        Object.assign(tmpTodo, todo);
        this.todoList.push(tmpTodo);
      }
      console.log(this.todoList);
    });
  }

  // async mounted () {
  //   const { data } = await axios.get <Todo[]>('https://jsonplaceholder.typicode.com/todos');
  //   for (let todo of data) {
  //     let tmpTodo = new Todo()
  //     Object.assign(tmpTodo, todo)
  //     this.todoList.push(tmpTodo)
  //   }
  //   console.log(this.todoList)
  // }
}
</script>

<style>
body {
  background-color: #f8f8ff;
}
</style>
