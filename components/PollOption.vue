<script lang="ts" setup>
interface PollOption {
  id: string
  title: string
  votes: number
}

interface Props {
  option: PollOption
  index: number
}

const { option, index } = defineProps<Props>()
</script>

<template>
  <button
    type="button"
    class="group rounded-md border-2 py-2 pl-2 pr-6 hover:border-primary focus:outline-none focus:ring focus:ring-primary"
    @click="$emit('vote', option.id)"
  >
    <div class="flex items-center gap-2">
      <div
        class="grid size-8 place-items-center rounded-sm border-2 group-hover:border-primary group-hover:text-primary"
      >
        {{ index + 1 }}
      </div>

      <p class="flex-1 text-pretty text-left group-hover:text-primary">
        <slot></slot>
      </p>
    </div>
  </button>
</template>
