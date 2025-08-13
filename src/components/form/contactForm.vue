<template>
  <section class="content-center">
    <div class="flex justify-center">
      <motion.div
        :initial="{ y: 10, opacity: 0 }"
        :animate="{ y: 0, opacity: 1 }"
        :exit="{ y: -10, opacity: 0 }"
        :transition="{ duration: 1 }"
      >
        <div
          class=" bg-linear-135 to-sky-300/10 from-sky-300/33 rounded-2xl p-5 shadow-2xl backdrop:blur-2xl text-gray-100 relative max-sm:p-3 max-sm:m-2 w-100 h-100"
        >
          <form
            class="obratnuj-zvonok"
            autocomplete="off"
            action="email.php"
            method="post"
          >
            <div class="form-zvonok ">
              <div class="flex flex-col">
                <div class="flex flex-col gap-7">
                  <div class="flex flex-col">
                    <label for="">Имя</label>
                    <input type="text" name="username" required placeholder="Имя" class="border-gray-500 border-2 p-3 rounded-2xl"/>
                  </div>
                  <div class="flex flex-col">
                    <label for="">Номер телефона</label>
                    <input type="text" name="usernumber" required placeholder="Номер телефона" class="border-gray-500 border-2 p-3 rounded-2xl"/>
                  </div>
                  <div class="flex flex-col">
                    <label for="">Сообщение</label>
                    <input type="text" name="question" placeholder="Сообщение" class="border-gray-500 border-2 p-3 rounded-2xl"/>
                  </div>
                </div>

                <motion.button
                  class="text-gray-100 px-16 py-3 bg-pink-500 rounded-2xl mt-10"
                  :whileHover="{ scale: 1.1 }"
                  :whilePress="{ scale: 0.95 }"
                >
                  Login
                </motion.button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  </section>
</template>

<script setup>
import { motion } from "motion-v";
</script>

<style>
section {
  min-height: 100vh;
}

label {
    font-size: 14px;
}
::placeholder {
    font-size: 16px;
}


</style>
