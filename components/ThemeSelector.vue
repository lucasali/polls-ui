<script lang="ts" setup>
const colorMode = useColorMode()
</script>

<template>
  <div>
    <select v-model="colorMode.preference" class="bg-background h-8 w-24 rounded-md border-2">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>
