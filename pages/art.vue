<script setup lang="ts">
  import { NGradientText, NGrid, NGi, NImage } from 'naive-ui'
</script>

<template>
  <div class="p-0 m-0">
    <section>
      <div class="grid-flow-col gap-4 auto-cols-min">
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

      <div class="flex grid-flow-col gap-4 auto-cols-min max-w-xlg mx-full text-2xl tracking-wider hairline">
        <ul>
          <li><a href="pdf/After-the-dance.pdf">Press Release</a></li>
          <li>
            <a href="projects/after-the-dance"
              >Scott Grooves Exhibition Statement After the Dance/ Curatorial Statement Elysia Borowy</a
            >
          </li>
        </ul>
      </div>
    </section>
    <section>
      <div class="col-span-12 lg:col-span-2">
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
          class="inline-flex"
          href="press/Alia-in-conversation-with-Scott"
          >Alia Benabdellah, Docteure en Géographie Humaine, in conversation with musician and artist Scott Grooves on
          August 8, 2023
        </a>
      </div>
    </section>
    <section>
      <div class="text-8xl h-full w-full tracking-tighter">
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
              src="images/sketches/Bad Hair Day.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Bad Hair Day</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/Bike Race.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Bike Race</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/Blocking Out Her Thoughts.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Blocking Out Her Thoughts</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/Downed Lines.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Downed Lines</div>
          </NGi>
        </NGrid>
      </div>

      <div class="p-8">
        <NGrid
          x-gap="12"
          :cols="4"
        >
          <NGi>
            <NImage
              src="images/sketches/Guggenhiem.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Guggenhiem</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/Important Trade Routes.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Important Trade Routes</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/In-flight Together.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">In-flight Together</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/Light Tunnel.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Light Tunnel</div>
          </NGi>
        </NGrid>
      </div>

      <div class="p-8">
        <NGrid
          x-gap="12"
          :cols="4"
        >
          <NGi>
            <NImage
              src="images/sketches/Manta Rays.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Manta Rays</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/Sea Horses.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Sea Horses</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/Stars-lament.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Stars lament</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/The Clown.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">The Clown</div>
          </NGi>
        </NGrid>
      </div>
      <div class="p-8">
        <NGrid
          x-gap="12"
          :cols="4"
        >
          <NGi>
            <NImage
              src="images/sketches/Untitled-A.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Untitled A</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/Untitled-B.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Untitled B</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/Untitled C.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Untitled C</div>
          </NGi>
          <NGi>
            <NImage
              src="images/sketches/Untitled-D.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Untitled D</div>
          </NGi>
        </NGrid>
      </div>
      <div class="p-8">
        <NGrid
          x-gap="12"
          :cols="4"
        >
          <NGi>
            <NImage
              src="images/sketches/Untitled-Boats.jpg"
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
