<template>
<!--  Vue よく使う基礎構文 -->
  <main class="p-20">
    <div class="flex justify-center m-auto w-1/3 mb-20">
      <div class="w-1/2">
        <h3 class="mb-2">■onClickイベント</h3>
        <div>Count: {{ count }}</div>
        <button
          class="bg-blue-300 hover:bg-blue-400 p-2  rounded-md text-white w-full mt-2"
          @click="countUp"
        >
          Click
        </button>
      </div>
    </div>

    <div class="flex justify-center m-auto w-1/3 mb-20">
      <div class="w-1/2">
        <h3 class="mb-2">■v-model</h3>
        <div>入力値: {{ inputVal }}</div>
        <input
          v-model="inputVal"
          type="text"
          class="rounded-md w-full bg-yellow-200 pl-2 mt-2"
        />
        <button
          class="bg-blue-300 hover:bg-blue-400 p-2  rounded-md text-white w-full mt-2"
          @click="send"
        >
          送信
        </button>
      </div>
    </div>

    <div class="flex justify-center m-auto w-1/3 mb-20">
      <div class="w-1/2">
        <h3 class="mb-2">■v-if & v-show</h3>
        <button
          class="p-2 rounded-md w-full mt-2"
          :class="
            flg
              ? 'bg-red-300 hover:bg-red-400 text-white'
              : 'bg-gray-300 hover:bg-gray-400 text-black'
          "
          @click="changeFlg"
        >
          <span v-if="flg">ON</span>
          <span v-else>OFF</span>
        </button>
        <div class="flex justify-around">
          <button
            v-show="flg"
            class="bg-blue-300 hover:bg-blue-400 p-2  rounded-md w-1/3 mt-2"
          >
            登録
          </button>
          <button
            v-show="!flg"
            class="bg-green-300 hover:bg-green-400 p-2  rounded-md w-1/3 mt-2"
          >
            更新
          </button>
        </div>
      </div>
    </div>

    <div class="flex justify-center m-auto w-1/3 mb-20">
      <div class="w-1/2">
        <h3 class="mb-2">■v-for</h3>
        <table class="w-full text-left">
          <thead>
            <tr>
              <th class="border-b border-grey-light">ID</th>
              <th class="border-b border-grey-light">名前</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="hover:bg-blue-100"
              v-for="member of memberList"
              :key="member.id"
            >
              <td class="border-b border-grey-light">{{ member.id }}</td>
              <td class="border-b border-grey-light">{{ member.name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Member } from '@/classes/member';

@Component({
  name: 'Section1'
})
export default class extends Vue {
  count: number = 0;
  inputVal: string = '';
  flg: boolean = true;
  memberList: Member[] = [];

  created() {
    this.memberList.push(new Member(1, '亀山'));
    this.memberList.push(new Member(2, '江田'));
    this.memberList.push(new Member(3, '田中'));
    this.memberList.push(new Member(4, '関根'));
    this.memberList.push(new Member(5, '山岡'));
    for (let member of this.memberList) {
      console.log(`id: ${member.id} name: ${member.name}`);
    }
  }

  countUp() {
    this.count++;
  }

  send() {
    console.log(this.inputVal);
  }

  changeFlg() {
    this.flg = !this.flg;
  }
}
</script>

<style>
body {
  background-color: #f8f8ff;
}
</style>
