<template>
  <div>
    <div class="relative flex items-center justify-center h-screen overflow-hidden">
      <div class="static justify-center">
        <a
          class="static flex z-30 p-5 text-2xl border-white border-2 text-center text-2xl bg-white bg-opacity-60 transition-all animate-pulse hover:bg-white hover:bg-opacity-80 hover:scale-105 hover:animate-none"
          href="/about"
          >SG Art<br />Enter<br />Here</a
        >
      </div>
      <video
        autoplay
        loop
        muted
        class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source
          src="~/assets/images/free-jazz-gallery-tour-v1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { NGradientText } from 'naive-ui'
</script>
