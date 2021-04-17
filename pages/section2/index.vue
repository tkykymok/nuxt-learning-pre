<template>
  <!-- axios.getのサンプル + 画面遷移サンプル -->
  <main class="p-20">

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
                  @click="$router.push({ path: `section2/detail/?id=${todo.id}` })"
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
  public todoList: Todo[] = [];

  created() {}

  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
      for (let todo of response.data) {
        let tmpTodo = new Todo();
        Object.assign(tmpTodo, todo);
        this.todoList.push(tmpTodo);
      }
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
