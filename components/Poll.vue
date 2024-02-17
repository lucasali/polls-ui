<script lang="ts" setup>
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

interface Props {
  poll: Poll
}

const { poll } = defineProps<Props>()

const votedOption = ref<string | null>(null)

function handleFormSubmit(e: Event) {
  e.preventDefault()

  $fetch(`http://localhost:3333/polls/${poll.id}/votes`, {
    method: 'POST',
    body: { pollOptionId: votedOption.value }
  })
}

function handleVote(optionId: string) {
  votedOption.value = optionId
}
</script>

<template>
  <form @submit="handleFormSubmit">
    <div class="flex w-96 flex-col gap-4">
      <h2 class="text-balance">{{ poll.title }}</h2>

      <div class="flex flex-col gap-2">
        <template v-for="(option, i) in poll.options" :key="option.id">
          <PollOption :option="option" :index="i" @vote="handleVote">{{ option.title }}</PollOption>
        </template>
      </div>

      <button
        type="submit"
        class="rounded-md bg-primary p-4 uppercase text-white focus:outline-none focus:ring focus:ring-primary"
      >
        Enviar
      </button>
    </div>
  </form>
</template>
