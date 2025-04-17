<template>
  <div>
    <div class="relative flex items-center justify-center">
      <div class="relative justify-center w-full font-hairline">
        <section>
          <div class="flex flex-col z-10 hairline text-2xl py-2">
            <h2 class="mx-auto py-2"><i>DJ SET</i>#7</h2>
            <audio
              controls
              class="mx-auto py-2"
            >
              <source
                src="/sound/7.mp3"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
            <img
              src="/images/7-crop.jpg"
              alt="DJ-Set #7"
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<style scoped>
  /* section {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
} */

  img {
    width: 100%;
    height: 80vh;
    margin: auto;
    object-fit: contain;
  }
</style>
