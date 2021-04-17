<template>
<!-- asyncData -->
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
                  @click="
                    $router.push({ path: `section2/detail/?id=${todo.id}` })
                  "
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
import { NuxtAxiosInstance } from '@nuxtjs/axios'

@Component({
  name: 'Section5',
  async asyncData({$axios}: {$axios: NuxtAxiosInstance}) {
    const todoList = await $axios.$get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    return { todoList };
  }
})
export default class extends Vue {
  mounted() {
    console.log(this.$data.todoList);
  }
}
</script>

<style>
body {
  background-color: #f8f8ff;
}
</style>
