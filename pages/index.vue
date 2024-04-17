<template>
  <div>
    <div class="relative flex items-center justify-center overflow-none">
      <div class="relative justify-center w-full font-hairline overflow-none">
        <section>
          <div class="flex flex-col z-10 hairline">
            <NCarousel
              effect="card"
              prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
              next-slide-style="transform: translateX(50%) translateZ(-800px);"
              style="height: 100vh"
              :show-dots="false"
            >
              <NCarouselItem :style="{ width: '60%' }">
                <img
                  class="carousel-img"
                  src="~/public/images/bags/bags.jpg"
                />
              </NCarouselItem>
              <NCarouselItem :style="{ width: '60%' }">
                <img
                  class="carousel-img"
                  src="~/public/images/bags/bags-2.jpg"
                />
              </NCarouselItem>

              <NCarouselItem :style="{ width: '60%' }">
                <img
                  class="carousel-img"
                  src="~/public/images/bags/bags-3.jpg"
                />
              </NCarouselItem>

              <NCarouselItem :style="{ width: '60%' }">
                <img
                  class="carousel-img"
                  src="~/public/images/bags/bags-4.jpg"
                />
              </NCarouselItem>

              <NCarouselItem :style="{ width: '60%' }">
                <img
                  class="carousel-img"
                  src="~/public/images/bags/bags-5.jpg"
                />
              </NCarouselItem>
            </NCarousel>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { NCarousel, NCarouselItem } from 'naive-ui'
</script>
<style scoped>
  section {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
  }

  img {
    object-fit: none;
  }
</style>
