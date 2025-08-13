<script setup>
import { motion } from "motion-v";
import TechnologiesCard from "../components/TechnologiesCard.vue";
</script>

<template>
  <section class="p-10 bg-(--dark-background) min-h-300">
    <div class="max-sm:m-1 pt-20">
      <motion.div
        :initial="{ y: 10, opacity: 0 }"
        :animate="{ y: 0, opacity: 1 }"
        :exit="{ y: -10, opacity: 0 }"
        :transition="{ duration: 1 }"
      >
        <div
          class="flex flex-wrap w-full gap-5 justify-between bg-linear-to-b/srgb from-indigo-500/10 to-sky-400/33 backdrop:blur-2xl rounded-3xl shadow-2xl"
        >
          <TechnologiesCard />
        </div>
      </motion.div>
    </div>
  </section>
</template>

<style></style>
