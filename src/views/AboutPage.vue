<template>
    <body class="bg-gray-900 text-gray-100 p-8 min-h-screen flex items-center justify-center ">
  <div class="container mx-auto p-4 md:p-10 bg-linear-to-b/srgb from-indigo-500/10 to-sky-400/33 backdrop:blur-2xl rounded-3xl shadow-2xl max-w-7xl mt-20">

        <!-- Секция "Обо мне" и "Слайдер" -->
        <div class="flex flex-col lg:flex-row justify-between items-center lg:space-x-12 ">
            
            <!-- Левый блок с текстом -->
            <div class="w-full lg:w-1/2 flex flex-col mb-10 lg:mb-0 text-lg sm:text-xl p-4 space-y-5">
                <!-- Заголовок с основным предложением -->
                <h1 class="uppercase text-3xl md:text-4xl font-bold text-pink-400 leading-tight">
                    Ищете фронтенд-разработчика с актуальными навыками?
                </h1>

                <!-- Первый абзац: Представление и цели -->
                <p class="text-justify leading-relaxed">
                    Меня зовут <span class="text-pink-400 uppercase font-bold">Илья</span>, и я — <span class="font-bold">студент 3 курса по направлению "Информационные системы и программирование"</span>. Я специализируюсь на <span class="font-bold text-pink-400">фронтенд-разработке</span> и готов привнести свежие идеи и практические навыки в ваши проекты.
                </p>

                <!-- Второй абзац: Навыки и компетенции -->
                <div class="space-y-2">
                    <p class="leading-relaxed">
                        Мой арсенал включает в себя ключевые технологии:
                    </p>
                    <ul class="list-disc list-inside ml-4 text-blue-400 font-semibold leading-relaxed">
                        <li>JavaScript</li>
                        <li>Vue.js</li>
                        <li>React</li>
                    </ul>
                    <p class="leading-relaxed">
                        Мои компетенции подтверждены соответствующими <span class="italic font-bold">сертификатами</span>.
                    </p>
                </div>

                <!-- Третий абзац: Призыв к действию и ссылки -->
                <p class="text-justify leading-relaxed">
                    Я постоянно изучаю новые технологии и стремлюсь создавать удобные и современные веб-приложения. Буду рад сотрудничеству и новым вызовам!
                </p>
                
                <p class="leading-relaxed font-bold">
                    С моими проектами вы можете ознакомиться по ссылкам ниже:
                </p>
                
                <div class="flex flex-col space-y-2">
                    <a href="#portfolio-section" class="text-blue-400 hover:text-blue-300 underline font-semibold transition-colors duration-200">
                        → Мое портфолио
                    </a>
                    <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 underline font-semibold transition-colors duration-200">
                        → Мои проекты на GitHub
                    </a>
                </div>
                
                <!-- Кнопка "Портфолио" -->
                <a href="#portfolio-section" class="self-start">
                    <button class="px-8 py-3 bg-pink-500 hover:bg-pink-400 text-white rounded-full uppercase font-bold text-sm md:text-base shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50">
                        смотреть портфолио
                    </button>
                </a>
            </div>

            <!-- Правый блок со слайдером -->
            <div class="w-full lg:w-1/2 flex justify-center items-center relative" id="portfolio-section">
                <VueSlider></VueSlider>
            </div>

        </div>
    </div>
</body>
</template>
<script>
import VueSlider from '../components/slider/VueSlider.vue';

export default {
    components: {
        VueSlider
    }
};
</script>
<style>
        /* Пользовательские стили для кнопок слайдера */
        .slider-button {
            transition: all 0.2s ease-in-out;
            cursor: pointer;
        }
        .slider-button:hover {
            transform: scale(1.1);
        }
</style>
