<script lang="ts" setup></script>

<template>
  <Poll title="test">
    <PollOption v-for="i in 4" :index="i">test</PollOption>
  </Poll>
</template>
