<script setup lang="ts">
  import { NDivider, NGradientText, NImage } from 'naive-ui'
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
        Mono Waltz
      </NGradientText>
    </div>

    <div class="grid-flow-col auto-cols-min-2">
      <div class="w-50 rounded-lg text-xl hairline transition-all">
        <h2 class="font-bold text-xl hairline">A solo exhibition exploring the rich overlap of art and music</h2>

        <NDivider></NDivider>
        <p><strong> Filter Detroit</strong>: 12645 Moran Street, 48212 Detroit</p>
        <p><strong>On View</strong>: May 19 - June 16, 2024</p>
        <p><strong>Opening</strong>: Sunday May 19, 5 to 8 pm @ FILTER Detroit</p>
        <p>
          <strong>Sound Gathering</strong>: "After the Dance Phone Home", Thursday May 23, 5 to 8 pm @ Play House (Next
          to Filter Detroit)
        </p>
        <NDivider></NDivider>
        <div class="h-screen flex items-center justify-center">
          <NImage
            src="/images/mono-waltz.webp"
            class="exhibit-img pb-8"
            width="580px"
          >
          </NImage>
        </div>
        <div class="flex items-center justify-center hairline">
          <p class="pb-8 text-sm">
            Sgart (Scott Grooves), <i>Mono Waltz</i>, 2024. Ink on paper. Courtesy of the artist.
          </p>
        </div>
        <p class="hairline">
          Immerse yourself in the multi-sensory experience of 'Mono Waltz', where art meets sound in a symphony of black
          and white. Uncover the deeper meaning behind 'Mono Waltz' and its role in providing a space for reflection and
          decompression. We welcome you to join the exhibition as Sgart shares his insights into the complexity and
          harmony of light and darkness.
        </p>
        <p class="pt-8 hairline">
          'Mono Waltz' by Sgart is a collaboration with FILTER Detroit and Play House Laboratories. Curated by Kerstin
          Niemann.
        </p>
        <p class="pt-8 hairline">
          Location: FILTER Detroit, 12645 Moran Street, 48212 Detroit. Please use backyard entrance.
        </p>
        <p class="pt-8 hairline">
          Sound Gathering: "After the Dance Phone Home", Thursday May 23, 5 to 8 pm @ Play House (Next to Filter
          Detroit)
        </p>
        <p class="pt-8 hairline">
          FILTER Detroit hours: May 20 / May 21 - noon to 4pm + May 23 - 5 pm to 8 pm All the other times by appointment
          only: filterdetroit@gmail.com
        </p>
        <p class="pt-8 hairline">
          FILTER Detroit is a research residency in Detroit for artists, musicians and urban researchers. For more
          information please visit filterdetroit.org Play House Laboratories is a laboratory for experimental
          performance and exchange: thehinterlands.org/play-house
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
