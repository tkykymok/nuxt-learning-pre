<template>
  <main class="p-20">
    <div class="flex justify-center w-1/2 m-auto">
      <button
        class="bg-blue-300 hover:bg-blue-400 p-2  rounded-md text-white shadow-lg outline-none active:outline-none focus:outline-none"
        @click="toggleModal = !toggleModal"
      >OPEN MODAL
      </button>
      <div
        class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
        v-if="toggleModal"
      >
        <div class="relative mx-auto w-1/3">
          <div class="bg-white w-full h-56 rounded-lg shadow-2xl flex flex-col">
            <div class="text-2xl font-bold p-3 mx-auto">ワタシノキモチ</div>
            <div class="flex justify-between h-16 mt-10">
              <div class="flex w-1/3 justify-center">
                <v-icon
                  name="umbrella"
                  scale="4"
                  class="text-blue-600 hover:text-blue-400 cursor-pointer"
                  @click="register('1')"
                />
              </div>
              <div class="flex w-1/3 justify-center">
                <v-icon
                  name="cloud"
                  scale="4"
                  class="text-gray-600 hover:text-gray-400 cursor-pointer"
                  @click="register('2')"
                />
              </div>
              <div class="flex w-1/3 justify-center">
                <v-icon
                  name="sun"
                  scale="4"
                  class="text-red-600 hover:text-red-400 cursor-pointer"
                  @click="register('3')"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="toggleModal" class="absolute z-40 inset-0 opacity-25 bg-black"></div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { MyFeelings } from '~/classes/myFeelings'


@Component({
  name: 'Section3',
})
export default class extends Vue {
  toggleModal: boolean = false

  register (value: string) {
    let myFeelings: MyFeelings = new MyFeelings();
    this.$set(myFeelings, 'userId', '123456')
    this.$set(myFeelings, 'feelingsCls', value)
    console.log(JSON.stringify(myFeelings))
    this.toggleModal = !this.toggleModal
  }

}

</script>

<style>
body {
  background-color: #f8f8ff;
}

</style>
