<script setup lang="ts">
  import { NDivider, NGradientText, NImage } from 'naive-ui'
  const projects = ref([
    {
      id: '1',
      title: 'After The Dance',
      date: '7/24/2023',
      excerpt:
        'Detroit-based interdisciplinary artist Scott Grooves has finalized the debut iteration of his most ambitious project to date.  Titled after Marvin Gaye\'s soulful record "After the Dance\,\”  Grooves delves into the realm beyond the dance floor\, prompting viewers to ponder what lies ahead. The exhibition will open on Friday, September 22 at 5pm to 8pm at Red Door Digital. A performance will be held at 7:30pm at the opening. All are welcome to attend. Curated by Elysia Borowy',
      uri: '/projects/after-the-dance/',
      venue: 'Red Door Digital',
      startDate: 'May 19, 2023',
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
  <div>
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
