<template>
  <AppProviders v-bind="configProviderProps">
    <NGlobalStyle />

    <NuxtLayout name="default">
      {{ isDark }}
      <NuxtPage />
    </NuxtLayout>

    <NuxtPage />
  </AppProviders>
</template>

<script setup lang="ts">
  import { ConfigProviderProps, NGlobalStyle } from 'naive-ui'
  import AppProviders from '~~/components/functional/app-providers'
  import { useTheme } from '~~/composables/useTheme'

  useHead({ title: 'Scott Grroves Art' })

  const { naiveTheme } = useTheme()
  const configProviderProps = computed<ConfigProviderProps>(() => ({
    inlineThemeDisabled: true,
    theme: naiveTheme.value
  }))
</script>
