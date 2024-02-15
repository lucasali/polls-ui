<script setup lang="ts">
interface PollOption {
  id: string
  title: string
  votes: number
}

interface Poll {
  id: string
  title: string
  options: PollOption[]
}

const selectedPollOption = ref<string | null>(null)
const { id } = useRoute().params
const { data } = await useFetch(`http://localhost:3333/polls/${id}`)

const poll = (data.value as { poll: Poll }).poll

useHead({
  title: poll.title
})

onKeyStroke(
  ['1', '2', '3', '4'],
  e => {
    e.preventDefault()
    pressKey(e.key)
  },
  { dedupe: true }
)

function pressKey(key: string) {
  const index = Number(key) - 1
  if (index < poll.options.length) {
    selectedPollOption.value = poll.options[index].id
  }
}
</script>

<template>
  <Poll :title="poll.title">
    <template v-for="(option, i) in poll.options" :key="option.id">
      <PollOption :active="selectedPollOption === option.id" :index="i + 1">{{ option.title }}</PollOption>
    </template>
  </Poll>
</template>
