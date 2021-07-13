<template>
  <h1>hello</h1>
  {{ designs }}
</template>

<script>
import { useDesigns } from "@/composables/near.js";
export default {
  setup() {
    const { designs, randomDesign, design, claimMyDesign } = useDesigns();
    console.log(design("13068982"));
    console.log(claimMyDesign("35805521"));
    return { designs, randomDesign, design, claimMyDesign };
  }
};
</script>

<style></style>
