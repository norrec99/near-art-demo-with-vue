<template>
  <BaseForm @generateRandom="generateRandom" :seed="seed" />
  <div v-if="seed">
      <button @click="claimDesign()" type="button" class="inline-flex items-center px-3 py-2 border border-transparent font-medium rounded-md bg-indigo-200">
    Claim Design
  </button>
  </div>
  <div v-if="claimErr">
    <Alert :message=claimErr.kind.ExecutionError />
  </div>
  <div class="design">
    {{ designs }}
  </div>
</template>

<script>
import BaseForm from "@/components/BaseForm";
import Alert from "@/components/Alert"
import { ref, onMounted } from "vue";

import {
  viewMyDesign,
  design,
  claimMyDesign,
  randomDesign,
} from "../services/near";

export default {
  components: {
    BaseForm,
    Alert
  },

  async setup() {
    // messages starts as an empty array
    const designs = ref([]);
    const seed = ref();
    let numberPattern = /\d+/g;
    const claimErr = ref("");

    onMounted(async () => {
      await viewMyDesign().then((i) => {
        designs.value = i.receipts_outcome[0].outcome.logs[0];
      });
    });

    const generateRandom = async () => {
      await randomDesign().then((i) => {
        designs.value = i.receipts_outcome[0].outcome.logs[1];
        seed.value = JSON.parse(
          i.receipts_outcome[0].outcome.logs[0].match(numberPattern)
        );
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
    const claimDesign = async () => {
      try{
      await claimMyDesign({ seed }).then((i) => {
        designs.value = i.receipts_outcome[0].outcome.logs;
      });
      }catch(err){claimErr.value = err}
    };

    return {
      designs,
      design: handleDesign,
      claimDesign,
      generateRandom,
      seed,
      claimErr,
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
