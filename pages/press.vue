<script setup lang="ts">
  import { NGradientText } from 'naive-ui'
</script>
<template>
  <div class="w-4/5 mx-auto">
    <section>
      <div class="h-full w-full tracking-tighter">
        <NGradientText
          :gradient="{
            from: 'rgb(0, 0, 0)',
            to: 'rgb(170, 170, 170)'
          }"
          :size="52"
        >
          Press & Media
        </NGradientText>
      </div>

      <div class="flex grid-flow-col gap-4 auto-cols-min max-w-xlg mb-8 mx-full text-xl tracking-wider hairline">
        <ul>
          <li>
            <a
              href="/public/pdf/After-the-dance.pdf"
              class="text-gray hover:text-silver"
              >Press Release</a
            >
          </li>
          <li>
            <a
              href="/pages/projects/after-the-dance"
              class="text-gray hover:text-silver"
              >Scott Grooves Exhibition Statement After the Dance/ Curatorial Statement Elysia Borowy</a
            >
          </li>
          <li>
            <a
              href="/interview-scott-grooves-elysia"
              class="text-gray hover:text-silver"
              >Interview with Scott Grooves by Elysia Borowy</a
            >
          </li>
        </ul>
      </div>
    </section>
    <!--
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
          Photos from Recent Events
        </NGradientText>
        <NGrid>
            <NGridItem>
              <NImage src="" />
            </NGridItem>
        </NGrid>
      </div>
    </section>
    -->
  </div>
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
