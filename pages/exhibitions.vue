<script setup lang="ts">
  import { NDivider, NGradientText, NImage } from 'naive-ui'
  const projects = ref([
    {
      id: '5',
      title: 'Brain Crush 16',
      date: '11/03/2024',
      excerpt:
        'Brain Crush 16, created by artist and musician Scott Grooves, delves into the concept of intellectual attraction through a series of 16 captivating mixed-media artworks.',
      uri: '/projects/brain-crush-16/',
      venue: 'Public Records, New York City',
      startDate: 'Nov 3, 2024',
      endDate: 'Nov 3, 2024',
      projectImage: 'images/brain-crush-16.webp'
    },
    {
      id: '3',
      title: 'Mono Waltz',
      date: '05/19/2024',
      excerpt:
        "Immerse yourself in the multi-sensory experience of 'Mono Waltz', where art meets sound in a symphony of black and white.Uncover the deeper meaning behind 'Mono Waltz' and its role in providing a space for reflection and decompression.We welcome you to join the exhibition as Sgart shares his insights into the complexity and harmony of light and darkness.",
      uri: '/projects/mono-waltz/',
      venue: 'Filter Detroit',
      startDate: 'May 19, 2024',
      endDate: 'June 16 2024',
      projectImage: 'images/mono-waltz.webp'
    },
    {
      id: '4',
      title: 'Alldee-people',
      date: 'Ongoing',
      excerpt:
        "In the tale of the Alldee- people, once reduced to mere vessels of function 'everydayness', a remarkable transformation unfolds as they emerge from the shadows of their discarded vessels.",
      uri: '/projects/all-dee-people/',
      venue: '',
      startDate: 'Ongoing',
      endDate: '',
      projectImage: 'images/bags/bags.jpg'
    },
    {
      id: '1',
      title: 'After The Dance',
      date: '7/24/2023',
      excerpt:
        'Detroit-based interdisciplinary artist Scott Grooves has finalized the debut iteration of his most ambitious project to date.  Titled after Marvin Gaye\'s soulful record "After the Dance\,\”  Grooves delves into the realm beyond the dance floor\, prompting viewers to ponder what lies ahead. The exhibition will open on Friday, September 22 at 5pm to 8pm at Red Door Digital. A performance will be held at 7:30pm at the opening. All are welcome to attend. Curated by Elysia Borowy',
      uri: '/projects/after-the-dance/',
      venue: 'Red Door Digital',
      startDate: 'July 24, 2024',
      endDate: 'June 11 2023',
      projectImage: 'images/FreeJazz.webp'
    },
    {
      id: '2',
      title: 'Free Jazz',
      date: '7/26/2023',
      excerpt: 'Solo art exhibition reception featuring the works of SGart. Paintings, Drawings and more.',
      uri: '/projects/filter-detroit/',
      venue: 'Filter Detroit',
      startDate: 'May 19 2023',
      endDate: 'June 11 2023',
      projectImage: 'images/filterDetroit.webp'
    }
  ])
</script>
<template>
  <div class="w-4/5 mx-auto">
    <div class="columns-1 lg:col-span-2">
      <h1 class="tracking-tighter h-full">
        <NGradientText
          :gradient="{
            from: 'rgb(0, 0, 0)',
            to: 'rgb(170, 170, 170)'
          }"
          :size="52"
        >
          Projects
        </NGradientText>
      </h1>
    </div>

    <div class="grid-flow-col auto-cols-min-2 gap-5">
      <div
        v-for="project in projects"
        :key="project.id"
      >
        <div class="p-2 w-50 rounded-lg text-xl font-hairline transition-all">
          <NuxtLink :to="project.uri">
            <h2 class="font-bold text-gray text-4xl hover:-translate-y-1 hover:text-silver">
              {{ project.title }}
            </h2>
          </NuxtLink>
          <NDivider></NDivider>
          <p class="hairline">{{ project.venue }} : {{ project.startDate }} - {{ project.endDate }}</p>
          <NDivider></NDivider>
          <p class="hairline">{{ project.excerpt }}</p>
          <div class="h-screen flex items-center justify-center">
            <NImage
              :src="project.projectImage"
              class="exhibit-img flex pt-8 pb-8"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .exhibit-img {
    width: auto;
    height: 100%;
    text-align: center;
    object-fit: flex-grow;
  }
</style>
