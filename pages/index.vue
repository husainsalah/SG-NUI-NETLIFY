<template>
  <div>
    <div class="relative flex items-center justify-center h-fit overflow-none">
      <video
        playsinline
        autoplay
        loop
        muted
        class="fixed top-0 z-10 w-auto min-w-full object-display-contain h-fit max-w-none"
      >
        <source
          src="~/assets/images/free-jazz-gallery-tour-v1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div class="relative justify-center mt-60 font-hairline overflow-none">
        <div
          class="relative w-full z-20 p-5 text-2xl border-white border-2 text-center text-2xl bg-white bg-opacity-60 transition-all animate-pulse hover:bg-white hover:bg-opacity-80 hover:scale-105 hover:animate-none"
        >
          <a
            class="flex"
            href="/projects/after-the-dance"
            >SG <br />Art</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  // import { NGradientText } from 'naive-ui'
</script>

<style scoped>
  .header-container {
    display: none !important;
  }
</style>
