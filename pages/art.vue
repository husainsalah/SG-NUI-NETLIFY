<script setup lang="ts">
  import { NGradientText } from 'naive-ui'
</script>
<template>
  <div class="p-0 m-0">
    <section>
      <div class="h-full w-full tracking-tighter">
        <NGradientText
          :gradient="{
            from: 'rgb(0, 0, 0)',
            to: 'rgb(170, 170, 170)'
          }"
          :size="52"
        >
          After the Dance
        </NGradientText>
      </div>

      <div class="flex grid-flow-col gap-4 auto-cols-min max-w-xlg mx-full text-xl tracking-wider hairline">
        <ul>
          <li>
            <a
              href="pdf/After-the-dance.pdf"
              class="text-gray hover:text-silver"
              >Press Release</a
            >
          </li>
          <li>
            <a
              href="projects/after-the-dance"
              class="text-gray hover:text-silver"
              >Scott Grooves Exhibition Statement After the Dance/ Curatorial Statement Elysia Borowy</a
            >
          </li>
        </ul>
      </div>
    </section>
    <section>
      <div class="h-full w-full tracking-tighter">
        <NGradientText
          :gradient="{
            from: 'rgb(0, 0, 0)',
            to: 'rgb(170, 170, 170)'
          }"
          :size="52"
        >
          Interview
        </NGradientText>
      </div>
      <div class="flex col-span-8 text-xl hairline">
        <a
          class="text-gray hover:text-silver"
          href="press/Alia-in-conversation-with-Scott"
          >Alia Benabdellah, Docteure en Géographie Humaine, in conversation with musician and artist Scott Grooves on
          August 8, 2023
        </a>
      </div>
    </section>
    <!--
    <section>
      <div class="h-full w-full tracking-tighter">
        <NGradientText :gradient="{
          from: 'rgb(0, 0, 0)',
          to: 'rgb(170, 170, 170)'
        }" :size="52">
          Sketch Book
        </NGradientText>
      </div>
    </section>
  --></div>
</template>
<style scoped>
  .carousel-img {
    width: auto;
    height: auto;
    object-fit: flex-grow;
  }

  .sketch-title {
    @apply text-xl font-thin uppercase w-full text-center;
  }
</style>
