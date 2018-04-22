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
  name: 'app',
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

html {
  font-size: 100%;
}
</style>
