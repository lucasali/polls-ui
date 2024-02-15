<template>
  <main class="grid h-[calc(100dvh-24px)] place-items-center p-8">
    <NuxtPage></NuxtPage>
  </main>

  <footer class="flex justify-end px-4">© 2024 - lucasali</footer>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: title => {
    return title ? `Poll • ${title}` : 'Polls'
  }
})
</script>
