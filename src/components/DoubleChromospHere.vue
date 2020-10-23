<template>
  <div class="double-chromosp-container">
    <div class="start-btn" v-on:click="startgame">
        <span>开奖</span>
    </div>
    <!-- <div>
      <p>红球:{{redBall}}</p>
      <p>蓝球:{{blueBall}}</p>
      <p>中奖红球:{{issueRedBall}}</p>
      <p>中奖篮球:{{issuBluBall}}</p>
    </div> -->

    <div class="draw-area">
        <div class="red-ball">
            <span class="w300">本期红球:</span>
            <div class="flex-1 ball-number">
                <span v-for="item in issueRedBall">{{item}}</span>
            </div>
        </div>
        <div  class="red-ball">
          <span class="w300">本期蓝球:</span>
            <div class="flex-1 ball-number">
              <span  v-for="item in issuBluBall">{{item}}</span>
            </div>
         </div>
      </div>

  </div>
</template>

<script>
export default {
  name: "DoubleChromospHere",
  data() {
    return {
      redBall: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],
      blueBall:  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
      issueRedBall: [],//本期红球中奖号码
      issuBluBall: []//本期蓝球
    };
  },

  methods: {
    startgame: function(){
      this.issuBluBall = [];//重置
      this.issueRedBall = [];//重置
      let copyBallRed =this.cloneDeep1(this.redBall);
      console.log(copyBallRed);
      let copyBallBlue =this.cloneDeep1(this.blueBall);
      console.log(copyBallBlue);
      var startInval = setInterval(()=>{
        let curRedIndex = parseInt(Math.random()*copyBallRed.length+0);//随机红球长度生成整形数
        console.log(curRedIndex);
        if(this.issueRedBall.length < 6){
          this.issueRedBall.push(copyBallRed[curRedIndex]);
          copyBallRed.splice(curRedIndex,1);
        }else{
          let curBlueIndex = parseInt(Math.random()*copyBallBlue.length+0);//随机红球长度生成整形数
          this.issuBluBall.push(copyBallBlue[curBlueIndex]);
          clearInterval(startInval);//档选出篮球后清除定时器
        }
        this.issueRedBall.sort();
      },1000);
    },

  

    cloneDeep1: function (data) {  
         var obj={};  
         obj=JSON.parse(JSON.stringify(data)); //this.templateData是父组件传递的对象  
         return obj  
    }  
  },

};
</script>

<style>
.double-chromosp-container {
  margin-top: 30px;
}
.start-btn {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: #5f9eff;
  color: #fff;
  font-size: 18px;
  line-height: 50px;
  cursor: pointer;
  margin: 0 auto;
}

.draw-area {
  margin-top: 20px;
}

.w300 {
  width: 300px;
}

.draw-area {
  font-size: 18px;
  color: #000;
  font-weight: 600;
}

.draw-area >div {
  display: flex;
  height: 35px;
  line-height: 35px;
  flex-direction: row;
}

.flex-1 {
  flex: 1;
}

.draw-area .red-ball >span:first-child {
  text-align: right;
}

.ball-number span{
  text-align: center;
  margin-right: 15px;
}

.draw-area div div {
  text-align: left;
  padding-left: 15px;
}

.draw-area div div span{
    width: 20px;
    height: 20px;
    border-radius: 20px;
    display: inline-block;
    font-size: 16px;
    color: #fff;
    line-height: 20px;
}

.draw-area div:first-child div span{
    background: red;
}

.draw-area div:last-child div span{
    background: blue;
}
</style>
