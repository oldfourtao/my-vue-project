<template>
<div>
    <h1 v-if="showTitleFlag">{{name}}</h1>
    <ul>
        <li v-for="item in arrInfo">{{item}}</li>
    </ul>
    <el-button type="primary" @click="save">提交</el-button>


</div>
    
</template>

<script>

import eventBus from '../../utils/eventBus'
export default {
    name: 'Demo',
    props:{
        showTitleFlag: {
            type: Boolean
        },
        arrInfo: {
            type: Array
        },
        name: {
            type: String
        }
    },
     mounted(){
        eventBus.$on('demo2',data=>{
            console.log("我是demo2传递的值",data)
        })
    },
    methods: {
        save: function(){
           //this.$emit("titleChange","我是demo")
           eventBus.$emit('demo','demo')
        }
    }
}
</script>

<style scoped>

</style>