<template>
    <div class="w-full p-10 bg-red-200">
      <h3 class="mb-2">■子3</h3>
      <input
        v-model="_childValue"
        type="text"
        class="rounded-md w-1/3 bg-yellow-200 pl-2 mt-2 mb-2"
      />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync, Emit } from 'nuxt-property-decorator';

@Component({
  name: 'ChildSample3'
})
export default class extends Vue {
  @PropSync('childValue',{ required: false, default: '' })
  _childValue!: string;
}
</script>

<style></style>
