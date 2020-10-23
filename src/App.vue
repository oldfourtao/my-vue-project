<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="title">双色球随机买</div>
    <DoubleChromospHere></DoubleChromospHere>
    <router-view />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import DoubleChromospHere from "./components/DoubleChromospHere";
export default {
  name: "App",
  components: { HelloWorld, DoubleChromospHere },
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
}

.title{
      font-size: 20px;
    color: cadetblue;
    font-weight: 600;
}

</style>
