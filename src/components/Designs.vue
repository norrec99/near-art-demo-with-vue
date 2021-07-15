<template>
  <BaseForm :randomArt="dObj" @gRandomArt="generateArt" />
  <div class="design">hello</div>
</template>

<script>
// import { useDesigns } from "@/composables/near.js";
import BaseForm from '@/components/BaseForm';
import { ref, onMounted } from 'vue';
import { viewMyDesign, randomDesign, design, claimMyDesign } from '../services/near';

export default {
  components: {
    BaseForm
  },
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

    // const d1 = await randomDesign();
    // const dObj = { image: d1.receipts_outcome[0].outcome.logs[1] };
    // designs.value.push(dObj);
    // console.log('*******************');
    // console.log(designs.value[0]);
    // console.log('*******************');

    async function generateArt() {
      const d1 = await randomDesign().then(e => {
        console.log('*******************');
        console.log(e);
        console.log('*******************');
      });
      const dObj = { image: d1.receipts_outcome[0].outcome.logs[1] };
      designs.value.push(dObj);
    }
    // console.log("*******************");
    // console.log(designs.value);
    // console.log("*******************");
    // console.log("d1 ", d1);
    // console.log(claimMyDesign("35805521"));
    return {
      designs,
      randomDesign: handleRandomDesign,
      design: handleDesign,
      claimMyDesign: claimDesign,
      // d1,
      // dObj,
      generateArt
    };
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
