<script setup lang="ts">
  import { NDivider, NGradientText, NImage } from 'naive-ui'
</script>
<template>
  <div>
    <div class="grid-flow-col auto-cols-min">
      <NGradientText
        :gradient="{
          from: 'rgb(0, 0, 0)',
          to: 'rgb(170, 170, 170)'
        }"
        :size="52"
      >
        After The Dance
      </NGradientText>
    </div>

    <div class="grid-flow-col auto-cols-min-2">
      <div class="w-50 rounded-lg text-2xl font-thin transition-all">
        <h2 class="font-bold text-2xl">A site-specific installation by Scott Grooves</h2>
        <h2>A solo exhibition exploring the rich overlap of art and music</h2>

        <NDivider></NDivider>
        <p>Red Door Digital : On view September 22 through September 30, 20-23</p>
        <NDivider></NDivider>
        <div class="h-screen flex items-center justify-center">
          <NImage
            src="/images/FreeJazz.png"
            class="exhibit-img pb-8"
          >
          </NImage>
        </div>
        <p class="hairline">
          Detroit-based interdisciplinary artist Scott Grooves has finalized the debut iteration of his most ambitious
          project to date. Titled after Marvin Gaye's soulful record "After the Dance,” Grooves delves into the realm
          beyond the dance floor, prompting viewers to ponder what lies ahead. The exhibition will open on Friday,
          September 22 at 5pm to 8pm at Red Door Digital. A performance will be held at 7:30pm at the opening. All are
          welcome to attend.
        </p>
        <p class="pt-8 hairline">
          After the Dance, curated by Elysia Borowy, features six installations that delve into experimental
          expressionism in the realms of both visual arts and electronic music. Grooves' installations serve as a
          profound personal response to the pervasive capitalist-driven culture while also drawing inspiration from
          afrofuturism. Through these thought-provoking explorations, the artist reflects on the impact of consumerism
          and creates a captivating visual dialogue that engages viewers with societal and futuristic themes.
        </p>
        <p class="pt-8 hairline">
          Scott Grooves unveils a series of six installation works: Sweet Dreams.. Anakin, Foot Work, Vinyl, For All-Dee
          People, Yellow Sun Bricks, and Found Sound. Through these thought-provoking artworks, Grooves’ challenges the
          viewer to reflect on the essence of humanity in our modern society, breaking free from the confines of the
          two-dimensional plane and bridging the gap between observer and artwork. Asking the questions, “What does it
          really mean to engage with your audience? What are the implications of that?”
        </p>
        <p class="pt-8 hairline">
          In Sweet Dreams Anakin, Grooves crafts a visual representation of “Star Wars'” Anakin's bed, delving into the
          complexities of Darth Vader's character while exploring the roots of evil. Foot Work becomes an interactive
          experience, as visitors are invited to step onto the dance floor and leave their mark in paint, becoming
          co-creators of the artwork. Found Sound explores Grooves experimentation with materials used by musicians and
          recontextualizes sound insulation, creating sculptural paintings that comment on sound's functionality and its
          spatial movement.
        </p>
        <p class="pt-8 hairline">
          Yellow Sun Bricks is a site specific installation that responds to the exhibition space, Grooves presents
          site-specific paintings, echoing the surrounding brick pattern, challenging space as a given by highlighting
          its constructed quality and inherent malleability.
        </p>
        <p class="pt-8 hairline">
          For All-Dee People, is a series of painted Aldi shopping bags furthering Grooves’ exploration of capitalism
          and presents a reinterpretation and a reappraisal of a changing value. Grooves paints the many faces he
          encounters on the shopping bags echoing the history of the ceramic face jug, a pottery type created by the
          Black enslaved community in the Edgefield district of South Carolina.
        </p>
        <p class="pt-8 hairline">
          In the artwork Vinyl, the artist deconstructs the anatomy of a vinyl record, delving into its essence and
          significance. Using aging materials, ready-mades, and other found forms, the artist employs techniques of
          appropriation, assemblage, craft, and industrial production to analyze the finite character of his personal
          history as a musician.
        </p>
        <p class="pt-8 hairline">
          The six installations acquire an enhanced sense of expanded objecthood, skillfully blurring the boundaries
          between various mediums. They allude to elements that go beyond their physical existence, prompting viewers to
          contemplate their multifaceted nature—suggesting to the viewer that the installations are arrangements of
          gestures and actions that must be activated by the viewer and no artwork is complete without the viewer.
          Viewers transform into active participants, where each interaction with a work of art becomes a unique state
          of existence— utilizing sound and physical objects, it serves as a reminder of the situational nature of one's
          own identity.
        </p>
        <p class="pt-8 hairline">
          Each of these new works dismantles the traditional categorization that confines them to singular subjects such
          as electronic music or sculpture, inviting new interpretations and metaphors that may be challenging to
          pinpoint but allow for a rich tapestry of layered histories, geographies, and circumstances to emerge.
          Grooves' exhibition invites us to contemplate a dynamic terrain of shifting perspectives, provoking deep
          contemplation. Through his artwork, Grooves transformed familiar objects into liberated artistic statements,
          effectively striking a balance between familiarity and dissonance. —-Elysia Borowy, Curator
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
