<template>
  <b-container fluid>
    <header-component></header-component>
    <container-component></container-component>
  </b-container>
</template>

<script>
import HeaderComponent from './components/header'
import ContainerComponent from './components/container'
export default {
  name: "app",
  data() {
    return {
      word: "Hello, world",
      words: []
    }
  },
  mounted() {
    for (let index = 0; index < 200; index++) {
      this.words.push(this.word)
    }
  },
  components: {
    'header-component': HeaderComponent,
    'container-component': ContainerComponent
  }
}
</script>

<style scoped>
* {
  padding-left: 0;
  padding-right: 0;
}
</style>