<template>
  <section class="flex justify-center ">
    <div class="bg-gray-800 m-5 p-10 rounded-3xl w-440 text-gray-100 mt-25">
      <div
        class="flex w-full justify-around items-center max-sm:flex max-sm:flex-col-reverse max-sm:mt-0"
      >
        <div class="w-1/3 max-sm:w-full max-sm:p-4 max-sm:mt-5">
          <span class="text-2xl"
            ><h1 class="text-8xl font-bold uppercase max-sm:text-6xl mb-3 ">
              привет, меня зовут <span class="text-pink-500">Илья</span>
            </h1>
            <p class="text-justify mb-3">
              Это мой сайт-портфолио, тут ты можешь увидеть все детали обо мне и
              об моих работах накопленных во время прохождения курсов в
              московском университете "Синергия"
            </p>
          </span>
          <button
            class="px-8 py-3 bg-pink-500 hover:bg-pink-400 text-white rounded-full uppercase font-bold text-sm md:text-base shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50"
          >
            Узнать
          </button>
        </div>

        <div
          class="w-1/3 max-sm:w-full max-sm:max-h-30 max-sm:max-w-full overflow-hidden"
        >
          <img
            src="../../public/image/5445178792663447678.jpg"
            class="w-130 rounded-bl-full rounded-r-full max-sm:rounded-none max-sm:-translate-y-1/4"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

  <section class="mt-10">
    <div class="flex flex-row-reverse justify-around">
      <div class="flex flex-col w-1/3">
        <h1 class="text-3xl">Тут описание обо мне</h1>
        <p class="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam amet
          aliquam optio minus, ullam pariatur odit facere mollitia esse iste.
        </p>
      </div>

      <div
        class="image w-1/2 flex overflow-hidden max-h-170 rounded-2xl hover:scale-110 shadow-md transition-all"
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

  <section
    class="flex flex-wrap md:justify-between mt-10 max-sm:justify-around"
  >
    <TechnologiesCard />
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
};
</script>
<style>
</style>
