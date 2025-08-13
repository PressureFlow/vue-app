<template>
  <div class="tech-card w-90 m-10 rounded-xl border-2 p-3 border-gray-300 max-sm:w-40 max-sm:m-4 text-gray-100 bg-gray-800 h-1/3 max-sm:h-1/5">
    <div class="tech-title mb-3 ">
      <h1 class="text-2xl font-bold uppercase max-sm:text-sm">Фрйемворк vue</h1>
    </div>
    <div class="tech-content">
      <div class="tech-image mb-3">
        <img src="/image/logo/vue.png" alt="">
      </div>

      <div class="tech-descr">
        
      </div>
    </div>
  </div>

  <div class="tech-card w-90 m-10 rounded-xl border-2 p-3 border-gray-300 max-sm:w-40 max-sm:m-4 text-gray-100 bg-gray-800 h-1/3 max-sm:h-1/5">
    <div class="tech-title mb-3">
      <h1 class="text-2xl font-bold uppercase max-sm:text-sm">Фрйемворк React</h1>
    </div>
    <div class="tech-content">
      <div class="tech-image mb-3">
        <img src="/image/logo/React.png" alt="">
      </div>

      <div class="tech-descr">
        
      </div>
    </div>
  </div>

  <div class="tech-card w-90 m-10 rounded-xl border-2 p-3 border-gray-300 max-sm:w-40 max-sm:m-4 text-gray-100 bg-gray-800 h-1/3 max-sm:h-1/5">
    <div class="tech-title mb-3">
      <h1 class="text-2xl font-bold uppercase max-sm:text-sm">Ванильный JS</h1>
    </div>
    <div class="tech-content">
      <div class="tech-image mb-3">
        <img src="/image/logo/js.png" alt="">
      </div>

      <div class="tech-descr">
        
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  technology: Object,
});
</script>

<style>

</style>
