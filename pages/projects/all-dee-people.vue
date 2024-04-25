<script setup lang="ts">
  import { NGradientText, NCarousel, NCarouselItem } from 'naive-ui'
</script>
<template>
  <div>
    <div class="grid-flow-col auto-cols-min w-fit tracking-tighter">
      <NGradientText
        :gradient="{
          from: 'rgb(0, 0, 0)',
          to: 'rgb(170, 170, 170)'
        }"
        :size="52"
      >
        All-dee people
      </NGradientText>
    </div>

    <div class="grid-flow-col auto-cols-min-2">
      <div class="w-50 rounded-lg text-xl hairline transition-all">
        <div class="h-screen flex items-center justify-center">
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
        <p class="hairline">
          In the tale of the Alldee-people, once reduced to mere vessels of function 'everydayness' , a remarkable
          transformation unfolds as they emerge from the shadows of their discarded vessels. Though their faces remain
          tethered to these remnants, their essence begins to shine anew. This visual narrative revolves around the
          story of faces and everydayness.
        </p>
        <p class="pt-8 hairline">
          Now fully restored, outsiders perceive the Alldee-people as rare and striking, albeit possessing a peculiar
          beauty. Crucially, they are esteemed not merely as valued commodities, but as beings of intrinsic worth and
          significance. Overall, it's a poignant concept that explores themes of identity, conformity, and the desire
          for change or renewal.
        </p>
        <p class="pt-8 hairline">
          Medium- Plastic shopping bags, size: approximately 20x20in acrylic paint, spray paint and marker.
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
  p {
    @apply text-xl;
  }

  .exhibit-img {
    width: auto;
    height: 100%;
    object-fit: flex-grow;
    text-align: center;
  }
</style>
