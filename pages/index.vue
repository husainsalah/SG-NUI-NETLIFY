<template>
  <div>
    <div class="absolute z-10 h-full w-full">
      <video
        autoplay
        loop
        muted
        class="pt-0 pb-0 z-10"
      >
        <source
          src="~/assets/images/free-jazz-gallery-tour-v1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="relative z-30 flex m-96 w-full">
      <div
        class="relative z-30 p-9 mx-auto my-auto border-white border-2 text-center text-6xl bg-white bg-opacity-60 transition-all animate-pulse hover:bg-white hover:bg-opacity-80 hover:scale-105 hover:animate-none"
      >
        <NGradientText
          :gradient="{
            from: 'rgb(85, 85, 85)',
            to: 'rgb(127, 127, 127)',
            deg: '90'
          }"
          :size="24"
          :deg="270"
        >
          <a href="/about">SG Art<br />Enter<br />Here</a>
        </NGradientText>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { NGradientText } from 'naive-ui'
  //import { NH1, NH2, NText, NP, NSpace, NOl, NLi } from 'naive-ui'

  // const tools = ['ESLint', 'Stylelint', 'Prettier', 'Husky', 'Lint-staged']
</script>
