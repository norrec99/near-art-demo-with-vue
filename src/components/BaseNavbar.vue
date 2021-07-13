<template>
  <Disclosure as="nav" class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center text-white font-bold">
            <h1>Art Demo</h1>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button v-if="accountId" @click="logout" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">Log out</button>
          <button v-else @click="signIn" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">Login with NEAR Wallet</button>
        </div>
      </div>
    </div>
  </Disclosure>
</template>

<script>
import { Disclosure } from "@headlessui/vue";
import { wallet, CONTRACT_ID } from "@/services/near.js";
export default {
  components: {
    Disclosure
  },
  setup() {
    const accountId = wallet.getAccountId();
    function logout() {
      wallet.signOut();
      window.location.reload();
    }
    return {
      accountId,
      signIn: () => wallet.requestSignIn(CONTRACT_ID),
      logout
    };
  }
};
</script>
