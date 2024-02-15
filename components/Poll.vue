<script lang="ts" setup>
interface Props {
  title: string
}

const { title } = defineProps<Props>()
</script>

<template>
  <div class="flex w-96 flex-col gap-2">
    <h2 class="text-balance">{{ title }}</h2>

    <div class="flex flex-col gap-1">
      <slot></slot>
    </div>
  </div>
</template>
