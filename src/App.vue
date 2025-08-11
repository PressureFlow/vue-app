<script setup>
import NavPage from "./components/navigation/NavPage.vue";

</script>

<template>
  <body class="bg-gray-900">
    <NavPage />
        <RouterView />
  </body>
</template>

<style>
body {
  font-family: "Montserrat", serif;
  min-height: 100vh;
}
html {
  scroll-behavior: smooth;
}
</style>
