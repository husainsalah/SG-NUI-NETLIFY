<template>
  <div>
    <div class="relative flex items-center justify-center h-fit overflow-none">
      <video
        playsinline
        autoplay
        loop
        muted
        class="fixed top-0 z-10 max-w-none w-full object-display-cover h-fit"
      >
        <source
          src="~/assets/images/untitled%20Folder/bags.jpg"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div class="relative justify-center mt-60 font-hairline overflow-none">
        <div
          class="relative w-full z-20 p-5 text-2xl border-white border-2 text-center text-2xl bg-white bg-opacity-60 transition-all animate-pulse hover:bg-white hover:bg-opacity-80 hover:scale-105 hover:animate-none"
        >
          <a
            class="flex text-gray hover:-translate-y-1 hover:text-silver"
            href="/projects/after-the-dance"
            >Scott <br />Grooves <br />Art</a
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
  video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
</style>
