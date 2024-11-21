<script setup lang="ts">
  import { NGradientText, NImage } from 'naive-ui'
</script>
<template>
  <div class="w-4/5 mx-auto">
    <div class="grid-flow-col auto-cols-min w-fit tracking-tighter">
      <NGradientText
        :gradient="{
          from: 'rgb(0, 0, 0)',
          to: 'rgb(170, 170, 170)'
        }"
        :size="52"
      >
        Brain Crush 16
      </NGradientText>
    </div>

    <div class="grid-flow-col auto-cols-min-2">
      <div class="w-50 rounded-lg text-xl hairline transition-all">
        <NDivider></NDivider>
        <p><strong> Public Records</strong>, New York City</p>
        <p><strong>On View</strong>: November 3, 2024</p>

        <NDivider></NDivider>
        <div class="h-screen flex items-center justify-center">
          <NImage
            src="/images/brain-crush-16.webp"
            class="exhibit-img pb-8"
            width="580px"
          >
          </NImage>
        </div>

        <p class="hairline">
          Brain Crush 16, created by artist and musician Scott Grooves, delves into the concept of intellectual
          attraction through a series of 16 captivating mixed-media artworks. Each 8x10-inch piece contrasts dark,
          shadowed tones with bright, luminescent colors, symbolizing the unique allure of "crushing" on someone’s mind
          rather than their physical appearance. Inspired by the imagery of brain scans, the repetitive patterns and
          layered dark tones represent the complexity and depth of hidden qualities that inspire admiration, while the
          vivid hues capture the spark of connection ignited by another’s intellect. This collection challenges
          conventional ideas of attraction, underscoring how a deep intellectual connection can strengthen bonds and
          transcend superficiality.
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
