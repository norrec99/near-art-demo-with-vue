<template>
  <h1>hello</h1>
  <div class="design">
    {{ dObj.image }}
  </div>
</template>

<script>
// import { useDesigns } from "@/composables/near.js";
import { ref, onMounted } from "vue";
import { viewMyDesign, randomDesign, design, claimMyDesign } from "../services/near";

export default {
  async setup() {
  // messages starts as an empty array
    const designs = ref([]);

    // when the component first mounts get designs from the blockchain
    onMounted(async () => {
      designs.value = await viewMyDesign();
    });

    // create a function that allows creating a random desing to the blockchain
    const handleRandomDesign = async () => {
      await randomDesign();
      designs.value = await viewMyDesign();
    };

    // create a function that allows creating a specific desing to the blockchain
    const handleDesign = async ({ seed }) => {
      await design({ seed });
      designs.value = await viewMyDesign();
    };

    // create a function that allows claiming a specific design to the blockchain
    const claimDesign = async ({ seed }) => {
      await claimMyDesign({ seed });
      designs.value = await viewMyDesign();
    };
    const d1 = await design("13068982")
    const dObj = {image: d1.receipts_outcome[0].outcome.logs[1] }
    console.log('d1 ', d1);
    console.log(claimMyDesign("35805521"));
    return {
      designs,
      randomDesign: handleRandomDesign,
      design: handleDesign,
      claimMyDesign: claimDesign,
      d1,
      dObj
    };
  }
};
</script>

<style scoped>
  .design {
    display: flex;
    justify: center;
    align-items: center;
    width: 25vw;
    margin: auto;
  }
</style>
