<template>
  <header class="flex justify-end p-2">
    <ThemeSelector></ThemeSelector>
  </header>

  <main class="container h-[calc(100dvh-24px-48px)]">
    <NuxtPage></NuxtPage>
  </main>

  <footer class="flex justify-end px-4">© 2024 - lucasali</footer>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: title => {
    return title ? `Polls • ${title}` : 'Polls'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/vnd.microsoft.icon',
      href: '/favicon-dark.ico'
    }
  ]
})
</script>
