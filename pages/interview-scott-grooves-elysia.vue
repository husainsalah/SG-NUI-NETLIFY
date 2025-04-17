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
        Interview with Scott Grooves by Elysia Borowy
      </NGradientText>
    </div>

    <div class="grid-flow-col auto-cols-min-2">
      <div class="w-50 rounded-lg text-xl hairline transition-all">
        <p class="hairline">
          Few artists flex like Scott Grooves. In November 2024, Elysia Borowy, Executive Director of the Rema Hort Mann
          Foundation and independent curator, conducted an email interview with Detroit-based artist and musician Scott
          Grooves to discuss his multifaceted practice.
        </p>
        <p class="pt-8 hairline">
          <i>Tell us about your relationship to art as you were growing up.</i>
        </p>
        <p class="pt-8 hairline">
          SG: Art has always been a central part of my life, and my earliest memory of it goes way back to my very first
          day of school. I definitely remember spending much of the day drawing, and while I don’t have anything from
          that exact day, I still have one of my earliest pieces of art, a drawing of a horse. It’s stayed with me over
          the years and it's a reminder of how much I loved creating, even as a kid.
        </p>
        <p>
          As I got older, my relationship with art took on different forms. I started recreating drawings of some of my
          favorite album covers as a teen, getting caught up in the details and how the visuals connected with the
          music. I also went through a phase where I was fascinated with drawing cars. Something about their design—the
          lines, the curves, the sense of speed—really captured my attention for a while.
        </p>
        <p>
          It’s hard to say for sure if these early memories of drawing laid the foundation for my creative journey,
          because I was such an active kid, always into so many different things. But I do think that those experiences
          helped me see the world differently and influenced how I approach both art and music today. Whether it’s
          through visual art or producing music, I’ve always had that same sense of curiosity and drive to create
          something meaningful.
        </p>

        <div class="h-screen flex items-center justify-center">
          <NImage
            src="/images/sketches/Bad Hair Day.webp"
            class="exhibit-img pb-8"
            width="580px"
          ></NImage>
        </div>

        <p class="pt-8 hairline">
          <i>Tell us about an important moment in your career.</i>
        </p>
        <p class="pt-8 hairline">
          SG: A defining moment in my career came in 1999 when I started designing graphic tees 'designed with the DJ in
          mind.' Having grown up moving between visual art and music, I found myself in a unique position to bridge
          these two worlds. The project merged my love for creating visual art with my understanding of DJ culture,
          bringing together those countless hours I'd spent recreating album covers as a teenager with my actual
          experience in the music scene.
        </p>
        <p>It really helped me understand that when my passions collide with experiences..look out!</p>
        <p class="pt-8 hairline">
          <i>Tell us about an important moment in your sleep.</i>
        </p>
        <p class="pt-8 hairline">
          SG: One of the most significant moments in my sleep life comes in the form of recurring dreams where I'm
          reunited with people who've been instrumental in my creative journey. In these dreams, I finally get the
          chance to tell them how their influence helped shape me and that I finally understand that being well fed is
          not necessarily well nourished.
        </p>
        <p class="pt-8 hairline">
          <i> Tell us about your first experiences with art.</i>
        </p>
        <p class="pt-8 hairline">
          SG: I remember the simple joy of drawing on the sidewalk with chalk, making drawings that were later washed
          away by the rain. But my most distinct early memory is from my first day of school, where I drew a bird. That
          moment somehow stayed crystal clear in my mind. Watching my father work became one of my earliest and most
          profound connections to art. He was an artist, and I remember being drawn to his pastel chalks, convinced that
          simply using his tools would somehow transfer his talent to me. Just like I thought just when I first tried to
          beatmatch records that they simply synced together on their own. To this day I still have a portrait of me
          that my father did.
        </p>

        <div class="h-screen flex items-center justify-center">
          <NImage
            src="/images/sketches/Guggenhiem.webp"
            class="exhibit-img pb-8"
            width="580px"
          ></NImage>
        </div>

        <p class="pt-8 hairline">
          <i
            >Was there a specific moment when you realized you wanted to focus on working on expressing yourself
            visually? As an artist?
          </i>
        </p>
        <p class="pt-8 hairline">
          SG: My journey toward visual expression wasn’t just about a single moment; it was shaped by years of doing
          things independently in music and realizing the strength in a measure of self-reliance. Releasing music on my
          own taught me to move forward without waiting for anyone else’s validation, and that same spirit naturally
          flowed into my visual art. I wanted the freedom to shape and share my vision across different planets.
        </p>
        <p>
          Honestly, there are times I’ve felt like I needed to grow an extra arm, like an octopus, to handle everything
          in my creative life! That image perfectly captures what it’s like to wear many hats as an independent artist.
          But that challenge balancing music, art, and all the behind-the-scenes stuff has also given me more
          flexibility and confidence. Each new “arm,” whether it’s creating music or making visual art, lets me express
          another part of who I am, while helping me navigate my creative life in a way that’s entirely my own.
        </p>

        <p class="pt-8 hairline">
          <i> Explain your process? Can you explain SumGoodArt? </i>
        </p>
        <p class="pt-8 hairline">
          SG: My process shifts depending on where I’m drawing from, whether it's experience or curiosity. Sometimes I
          approach art the way I do music layering each idea like a tapestry. In music, I build a track by layering
          instruments and textures until it forms a complete world. With visual art, I often do the same.
        </p>
        <p>
          Other times, my process comes from a place of not knowing from a lack of experience rather than a wealth of
          it. When I’m in that space, it’s more like an experiment, allowing each step to surprise me and reveal
          something unexpected. Whether I’m working from a deep-rooted idea or pure curiosity, my process is about
          giving each layer room to evolve, while keeping an openness to where the piece wants to go. It’s as much about
          discovery as it is about creation, which keeps it alive and fresh for me every time. Whichever way I roll out
          my art, being intentional is always at the root.
        </p>
        <p>
          The moniker Sumgoodart draws inspiration from the philosophy that creative energy should always carry purpose.
          The name reflects a commitment to intentional artistry.. if something is worth creating, it's worth infusing
          with meaning. Each piece is approached with deliberate thought and authentic expression, ensuring there's
          always 'sum good' behind the work."
        </p>
        <div class="h-screen flex items-center justify-center">
          <NImage
            src="/images/bags/bags-2.jpg"
            class="exhibit-img pb-8"
            width="580px"
          ></NImage>
        </div>

        <p class="pt-8 hairline">
          <i>What are your 3AM thoughts about? </i>
        </p>
        <p class="pt-8 hairline">
          SG: So here's the deal,during lockdown I started checking out all these artist websites and noticed everyone
          had these formal artist statements. I knew right away that wasn't gonna be my thing. My brain doesn't work
          like that, my thoughts about art and why I create are always bouncing around. But then I noticed something, in
          the middle of the night, these little truth bombs about my work would just pop into my head. Instead of
          forcing some fancy statement, I started jotting down these random bits of clarity and called them '3AM
          Thoughts.' It's just real, unfiltered pieces of why I do what I do, coming through when everything else is
          quiet.
        </p>

        <p class="pt-8 hairline">
          <i
            >Can you give us a sneak peek of a work that will be in your next show, one that puts the present in the
            past and the past in the present?</i
          >
        </p>
        <p class="pt-8 hairline">
          SG: I've got this piece I'm working on that was sparked by the Olympics which if I'm being honest , I've been
          fascinated with since I was a kid. Like, think about it - this event's been going on since ancient times, yet
          it's still hitting us with these super relevant moments today. What really got me going was this wild
          situation at the Olympics where this breakdancer scored all zeros. I'm sure there was some controversy similar
          way back in ancient Greece. Some things about the human condition never really change, I hope to present this
          visually at some point in one of my art/music pop ups.
        </p>

        <p class="pt-8 hairline">
          <i
            >Can you point to any elements in your own practice—actual work or your approach—that can be traced directly
            or indirectly to Detroit as a place, a community ? Let's call this the Detroit Effect; has the City simply
            inspired you to look deeper ... .to believe harder in the power of art to inspire change, change in what
            kinds of ways?
          </i>
        </p>
        <p class="pt-8 hairline">
          SG: Detroit has been more of a proving ground and a source of influence to a degree. Just like the automobile
          factories here used proving grounds to test their designs, Detroit was a place where I could road test a lot
          of my own ideas. It's a real, unfiltered environment where the "training wheels" come off early, pushing you
          to develop resilience and navigate challenges independently. But my main influence has always been my family,
          who provided the grounding and freedom that allowed me to explore creatively. When it comes to art inspiring
          change, I see it with some caution. Art can definitely have an impact, but that impact isn't always a
          straightforward or universally positive one. Sometimes it's disruptive or even unsettling. So, while I believe
          in art's power, I'm mindful of the ways that power can play out.
        </p>
        <p class="pt-8 hairline">
          <i>Do you have a favorite Prince song? If so, which is it? Do you have a favorite artist, if so who?</i>
        </p>
        <p class="pt-8 hairline">
          SG: I don't have a favorite Prince song, he has done so much stellar work. And I seriously could not have a
          single favorite artist. Sometimes I need to hear the introspective depth of Nina Simone, Stevie, Donnie
          Hathaway, Sade, Pat Metheny, Ryuichi Sakamoto. Like my own versatility, I like so many different types of
          music. Art is too multifaceted to reduce to a single "favorite.
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
    text-align: center;
    object-fit: flex-grow;
  }
</style>
