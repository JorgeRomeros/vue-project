<script lang="ts">
  export default {
    data() {
      return {
        count: 10
      }
    },
    methods:{
      increase(){
        this.count +=1
      }
    },
    mounted(){
      console.log('el valor inical del contador es ' + this.count)
    }
}
</script>

<template>
  <h1>Hello Vue!</h1>
  <h2>Contador {{ count }}</h2>
  <button @click="increase">Aumentar</button>
</template>

<style scoped></style>
