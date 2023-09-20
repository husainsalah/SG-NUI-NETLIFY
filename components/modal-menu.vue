<script setup lang="ts">
  import { NGradientText, NModal, NCard, NDrawer, NDrawerContent } from 'naive-ui'
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
      :placement="left"
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
    <!--
    <NModal
      v-model:show="showModal"
      style="z-index: 20; width: 92%; background-color: rgb(255 255 255 / 100%)"
      class="pt-10"
    >
      <NCard
        style="position: absolute; top: 0; bottom: 0; z-index: 20; width: 100%; height: 100%"
        preset="modal"
        :bordered="true"
        :mask-closable="false"
        size="small"
        role="dialog"
        aria-modal="true"
      >
        <div class="w-90 text-right -pt-40 pr-8">
          <button
            class="bg-white text-white hover:scale-110 hover:text-white hover:bg-opacity-80"
            aria-label="Close Menu"
            @click="showModal = false"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="z-50 w-12 h-12 align-top"
            >
              <line
                x1="4"
                y1="20"
                x2="20"
                y2="4"
                stroke="black"
                stroke-width="2"
              />
              <line
                x1="4"
                y1="4"
                x2="20"
                y2="20"
                stroke="black"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>

        <span class="menu-item">
          <a href="/">
            <NGradientText
              class="hover:text-white"
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
              class="hover:text-white"
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
              class="hover:text-white"
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
              class="hover:text-white"
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
              class="hover:text-white"
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
      </NCard>
    </NModal>
    -->
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
