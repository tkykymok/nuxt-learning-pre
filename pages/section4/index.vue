<template>
  <!-- @Prop, @Emit, @PropSync のサンプル -->
  <main class="p-20">
    <div
      class="flex justify-center m-auto w-1/2 mb-20 border-2 border-dotted border-black"
    >
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

    <div
      class="flex justify-center m-auto w-1/2 mb-20 border-2 border-dotted border-black"
    >
      <div class="w-2/3">
        <h3>■子から親【@Emit】</h3>
        <ChildSample2 @emit2Parent="reflectChildValue" />
        <div class="w-full mt-3">
          <h3 class="mb-2">■親2</h3>
          <div>子から受け取った値：{{ value2 }}</div>
        </div>
      </div>
    </div>

    <div
      class="flex justify-center m-auto w-1/2 mb-20 border-2 border-dotted border-black"
    >
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

    <div
      class="flex justify-center m-auto w-1/2 mb-20 border-2 border-dotted border-black"
    >
      <div class="w-2/3">
        <h3>■値監視【@Watch】</h3>
        <label for="lastName">名前</label>
        <input
          id="lastName"
          v-model="lastName"
          type="text"
          class="rounded-md w-1/3 pl-2 mt-2 mb-2"
          :class="isMember ? 'bg-yellow-200' : 'bg-red-500'"
        />
      </div>
    </div>

    <div
      class="flex justify-center m-auto w-1/2 mb-20 border-2 border-dotted border-black"
    >
      <div class="w-2/3">
        <h3>■算出【Computed】</h3>
        <input
          v-model="x"
          type="text"
          class="rounded-md w-1/4 pl-2 mt-2 mb-2"
        />
        +
        <input
          v-model="y"
          type="text"
          class="rounded-md w-1/4 pl-2 mt-2 mb-2"
        />
        =
        <input
          v-model="sum"
          type="text"
          class="rounded-md w-1/4 pl-2 mt-2 mb-2 bg-white"
          disabled
        />
      </div>
    </div>s
  </main>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator';
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
  public lastName: string = '';
  public isMember: boolean = false;

  public x: string = '';
  public y: string = '';

  public memberList: { id: number; name: string }[] = [
    {
      id: 1,
      name: '亀山'
    },
    {
      id: 2,
      name: '江田'
    },
    {
      id: 3,
      name: '田中'
    },
    {
      id: 4,
      name: '関根'
    },
    {
      id: 5,
      name: '山岡'
    }
  ];

  reflectChildValue(value: string) {
    this.value2 = value;
  }

  @Watch('lastName', {
    immediate: false,
    deep: true
  })
  watchLastName() {
    if (this.memberList.find(obj => obj.name === this.lastName)) {
      this.isMember = true;
    } else {
      this.isMember = false;
    }
    // this.isMember = !!this.memberList.find(obj => obj.name === this.lastName);
  }

  get sum() {
    let sum = Number.parseInt(this.x) + Number.parseInt(this.y);

    return isNaN(sum)? '': sum;
  }
}
</script>

<style>
body {
  @apply bg-blue-200;
}
</style>
