import { ref, onMounted } from "vue";
import { viewMyDesign, randomDesign, design, claimMyDesign } from "../services/near";

// There is only one reactive piece of data in this application (messages)
// this hook gets the array of messages and returns:
// 1. the array of messages (getter)
// 2. a function to add messages to the array of messages (setter)
export const useDesigns = () => {
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

  return {
    designs,
    randomDesign: handleRandomDesign,
    design: handleDesign,
    claimMyDesign: claimDesign
  };
};
