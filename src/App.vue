<template>
  <BaseNavbar />
  <!-- <Designs /> -->
  <DesignList />
  <Suspense>
    <template #default>
      <Designs /> 
    </template>
  </Suspense>
</template>

<script>
import BaseNavbar from "@/components/BaseNavbar";
import Designs from "@/components/Designs";
import DesignList from "@/components/DesignList";
export default {
  name: "App",
  components: { Designs, BaseNavbar, DesignList }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
