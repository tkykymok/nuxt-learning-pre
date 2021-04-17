<template>
  <main class="p-20">
    <div class="flex justify-center m-auto w-1/2 mb-20 border-2 border-dotted border-black">
      <div class="w-2/3">
        <h3>■親から子【@Prop】</h3>
        <ChildSample1 :childValue="value1" />
        <div class="w-full mt-3">
          <h3 class="mb-2">■親1</h3>
          <input
            v-model="value1"
            type="text"
            class="rounded-md w-1/3 bg-yellow-200 pl-2 mt-2 mb-2"
          />
        </div>
      </div>
    </div>

    <div class="flex justify-center m-auto w-1/2 mb-20 border-2 border-dotted border-black">
      <div class="w-2/3">
        <h3>■子から親【@Emit】</h3>
        <ChildSample2 @emit2Parent="reflectChildValue" />
        <div class="w-full mt-3">
          <h3 class="mb-2">■親2</h3>
          <div>子から受け取った値：{{ value2 }}</div>
        </div>
      </div>
    </div>

    <div class="flex justify-center m-auto w-1/2 mb-20 border-2 border-dotted border-black">
      <div class="w-2/3">
        <h3>■親子間双方向【@PropSync】</h3>
        <ChildSample3 :childValue.sync="value3" />
        <div class="w-full mt-3">
          <h3 class="mb-2">■親3</h3>
          <input
            v-model="value3"
            type="text"
            class="rounded-md w-1/3 bg-yellow-200 pl-2 mt-2 mb-2"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import ChildSample1 from '~/components/ChildSample1.vue';
import ChildSample2 from '~/components/ChildSample2.vue';
import ChildSample3 from '~/components/ChildSample3.vue';

@Component({
  name: 'Section4',
  components: {
    ChildSample1,
    ChildSample2,
    ChildSample3
  }
})
export default class extends Vue {
  public value1: string = '';
  public value2: string = '';
  public value3: string = '';

  reflectChildValue(value: string) {
    this.value2 = value;
  }
}
</script>

<style>
body {
  @apply bg-blue-200;
}
</style>
