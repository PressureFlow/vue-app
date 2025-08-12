<template>
  <section class="form flex justify-center">
    
    <div class="flex items-center">
        <motion.div
    :initial="{y:10, opacity:0}"
    :animate="{y:0,opacity:1}"
    :exit="{y:-10,opacity:0}"
    :transition="{duration: 1}"
    >
      <div
        class="transition-all delay-150 duration-300 ease-in-out bg-linear-135 to-sky-300/10 from-sky-300/33 rounded-2xl p-5 shadow-2xl backdrop:blur-2xl text-gray-100 relative hover:scale-110 max-sm:p-3 max-sm:m-2"
      >
        <form
          class="obratnuj-zvonok"
          autocomplete="off"
          action="email.php"
          method="post"
        >
          <div class="form-zvonok">
            <div class="flex flex-col justify-center items-center">
              <div class="flex flex-col gap-7">
                <div class="flex justify-between items-center">
                  <label>Имя<span>*</span></label>
                  <input type="text" name="username" required />
                </div>
                <div class="flex justify-between items-center">
                  <label>Номер телефона(с кодом)<span>*</span></label>
                  <input type="text" name="usernumber" required />
                </div>
                <div class="flex justify-between items-center">
                  <label>Сообщение</label>
                  <input type="text" name="question" />
                </div>
              </div>

              <motion.button
                class="text-gray-100 px-8 py-3 bg-sky-500 rounded-2xl"
                :whileHover="{ scale: 1.1 }"
                :whilePress="{ scale: 0.95 }"
              >
                sfdsdf
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
import {  motion } from "motion-v";


</script>

<style>
section {
  min-height: 100vh;
}

input {
  border: 1px solid white;
  margin-left: 3rem;
  padding: 0.7rem;
  border-radius: 20px;
}
</style>
