<template>
  <section class="form flex justify-center ">
    <div class="flex items-center ">
      <div
        class="transition-all delay-150 duration-300 ease-in-out bg-linear-135 to-sky-300/10 from-sky-300/33 rounded-2xl p-2 shadow-2xl backdrop:blur-2xl text-gray-100 relative hover:scale-110"
      >
        <form
          class="obratnuj-zvonok p-2 "
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

              <button
                class="px-8 py-3 bg-pink-500 hover:bg-pink-400 text-white rounded-full uppercase font-bold text-sm md:text-base shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50 mt-7"
                type="submit"
                value="Послать заявку"
              >
                Послать заявку
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script></script>

<style>
section {
  min-height: 100vh;
}

input {
  border: 1px solid white;
  margin-left: 3rem;
  padding: .7rem;
  border-radius: 20px;
}
</style>
