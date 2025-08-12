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
}
html, body {
  height: calc(100% - 50px);
}
</style>
