<template>
    <div class="w-full p-10 bg-red-200">
      <h3 class="mb-2">■子2</h3>
      <input
        v-model="childValue"
        type="text"
        class="rounded-md w-1/3 bg-yellow-200 pl-2 mt-2 mb-2"
        @input="emit2Parent"
      />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync, Emit } from 'nuxt-property-decorator';

@Component({
  name: 'ChildSample1'
})
export default class extends Vue {
  public childValue: string = '';

  @Emit('emit2Parent')
  emit2Parent(value:string) {
    return this.childValue;
  }
}
</script>

<style></style>
