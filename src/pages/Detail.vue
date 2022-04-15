<template>
  <div>
      <p>Hello Ini detail page</p>
      <p>detail dari movie dengan id - {{ id }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const { id } = route.params



</script>

<style>

</style>