<template>
  <NLayout
    class="root-layout"
    position="absolute"
  >
    <div class="header-container">
      <TheHeader />
    </div>
    <NLayoutContent>
      <div class="container p-y">
        <slot name="default" />
      </div>
    </NLayoutContent>
    <div class="footer-container">
      <TheFooter />
    </div>
  </NLayout>
</template>

<script setup lang="ts">
  import { NLayout, NLayoutContent } from 'naive-ui'
</script>

<style lang="scss" scoped>
  .p-y {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .root-layout {
    > :deep(.n-layout-scroll-container) {
      display: flex;
      flex-direction: column;

      @include overflow(hidden, auto);
    }

    .n-layout-content {
      flex: 1 1 auto;
      max-width: 100% !important;
    }
  }
</style>
