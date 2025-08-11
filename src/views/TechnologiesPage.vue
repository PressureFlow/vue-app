<script setup>
import TechnologiesCard from "../components/TechnologiesCard.vue";
</script>

<template>
  <h1>Technologies</h1>
  <div class="m-10 max-sm:m-1">
    <div class="flex flex-wrap w-full gap-5 justify-between mt-25 bg-linear-to-b/srgb from-indigo-500/10 to-sky-400/33 backdrop:blur-2xl rounded-3xl shadow-2xl max-sm:mt-15">
      <TechnologiesCard />
    </div>
  </div>
</template>

<style>
.hand-drawn-line {
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5));
}
.hand-drawn-line {
  stroke: rgb(255, 255, 255);
  stroke-width: 2;
  stroke-linecap: round; /*  Закругляет концы линии */
}
</style>
