<template>
  <main class="p-20">
    <div class="flex justify-end w-1/2 m-auto">
      <button
        class="bg-blue-300 hover:bg-blue-400 p-2  rounded-md text-white mt-2"
        @click="$router.push({ path: '/section6' })"
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
import { TodoModule } from '~/utils/store-accessor';
import { Context } from '@nuxt/types';

@Component({
  async asyncData(context: Context) {
    await TodoModule.fetchTodo(context.route.params.id);
  }
})
export default class extends Vue {
  get todo() {
    return TodoModule.getTodo;
  }
}
</script>

<style>
body {
  background-color: #f8f8ff;
}
</style>
