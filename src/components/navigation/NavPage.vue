<template>
<nav
    class="shadow-md fixed w-full z-10 text-gray-100 backdrop-blur-2xl"
    :class="['navbar', { scrolled: scrolledOnce }]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Логотип -->
        <div class="flex-shrink-0 flex items-center">
          <a href="/" class="text-xl font-bold">pressureflow</a>
        </div>

        <!-- Кнопка бургер -->
        <div class="flex items-center md:hidden">
          <button
            @click="toggleMenu"
            type="button"
            class="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                v-if="!isOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <!-- Меню для десктопа -->
        <div class="hidden md:flex md:items-center space-x-6">
          <a href="#" class=" hover:text-blue-500"
            ><router-link to="/">Home</router-link></a
          >
          <a href="#" class=" hover:text-blue-500"
            ><router-link to="/about">About</router-link></a
          >
          <a href="#" class=" hover:text-blue-500"
            ><router-link to="/tech">Technologies</router-link></a
          >
          <router-link to="/contact"
            ><button
              class="px-8 py-3 bg-pink-500 hover:bg-pink-400 text-white rounded-full uppercase font-bold text-sm md:text-base shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50"
            >
              Contact me
            </button></router-link
          >
        </div>
      </div>
    </div>

    <!-- Мобильное меню -->
    <div v-if="isOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="#" class="block text-gray-100 hover:text-blue-500"
          ><router-link to="/">Home</router-link></a
        >
        <a href="#" class="block text-gray-100 hover:text-blue-500"
          ><router-link to="/about">About</router-link></a
        >
        <a href="#" class="block text-gray-100 hover:text-blue-500"
          ><router-link to="/tech">Technologies</router-link></a
        >
      </div>
    </div>
  </nav>
  
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { motion } from "motion-v";

const scrolledOnce = ref(false);

function handleScroll() {
  if (!scrolledOnce.value && window.scrollY > 0) {
    scrolledOnce.value = true;
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped></style>
