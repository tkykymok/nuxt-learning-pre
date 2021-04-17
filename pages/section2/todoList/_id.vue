<template>
  <main class="p-20">
    <div class="flex justify-end w-1/2 m-auto">
      <button
        class="bg-blue-300 hover:bg-blue-400 p-2  rounded-md text-white mt-2"
        @click="$router.push({ path: '/section2/todoList' })"
      >
        戻る
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
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-blue-100">
              <td class="border-b border-grey-light">{{ todo.id }}</td>
              <td class="border-b border-grey-light">{{ todo.title }}</td>
              <td class="border-b border-grey-light">{{ todo.completed }}</td>
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

@Component({})
export default class extends Vue {
  todo: Todo = new Todo();

  mounted() {
    let id = this.$route.params.id;
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => {
        Object.assign(this.todo, response.data);
        console.log(this.todo);
      });
  }
}
</script>

<style>
body {
  background-color: #f8f8ff;
}
</style>
