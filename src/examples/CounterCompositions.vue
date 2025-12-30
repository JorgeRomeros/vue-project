<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  const count = ref(10)

  function increase() {
    count.value += 1
  }

  onMounted(() => {
    console.log('el valor inicial del contador es ' + count.value)
  })
</script>

<template>
  <h2>Composition API</h2>
  <h2>Contador {{ count }}</h2>
  <button @click="increase">Aumentar</button>
</template>
