<template>
  <div class="flex justify-between mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-10">
      <!-- <label for="seed" class="mr-2">Seed Number</label>
      <input v-model="seed" type="text" name="meme" id="meme" placeholder="seed" class="border rounded p-1 px-3 w-40" />
      <button @click="claimDesignEvent" class="mr-10 ml-10 p-1 w-20 rounded-full bg-indigo-200">Send</button> -->
      <label for="meme" class="mr-2">Random Art</label>
      <button @click="claimDesignEvent" type="button" class="  px-3 py-2 border border-transparent font-medium rounded-md bg-indigo-200">Claim Design</button>
      <button @click="burnDesignEvent" type="button" class="  px-3 py-2 border border-transparent font-medium rounded-md bg-indigo-200">Burn Design</button>
      <button @click="generateRandomEvent" class="px-3 py-2 border border-transparent font-medium rounded-md bg-indigo-200">Generate</button>
    <div></div>
  </div>
  <div class="design">
    {{ randomDesigns }}
  </div>
</template>

<script>

export default {
  props: {
    randomArt: {
      type: Object,
      required: true
    }
  },

  emits:['generateRandom','burnDesign' ,'claimDesign'],
  
  setup(props, { emit }) {
    // eslint-disable-next-line vue/no-setup-props-destructure
    function generateRandomEvent() {
     emit('generateRandom')
    }

    function burnDesignEvent(){
      emit('burnDesign')
    }

    function claimDesignEvent() {
     emit('claimDesign')
    }

    return { generateRandomEvent, claimDesignEvent, burnDesignEvent};
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
