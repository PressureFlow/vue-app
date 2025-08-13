<template>
  <Carousel
    v-bind="carouselConfig"
    :autoplay="3000"
    :pause-autoplay-on-hover="true"
    :mouse-drag="true"
    :touch-drag="true"
    :mouse-wheel="{ threshold: 20 }"
    :transition="500"
  >
    <Slide :key="1">
      <img
        src="/image/certificates/Start_page-0001.jpg"
        alt=""
        class="w-full h-full object-cover flex-shrink-0"
      />
    </Slide>
    <Slide :key="2">
      <img
        src="/image/certificates/Basic_page-0001.jpg"
        alt=""
        class="w-full h-full object-cover flex-shrink-0"
      />
    </Slide>
    <Slide :key="3">
      <img
        src="/image/certificates/Upgrade_page-0001.jpg"
        alt=""
        class="w-full h-full object-cover flex-shrink-0"
      />
    </Slide>
    <Slide :key="4">
      <img
        src="/image/certificates/Pro_page-0001.jpg"
        alt=""
        class="w-full h-full object-cover flex-shrink-0"
      />
    </Slide>
    <Slide :key="5">
      <img
        src="/image/certificates/Itogovaya attestatsiya (1)_page-0001.jpg"
        alt=""
        class="w-full h-full object-cover flex-shrink-0"
      />
    </Slide>

    <template #addons>
      <CarouselNavigation>
        <template #prev>
          <span>←</span>
        </template>
        <template #next>
          <span>→</span>
        </template>
      </CarouselNavigation>
      <CarouselPagination />
    </template>
  </Carousel>
</template>

<script setup>
import "vue3-carousel/carousel.css";

import { Carousel, Slide } from "vue3-carousel";
import { Navigation as CarouselNavigation } from "vue3-carousel";
import { Pagination as CarouselPagination } from "vue3-carousel";

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
};
</script>

<style>



.carousel__next,
.carousel__prev {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    color: white;
    margin: 20px;
}

.carousel__next:hover,
.carousel__prev:hover {
    color: #e5e5e5;
}

.carousel__next--disabled,
.carousel__prev--disabled {
    opacity: 0.3;
}

.carousel__pagination-button {
  height: 15px;
  width: 15px;
  border-radius: 5px;
  background-color: rgba(128, 128, 128, 0.425);
}
.carousel__pagination-button--active {
  background-color: white;
}
</style>
