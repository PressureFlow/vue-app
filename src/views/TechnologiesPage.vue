<script setup>
import { ref, onMounted } from "vue";
import TechnologiesCard from "../components/TechnologiesCard.vue";



const technologiesList = ref([]);

onMounted(() => {
    fetch("http://localhost:3000/technologies")
    .then((response) => response.json())
    .then((apiTechnologies) => {
      technologiesList.value = apiTechnologies;
    });
});
</script>

<template>
  <h1>
    Technologies
  </h1>
  <div>
    <TechnologiesCard v-for="technology in technologiesList" :key="technology.id" :technology="technology"/>
  </div>
</template>

<style></style>
