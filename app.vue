<template>
  <AppProviders v-bind="configProviderProps">
    <NGlobalStyle />
    <NuxtLayout name="default">
      {{ isDark }}
      <NuxtPage />
    </NuxtLayout>
  </AppProviders>
</template>

<script setup lang="ts">
  import { ConfigProviderProps, NGlobalStyle } from 'naive-ui'
  import AppProviders from '~~/components/functional/app-providers'
  import { useTheme } from '~~/composables/useTheme'

  useHead({ title: 'Sum Good Art: Scott Grooves Art Practice' })

  const { naiveTheme } = useTheme()
  const configProviderProps = computed<ConfigProviderProps>(() => ({
    inlineThemeDisabled: true,
    theme: naiveTheme.value
  }))
</script>
