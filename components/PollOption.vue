<script lang="ts" setup>
interface Props {
  active: boolean
  index: number
}

const props = defineProps<Props>()
</script>

<template>
  <button
    class="group rounded-md border-2 py-2 pl-2 pr-6 hover:bg-white hover:text-black"
    :class="[{ 'bg-violet-400 ': active }]"
  >
    <div class="flex items-center gap-2">
      <div
        class="grid size-8 place-items-center rounded-sm border-2 group-hover:border-black group-hover:bg-white group-hover:text-black"
      >
        {{ props.index }}
      </div>

      <p class="flex-1 text-pretty">
        <slot></slot>
      </p>
    </div>
  </button>
</template>
