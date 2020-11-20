<template>
  <div id="app">
    <IndexLayout></IndexLayout>
  </div>
</template>

<script>
import IndexLayout from "./components/layout/IndexLayout"
export default {
  name: "App",
  components: {IndexLayout},
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 80%;
  margin: 0 auto;
}

.title{
      font-size: 20px;
    color: cadetblue;
    font-weight: 600;
}

</style>
