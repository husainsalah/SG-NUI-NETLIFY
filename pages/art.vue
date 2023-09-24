<script setup lang="ts">
  import { NGradientText, NGrid, NGi, NImage } from 'naive-ui'
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
      <div class="flex col-span-8 text-xl hairline">
        <a
          class="text-gray hover:text-silver"
          href="press/Alia-in-conversation-with-Scott"
          >Alia Benabdellah, Docteure en Géographie Humaine, in conversation with musician and artist Scott Grooves on
          August 8, 2023
        </a>
      </div>
    </section>
    -->
    <section>
      <div class="h-full w-full tracking-tighter">
        <NGradientText
          :gradient="{
            from: 'rgb(0, 0, 0)',
            to: 'rgb(170, 170, 170)'
          }"
          :size="52"
        >
          Sketch Book
        </NGradientText>
      </div>
      <div class="p-8 hairline">
        <NGrid
          x-gap="12"
          :cols="2"
        >
          <NGi>
            <NImage
              src="images/sketches/Bad Hair Day.webp"
              class="carousel-img"
            />
            <div class="sketch-title">Bad Hair Day</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/Bike Race.webp"
              class="carousel-img"
            />
            <div class="sketch-title">Bike Race</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/Blocking Out Her Thoughts.webp"
              class="carousel-img"
            />
            <div class="sketch-title">Blocking Out Her Thoughts</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/Downed Lines.webp"
              class="carousel-img"
            />
            <div class="sketch-title">Downed Lines</div>
          </NGi>

          <NGi>
            <NImage
              src="images/sketches/Guggenhiem.webp"
              class="carousel-img"
            />
            <div class="sketch-title">Guggenhiem</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/Important Trade Routes.webp"
              class="carousel-img"
            />
            <div class="sketch-title">Important Trade Routes</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/In-flight Together.webp"
              class="carousel-img"
            />
            <div class="sketch-title">In-flight Together</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/Light Tunnel.webp"
              class="carousel-img"
            />
            <div class="sketch-title">Light Tunnel</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/Manta Rays.webp"
              class="carousel-img"
            />
            <div class="sketch-title">Manta Rays</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/Sea Horses.webp"
              class="carousel-img"
            />
            <div class="sketch-title">Sea Horses</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/Stars-lament.webp"
              class="carousel-img"
            />
            <div class="sketch-title">Stars lament</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/The Clown.webp"
              class="carousel-img"
            />
            <div class="sketch-title">The Clown</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/Untitled-A.webp"
              class="carousel-img"
            />
            <div class="sketch-title">Untitled A</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/Untitled-B.webp"
              class="carousel-img"
            />
            <div class="sketch-title">Untitled B</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/Untitled C.webp"
              class="carousel-img"
            />
            <div class="sketch-title">Untitled C</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/Untitled-D.webp"
              class="carousel-img"
            />
            <div class="sketch-title">Untitled D</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/Untitled-Boats.webp"
              class="carousel-img"
            />
            <div class="sketch-title">Untitled Boats</div>
          </NGi>
        </NGrid>
      </div>
    </section>
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
