<script lang="ts">
  import { NLayout, NLayoutContent } from 'naive-ui'
  import { useRoute } from 'vue-router'
  export default defineComponent({
    computed: {
      currentRouteNameIsNotVideo() {
        let location = useRoute()
        if (location.path == '/') return false
        else return true
      }
    },
    beforeCreate() {
      this.showHideSpinner = true
    },
    mounted() {
      this.showHideSpinner = false
    },
    data() {
      return {
        showHideSpinner: true
      }
    },
    components: {
      NLayout,
      NLayoutContent
    }
  })
</script>
<template>
  <div>
    <LoadingSpinner v-if="showHideSpinner" />
    <NLayout
      class="root-layout"
      position="absolute"
    >
      <div class="header-container">
        <TheHeader />
      </div>
      <NLayoutContent>
        <div class="p-8 p-y">
          <slot name="default" />
        </div>
      </NLayoutContent>
      <div class="footer-container">
        <TheFooter />
      </div>
    </NLayout>
  </div>
</template>
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
    }
  }
</style>
