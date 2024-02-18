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

const votedOption = ref<string | undefined>(undefined)

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
  <form @submit="handleFormSubmit" class="flex w-96 flex-col gap-4">
    <h1 class="text-balance">{{ poll.title }}</h1>

    <RadioGroupRoot v-model="votedOption" class="flex flex-col gap-2" default-value="default" aria-label="View density">
      <div v-for="(option, i) in poll.options" :key="option.id" class="flex items-center gap-2">
        <RadioGroupItem
          class="size-5 cursor-default rounded-full bg-foreground outline-none"
          :value="option.id"
          :id="option.id"
        >
          <RadioGroupIndicator
            class="relative flex h-full w-full items-center justify-center after:block after:size-3 after:rounded-[50%] after:bg-primary after:content-['']"
          />
        </RadioGroupItem>
        <label class="leading-none" :for="option.id">{{ option.title }}</label>
      </div>
    </RadioGroupRoot>

    <button
      type="submit"
      class="rounded-md bg-primary p-2 uppercase focus:outline-none focus:ring focus:ring-primary focus:ring-offset-2"
    >
      Enviar
    </button>
  </form>
</template>
