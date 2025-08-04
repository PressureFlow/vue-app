<script setup>
import NavPage from './components/navigation/NavPage.vue';


</script>

<template>
  <body class="bg-gray-900">
    <NavPage ></NavPage>
  <router-view></router-view>
  </body>
  
</template> 

<style> 
body {
    font-family: "Montserrat", serif;
}
</style>
