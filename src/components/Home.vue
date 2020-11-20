<template>
  <div>
    <p class="red">home vue</p>
    <i class="iconfont icon-call">{{ msg }}</i>
    <span>姓名：{{ name }}</span>
    <el-button type="primary" @click="listreStroe">监听stroe</el-button>
    <demo
      v-bind:name="name"
      v-bind:showTitleFlag="showTitleFlag"
      v-bind:arrInfo="arrInfo"
      v-on:titleChange="save($event)"
    ></demo>
    <demo-2></demo-2>
  </div>
</template>

<script>
import Demo from "./example/Demo"
import Demo2Vue from "./example/Demo2.vue"
import eventBus from '../utils/eventBus'

export default {
  name: "Home",
  components: { demo: Demo, demo2: Demo2Vue },
  created() {
    console.log("创建")
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      name: "zhangsan",
      showTitleFlag: true,
      arrInfo: ["zhangsan", "lisi", "wanger"],
    };
  },

  mounted() {
    eventBus.$on("demo", (data) => {
      console.log(data);
    });
     eventBus.$on("demo2", (data) => {
      console.log(data);
    });
  },

  methods: {
    save: function (e) {
      console.log("子组件像父组件传值", e);
    },
    listreStroe: function(){
      console.log(this.$store)
      console.log("stroe值",this.$store.getters.getCount);
      this.$store.dispatch('countActions',50);
      console.log("stroe值",this.$store.getters.getCount);
    }
  },

  watch: {
    $rotue(to,from){
      console.log("监听路由变化")
      console.log(to,from);
    }
  }
};
</script>

<style >
</style>