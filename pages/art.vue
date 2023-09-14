<script setup>
  import { NGradientText, NGrid, NGi } from 'naive-ui'
</script>

<template>
  <div>
    <section>
      <div class="flex p-8 max-w-xlg mx-full bg-white space-x-8 tracking-tighter grid grid-flow-col">
        <div class="col-span-12 lg:col-span-2">
          <NGradientText
            :gradient="{
              from: 'rgb(0, 0, 0)',
              to: 'rgb(170, 170, 170)'
            }"
            :size="58"
          >
            After the Dance
          </NGradientText>
        </div>

        <div class="flex col-span-8 max-w-xlg mx-full text-2xl tracking-wider font-thin text-gray-dark p-8">
          <ul>
            <li><a href="">Press Release</a></li>
            <li>
              <a href="">Scott Grooves Exhibition Statement After the Dance/ Curatorial Statement Elysia Borowy</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <div class="flex p-8 max-w-xlg mx-full bg-white space-x-8 grid grid-flow-col">
        <div class="col-span-12 lg:col-span-2">
          <NGradientText
            :gradient="{
              from: 'rgb(0, 0, 0)',
              to: 'rgb(170, 170, 170)'
            }"
            :size="58"
          >
            Interview
          </NGradientText>
        </div>
        <div class="flex col-span-8 text-2xl font-thin text-gray-dark p-8">
          <a
            class="inline-flex"
            href="/"
            >Alia Benabdellah, Docteure en Géographie Humaine, in conversation with musician and artist Scott Grooves on
            August 8, 2023
          </a>
        </div>
      </div>
    </section>
    <section>
      <div class="text-8xl h-full w-full tracking-tighter p-8">
        <NGradientText
          :gradient="{
            from: 'rgb(0, 0, 0)',
            to: 'rgb(170, 170, 170)'
          }"
          :size="58"
        >
          Sketch Book
        </NGradientText>
      </div>
      <div class="p-8">
        <NGrid
          x-gap="12"
          :cols="4"
        >
          <NGi>
            <Imgq
              src="/assets/images/sketches/Bad Hair Day.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Bad Hair Day</div>
          </NGi>
          <NGi>
            <img
              src="/assets/images/sketches/Bike Race.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Bike Race</div>
          </NGi>
          <NGi>
            <img
              src="/assets/images/sketches/Blocking Out Her Thoughts.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Blocking Out Her Thoughts</div>
          </NGi>
          <NGi>
            <img
              src="/assets/images/sketches/Downed Lines.jpg"
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
            <img
              src="/assets/images/sketches/Guggenhiem.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Guggenhiem</div>
          </NGi>
          <NGi>
            <img
              src="/assets/images/sketches/Important Trade Routes.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Important Trade Routes</div>
          </NGi>
          <NGi>
            <img
              src="/assets/images/sketches/In-flight Together.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">In-flight Together</div>
          </NGi>
          <NGi>
            <img
              src="/assets/images/sketches/Light Tunnel.jpg"
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
            <img
              src="/assets/images/sketches/Manta Rays.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Manta Rays</div>
          </NGi>
          <NGi>
            <img
              src="/assets/images/sketches/Sea Horses.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Sea Horses</div>
          </NGi>
          <NGi>
            <img
              src="/assets/images/sketches/Stars-lament.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Stars lament</div>
          </NGi>
          <NGi>
            <img
              src="/assets/images/sketches/The Clown.jpg"
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
            <img
              src="/assets/images/sketches/Untitled-A.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Untitled A</div>
          </NGi>
          <NGi>
            <img
              src="/assets/images/sketches/Untitled-B.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Untitled B</div>
          </NGi>
          <NGi>
            <img
              src="/assets/images/sketches/Untitled C.jpg"
              class="carousel-img"
            />
            <div class="sketch-title">Untitled C</div>
          </NGi>
          <NGi>
            <img
              src="/assets/images/sketches/Untitled-D.jpg"
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
            <img
              src="/assets/images/sketches/Untitled-Boats.jpg"
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
    @apply text-xl text-gray font-thin uppercase w-full text-center;
  }
</style>
