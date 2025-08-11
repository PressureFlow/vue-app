<template>
  <section class="flex justify-center" id="first">
    <div
      class="m-5 p-10 rounded-3xl w-440 text-gray-100 mt-25 shadow-2xl max-sm:p-0  bg-linear-to-b/srgb from-indigo-500/10 to-sky-400/33 backdrop:blur-2xl"
    >
      <div
        class="flex w-full justify-around items-center max-sm:flex max-sm:flex-col-reverse max-sm:mt-0"
      >
        <div class="w-1/3 max-sm:w-full max-sm:p-4 max-sm:mt-5">
          <span class="text-2xl"
            ><h1 class="text-8xl font-bold uppercase max-sm:text-3xl mb-3">
              привет, меня зовут <span class="text-pink-500">Илья</span>
            </h1>
            <p class="text-justify mb-3 max-sm:text-xl">
              Это мой сайт-портфолио, тут ты можешь увидеть все детали обо мне и
              об моих работах накопленных во время прохождения курсов в
              московском университете "Синергия"
            </p>
          </span>
          <button
            class="px-8 py-3 bg-pink-500 hover:bg-pink-400 text-white rounded-full uppercase font-bold text-sm md:text-base shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50"
            @click="scrollToSection"
          >
            Узнать
          </button>
        </div>

        <div
          class="w-1/3 max-sm:w-full max-sm:max-h-30 max-sm:max-w-full overflow-hidden max-sm:rounded-t-3xl"
        >
          <img
            src="../../public/image/5445178792663447678.jpg"
            class="w-130 rounded-bl-full rounded-r-full max-sm:-translate-y-1/4"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

  <section class="mt-10" id="second" ref="section">
    <div class="flex flex-row-reverse justify-around items-center max-sm:flex-col-reverse max-sm:m-3">
      <div class="flex flex-col w-1/3 max-sm:w-full">
        <h1 class="text-3xl mb-5 uppercase text-pink-700 font-bold">
          <span class="text-pink-400">Илья</span> — Ваш будущий
          фронтенд-разработчик.
        </h1>
        <p class="text-justify text-2xl text-gray-100 max-sm:text-xl">
          С головой погружен в мир фронтенд-разработки, я учусь на 3 курсе
          "Информационные системы и программирование" и постоянно совершенствую
          свои знания. Моя страсть — создание интуитивно понятных и визуально
          привлекательных пользовательских интерфейсов. Я освоил JavaScript и
          активно применяю фреймворки Vue.js и React в своих проектах. Все
          пройденные мною курсы и полученные навыки подтверждены
          соответствующими сертификатами. Давайте вместе создавать будущее веба!
        </p>
      </div>

      <div
        class="image w-1/2 flex overflow-hidden max-h-170 rounded-2xl hover:scale-110 shadow-2xl transition-all max-sm:w-full max-sm:h-70 max-sm:mb-6"
      >
        <div class="card w-full">
          <img
            src="../../public/image/image_2023-12-06_19-07-49.png"
            class="w-full"
            alt=""
          />
        </div>
        <div class="card w-full">
          <img
            src="../../public/image/image_2023-12-06_19-12-49.png"
            class="w-full"
            alt=""
          />
        </div>
        <div class="card w-full">
          <img
            src="../../public/image/photo_2023-12-06_18-49-50.jpg"
            class="w-full"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

  <section class="p-10 max-sm:p-3" id="third">
    <div class="flex justify-around bg-linear-to-b/srgb from-indigo-500/10 to-sky-400/33 backdrop:blur-2xl rounded-2xl shadow-2xl max-sm:flex-wrap ">
<TechnologiesCard />
    </div>
      
  </section>
</template>
<script>
import TechnologiesCard from "../components/TechnologiesCard.vue";
import AboutPage from "./AboutPage.vue";

export default {
  components: {
    AboutPage,
    TechnologiesCard,
  },
  methods: {
    scrollToSection() {
      this.$refs.section.scrollIntoView({behavior: 'smooth'})
    }
  }
};
</script>
<style></style>
