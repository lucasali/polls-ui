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

const { id } = useRoute().params
const { data } = await useFetch(`http://localhost:3333/polls/${id}`)

const { poll } = data.value as { poll: Poll }

useHead({
  title: poll.title
})
</script>

<template>
  <section class="grid h-full place-items-center">
    <Poll :poll="poll" />
  </section>
</template>
