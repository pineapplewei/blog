<template>
  <div id="app">
    <router-view name="header"/>
    <router-view name="main"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  margin: 0px;
  padding: 0px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100%;
  background-color: black;
}
</style>
