<script setup lang="ts">
  import { NGradientText, NCarousel, NCarouselItem } from 'naive-ui'
</script>

<template>
  <div class="w-4/5 mx-auto">
    <section>
      <div class="grid-flow-col gap-4 auto-cols-min">
        <div class="flex tracking-tighter">
          <NGradientText
            :gradient="{
              from: 'rgb(0, 0, 0)',
              to: 'rgb(170, 170, 170)',
              deg: '210'
            }"
            :size="52"
          >
            About
          </NGradientText>
        </div>

        <div class="grid-flow-col gap-4 auto-cols-min text-xl mt-4 mb-4 hairline">
          <div class="para">
            SG Art, known in the music world as Scott Grooves, is a Detroit-based artist and musician who seamlessly
            combines music and elements of industrialism to create captivating immersive experience and artworks.
            Renowned for his contributions to jazz, electronic music and balancing man with machine; the organic with
            the synthetic.
          </div>
          <div class="para">
            Since the early 2000s, Grooves has established himself as a fiercely independent artist, primarily releasing
            music on his own labels: Natural Midi, Modified Suede Recordings, and From The Studio of Scott Grooves. His
            most recent drop, ‘E2E4 Reframed’, a live reimagined cover of the immortal classic from 1984.
          </div>
          <div class="para">
            Grooves was included in an inclusive seventy artist exhibition titled Motion, curated by Roula David at
            Spotlite, Detroit. In May 2023, he made his debut as an artist in residence at FILTER Detroit, the artist
            residency and contemporary art platform established in 2010 to promote collaboration among residents,
            neighbors, and the city of Detroit. The exhibition titled Free Jazz, curated by Kerstin Niemann, showcased
            Grooves' unique artistic style, which involves incorporating mass-produced materials from consumer culture
            and giving them their own distinct language.
          </div>
          <div class="para">
            For his second solo exhibition <i>After the Dance</i>, curated by Elysia Borowy at the underground artist
            space Red Door Digital, Grooves crafted five installations that delve into experimental expressionism in the
            realms of both visual arts and electronic music. Grooves' installations serve as a profound personal
            response to the pervasive capitalist-driven culture while also drawing inspiration from afrofuturism.
            Through these thought-provoking explorations, the artist reflects on the impact of consumerism and creates a
            captivating visual dialogue that engages viewers with societal and futuristic themes.
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="flex flex-col z-10 hairline">
        <NCarousel
          effect="card"
          prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
          next-slide-style="transform: translateX(50%) translateZ(-800px);"
          style="height: 1280px"
          :show-dots="false"
        >
          <NCarouselItem :style="{ width: '60%' }">
            <img
              class="carousel-img"
              src="~/assets/images/enter.jpg"
            />
            <div class="sketch-title">
              <i>ENTER</i><br />
              12 x 12in <span class="text-sm">(30.48 x 30.48cm)</span><br />
              acrylic on canas
            </div>
          </NCarouselItem>

          <NCarouselItem :style="{ width: '60%' }">
            <img
              class="carousel-img"
              src="~/assets/images/call.jpg"
            />
            <div class="sketch-title">
              <i>OSHIABANA CALL</i><br />
              9 x 12in <span class="text-sm">(22.86 x 30.48cm)</span><br />
              acrylic on canas
            </div>
          </NCarouselItem>

          <NCarouselItem :style="{ width: '60%' }">
            <img
              class="carousel-img"
              src="~/assets/images/untitled-no-1.jpg"
            />
            <div class="sketch-title">
              <i>Untitled no. 1</i><br />
              8 x 10in <span class="text-sm">(20.32 x 25.4cm)</span><br />
              acrylic on canas
            </div>
          </NCarouselItem>
          <NCarouselItem :style="{ width: '60%' }">
            <img
              class="carousel-img"
              src="~/assets/images/untitled-no-2.jpg"
            />
            <div class="sketch-title">
              <i>Untitled no. 2</i><br />
              8 x 10in <span class="text-sm">(20.32 x 25.4cm)</span><br />
              acrylic on canas
            </div>
          </NCarouselItem>
          <NCarouselItem :style="{ width: '60%' }">
            <img
              class="carousel-img"
              src="~/assets/images/untitled-no-3.jpg"
            />
            <div class="sketch-title">
              <i>Untitled no. 3</i><br />
              8 x 10in <span class="text-sm">(20.32 x 25.4cm)</span><br />
              acrylic on canas
            </div>
          </NCarouselItem>
          <NCarouselItem :style="{ width: '60%' }">
            <img
              class="carousel-img"
              src="~/assets/images/untitled-no-4.jpg"
            />
            <div class="sketch-title">
              <i>Untitled no. 4</i><br />
              8 x 10in <span class="text-sm">(20.32 x 25.4cm)</span><br />
              acrylic on canas
            </div>
          </NCarouselItem>
          <NCarouselItem :style="{ width: '60%' }">
            <img
              class="carousel-img"
              src="~/assets/images/untitled-no-5.jpg"
            />
            <div class="sketch-title">
              <i>Untitled no. 5</i><br />
              8 x 10in <span class="text-sm">(20.32 x 25.4cm)</span><br />
              acrylic on canas
            </div>
          </NCarouselItem>
          <NCarouselItem :style="{ width: '60%' }">
            <img
              class="carousel-img"
              src="~/assets/images/untitled-no-6.jpg"
            />
            <div class="sketch-title">
              <i>Untitled no. 6</i><br />
              8 x 10in <span class="text-sm">(20.32 x 25.4cm)</span><br />
              acrylic on canas
            </div>
          </NCarouselItem>

          <NCarouselItem :style="{ width: '60%' }">
            <img
              class="carousel-img"
              src="~/assets/images/untitled-no-7.jpg"
            />
            <div class="sketch-title">
              <i>Untitled no. 7</i><br />
              8 x 10in <span class="text-sm">(20.32 x 25.4cm)</span><br />
              acrylic on canas
            </div>
          </NCarouselItem>
          <NCarouselItem :style="{ width: '60%' }">
            <img
              class="carousel-img"
              src="~/assets/images/different-earths.jpg"
            />
            <div class="sketch-title">
              <i>DIFFERENT EARTHS</i><br />
              11 x 14in <span class="text-sm">(20.32 x 25.4cm)</span><br />
              acrylic on canvas
            </div>
          </NCarouselItem>

          <NCarouselItem :style="{ width: '60%' }">
            <img
              class="carousel-img"
              src="~/assets/images/girl-groups.jpg"
            />
            <div class="sketch-title">
              <i>GIRL GROUP</i><br />
              8 x 10in <span class="text-sm">(20.32 x 25.4cm)</span><br />
              marker on canvas
            </div>
            <div class="sketch-title">note: inspired by the female groups of the motown era</div>
          </NCarouselItem>

          <NCarouselItem :style="{ width: '60%' }">
            <img
              class="carousel-img"
              src="~/assets/images/flower-pot.jpg"
            />
            <div class="sketch-title">
              <i>FLOWER BOX</i><br />
              8 x 10in <span class="text-sm">(20.32 x 25.4cm)</span><br />
              mixed media on canvas
            </div>
          </NCarouselItem>

          <NCarouselItem :style="{ width: '60%' }">
            <img
              class="carousel-img"
              src="~/assets/images/zulu-robot.jpg"
            />
            <div class="sketch-title">
              <i>ZULU ROBOT</i><br />
              8 x 10in <span class="text-sm">(20.32 x 25.4cm)</span><br />
              marker & pastel on canvas
            </div>
          </NCarouselItem>

          <NCarouselItem :style="{ width: '60%' }">
            <img
              class="carousel-img"
              src="~/assets/images/parts-of.jpg"
            />
            <div class="sketch-title">
              <i>PARTS OF</i><br />
              12 x 12in <span class="text-sm">(30.48 x 30.48cm)</span><br />
              marker on album jacket
            </div>
          </NCarouselItem>
        </NCarousel>
      </div>
    </section>
    <section class="max-w-screen mx-auto mt-4">
      <div class="grid-flow-col gap-4 auto-cols-min text-6xl tracking-tighter leading-11 h-full">
        <NGradientText
          :gradient="{
            from: 'rgb(0, 0, 0)',
            to: 'rgb(170, 170, 170)'
          }"
          :size="52"
        >
          Artist Statement<br />
        </NGradientText>
      </div>
      <div class="max-w-xlg mx-full text-xl hairline">
        <div class="para">
          3AM Thought: I see with my ears when I write music and I see with my eyes when I make art.
        </div>
        <div class="para">
          3AM Thought: A civilization of beings who were reduced to inexpensive vessels of function. But slowly begin to
          reappear after the material has been tossed aside. This is the visual story of All-Dee People - a story of
          faces.
        </div>
        <div class="para">
          3AM Thought: For years music was my escape hatch during the pandemic, I built a new one, art.
        </div>
        <div class="para">
          3AM Thought: All-Dee People, even though they lost their original identity to the "everydayness" they never
          forgot where they came from. And their hope is to one day totally break free of their chemically based
          composition and be normal again…whatever that is.This restoration process begins the day the everydayness
          stops.
        </div>

        <div class="para">
          3AM Thought: Listening to music doesn’t directly influence my work, but it does affect my mood which helps the
          mobility of my work. Fragments in my head join other fragments and form new ideas.
        </div>
        <div class="para">
          Art and music helped me dream beyond the challenges and limitations of my immediate surroundings- just another
          3am thought
        </div>
      </div>
    </section>
    <section>
      <div class="flex col-span-12 m-auto pl-96 pr-96 w-full place-object-center mx-auto text-2xl font-thin">
        <video
          nocontrols
          muted
          autoplay
          loop
          class="flex"
          poster="~/assets/images/sg-video-poster.png"
        >
          <source
            src="~/assets/images/InShot_20230815_154703481_1.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>

    <section>
      <div class="grid-flow-col gap-4 auto-cols-min text-6xl tracking-tighter leading-11 h-full">
        <NGradientText
          :gradient="{
            from: 'rgb(0, 0, 0)',
            to: 'rgb(170, 170, 170)'
          }"
          :size="52"
        >
          Newsletter
        </NGradientText>
      </div>
      <div class="flex col-span-8 max-w-xlg mx-full text-xl hairline">
        <form
          method="POST"
          action="https://public.herotofu.com/v1/7dc78e20-b0c5-11ee-81c0-55aec8346749"
        >
          <div class="p-8">Stay updated with the latest from Scott Grooves by siging up for the Newsletter.</div>
          <label class="inline mb-6">
            <span class="flex">Your name</span>
            <input
              type="text"
              name="name"
              class="inline w-full m-8 p-1 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Joe Bloggs"
            />
          </label>
          <label class="inline mb-6">
            <span class="w-50 text-2xl">Email address</span>
            <input
              name="email"
              type="email"
              class="inline w-full m-8 p-1 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="joe@example.com"
              required
            />
          </label>

          <div class="inline-block mb-6">
            <button
              type="submit"
              class="h-10 px-5 p-1 m-8 text-white-100 bg-white-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-gray-300"
            >
              Sign up
            </button>
            <div
              style="position: absolute; overflow: hidden; text-indent: -99999px; white-space: nowrap"
              aria-hidden="true"
            >
              <input
                type="text"
                name="_gotcha"
                tabindex="-1"
                autocomplete="off"
              />
            </div>
          </div>
        </form>
      </div>
    </section>

    <section class="max-w-screen mx-auto">
      <div class="grid-flow-col gap-4 auto-cols-min text-6xl tracking-tighter leading-11 h-full">
        <NGradientText
          :gradient="{
            from: 'rgb(0, 0, 0)',
            to: 'rgb(170, 170, 170)'
          }"
          :size="52"
        >
          Social Media
        </NGradientText>
      </div>
      <div class="flex col-span-8 max-w-xlg mx-full text-xl hairline">
        <div class="p-8 mb-4 tracking-wide leading-8">
          <!-- Facebook -->
          <a href="https://www.facebook.com/ScottGroovesOfficial/">
            <svg
              class="h-10 w-10"
              fill="gray"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              />
            </svg>
          </a>
        </div>
        <div class="p-8 mb-4 tracking-wide leading-8">
          <!-- Instagram -->
          <a href="https://www.instagram.com/scottgroovesdj/">
            <svg
              class="h-10 w-10"
              fill="gray"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </a>
        </div>
        <div class="p-8 mb-4 tracking-wide leading-8 h-50 w-50">
          <a
            href="https://sgrooves.bandcamp.com/"
            class="w-10 h-10"
          >
            <img
              src="assets/images/bandcamp-button.png"
              width="20%"
            />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
  .carousel-img {
    width: 90%;
    height: 90%;
    object-fit: cover;
  }

  .sketch-title {
    font-weight: 100 !important;

    @apply text-xl uppercase w-full text-center;
  }

  .para {
    font-weight: 100 !important;

    @apply mb-4 tracking-wide pt-4 pb-4 leading-8 font-thin;
  }
</style>
