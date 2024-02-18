<script lang="ts" setup>
useHead({
  titleTemplate: title => {
    return title ? `Polls • ${title}` : 'Polls'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/Polls Logo - Light.svg'
    }
  ]
})

const colorMode = useColorMode()

const logo = computed(() => {
  return colorMode.value === 'dark' ? '/Polls Logo - Light.svg' : '/Polls Logo - Dark.svg'
})
</script>

<template>
  <header class="flex items-center justify-between px-8 py-2">
    <NuxtLink to="/">
      <div class="flex items-center gap-3">
        <img :src="logo" alt="Polls Logo" class="size-8" />
        <h1 class="text-2xl font-bold">Polls</h1>
      </div>
    </NuxtLink>
    <ThemeSelector></ThemeSelector>
  </header>

  <main class="container h-[calc(100dvh-24px-48px)]">
    <NuxtPage></NuxtPage>
  </main>

  <footer class="flex justify-end px-4">© 2024 - lucasali</footer>
</template>
