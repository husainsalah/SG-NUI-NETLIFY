<script setup lang="ts">
  import { NGradientText, NDrawer, NDrawerContent } from 'naive-ui'
  const showModal = ref(false)
</script>

<template>
  <div class="flex z-50 float-right pr-8 mx-auto grid grid-flow-col">
    <div class="fixed">
      <div v-if="!showModal">
        <button
          class="hover:scale-110 hover:text-white hover:bg-opacity-80"
          aria-label="Open Menu"
          @click="showModal = true"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-12 h-12 align-top"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="black"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <NDrawer
      v-model:show="showModal"
      :width="380"
    >
      <NDrawerContent closable>
        <span class="menu-item">
          <a href="/">
            <NGradientText
              :gradient="{
                from: 'rgb(0, 0, 0)',
                to: 'rgb(127, 127, 127)',
                deg: '270'
              }"
              :size="48"
              :deg="0"
            >
              Home
            </NGradientText>
          </a>
        </span>
        <span class="menu-item">
          <a href="/about">
            <NGradientText
              :gradient="{
                from: 'rgb(0, 0, 0)',
                to: 'rgb(127, 127, 127)',
                deg: '270'
              }"
              :size="48"
              :deg="90"
            >
              About
            </NGradientText>
          </a>
        </span>

        <span class="menu-item">
          <a href="/exhibitions">
            <NGradientText
              :gradient="{
                from: 'rgb(0, 0, 0)',
                to: 'rgb(127, 127, 127)',
                deg: '270'
              }"
              :size="48"
              :deg="270"
            >
              Exhibitions
            </NGradientText>
          </a>
        </span>

        <span class="menu-item"
          ><a href="/art">
            <NGradientText
              :gradient="{
                from: 'rgb(0, 0, 0)',
                to: 'rgb(127, 127, 127)',
                deg: '270'
              }"
              :size="48"
              :deg="180"
            >
              Press & Media
            </NGradientText>
          </a></span
        >
        <span class="menu-item"
          ><a href="/contact">
            <NGradientText
              :gradient="{
                from: 'rgb(0, 0, 0)',
                to: 'rgb(127, 127, 127)',
                deg: '270'
              }"
              :size="48"
              :deg="90"
            >
              Contact
            </NGradientText>
          </a></span
        >
      </NDrawerContent>
    </NDrawer>
  </div>
</template>
<style scoped>
  .menu-item {
    @apply flex text-black p-4 font-thin text-6xl text-center hover:scale-100 hover:text-black hover:-translate-y-1;
  }

  .menu-item a {
    @apply text-6xl w-full text-center;
  }

  .n-drawer .n-drawer-content .n-drawer-header {
    border-bottom: none;
  }
</style>
