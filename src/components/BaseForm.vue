<template>
  <div class="flex justify-between mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-10">
    <label for="meme" class="mr-2">Seed Number</label>
    <input v-model="meme" type="text" name="meme" id="meme" placeholder="seed" class="border rounded p-1 px-3 w-40" />
    <button @click="handleSubmit" class="mr-10 ml-10 p-1 w-20 rounded-full bg-indigo-200">Send</button>
    <label for="meme" class="mr-2">Random Art</label>
    <button @click="generateRandomArt" class="mr-2 ml-10 p-1 w-20 rounded-full bg-indigo-200">Generate</button>

    <div></div>
  </div>
  <div class="design">
    {{ randomDesigns }}
  </div>
</template>

<script>
import { ref } from 'vue';
// import { randomDesign } from "../services/near";
// import { randomDesign } from "../services/near";

export default {
  props: {
    randomArt: {
      type: Object,
      required: true
    }
  },
  emits: ['gRandomArt'],
  setup(props) {
    // eslint-disable-next-line vue/no-setup-props-destructure
    const artImg = props.randomArt;
    // console.log("*******************");
    // console.log(artImg);
    // console.log("*******************");
    const randomDesigns = ref([]);
    // console.log("*******************");
    // console.log(randomDesigns);
    // console.log("*******************");

    function generateRandomArt() {
      this.$emit('gRandomArt');
    }
    // console.log("*******************");
    // console.log(randomDesigns.value);
    // console.log("*******************");
    return { artImg, generateRandomArt, randomDesigns };
  }
};
</script>
<style scoped>
.design {
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre;
  margin: auto;
}
</style>
