<template>
    <div class="w-full p-10 bg-red-200">
      <h3 class="mb-2">■子1</h3>
      <div>親から受け取った値：{{ childValue }}</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync, Emit } from 'nuxt-property-decorator';

@Component({
  name: 'ChildSample1'
})
export default class extends Vue {
  @Prop({ required: false, default: '' })
  childValue!: string;
}
</script>

<style></style>
