<template>
  <BaseForm
    @generateRandom="generateRandom"
    :seed="seed"
  />
  <div v-for="design in designs" :key="design" class="design">
    {{ design }}
  </div>
</template>

<script>
import BaseForm from "@/components/BaseForm";
import { ref, onMounted } from "vue";

import {
  viewMyDesign,
  design,
  // claimMyDesign,
  randomDesign,
} from "../services/near";

export default {
  components: {
    BaseForm,
  },

  async setup() {
    // messages starts as an empty array
    const designs = ref([]);
    onMounted(async () => {
      await viewMyDesign().then((i) => {
        designs.value = i.receipts_outcome[0].outcome.logs;
      });
    });

    const generateRandom = async () => {
      await randomDesign().then((i) => {
        designs.value = i.receipts_outcome[0].outcome.logs;
      });
    };

    // create a function that allows creating a specific design to the blockchain
    const handleDesign = async ({ seed }) => {
      await design({ seed }).then((i) => {
        designs.value = i.receipts_outcome[0].outcome.logs;
      });
      // designs.value = await viewMyDesign();
    };

    // create a function that allows claiming a specific design to the blockchain
    // const claimDesign = async ({ seed }) => {
    //   await claimMyDesign({ seed }).then((i) => {
    //     designs.value = i.receipts_outcome[0].outcome.logs;
    //   });
    // };

    return {
      designs,
      design: handleDesign,
      // claimDesign,
      generateRandom,
    };
  },
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
