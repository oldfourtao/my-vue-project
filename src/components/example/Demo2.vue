<template>
    <div>
        <el-button type="primary" @click="demo2">demo2</el-button>
    </div>    
</template>
<script>
import eventBus from '../../utils/eventBus'

export default {
    name: 'Demo2',
    data(){
        return {
            name: 'demo2'
        }
    },
    mounted(){
        eventBus.$on('demo',data=>{
            console.log("我是demo传递的值",data)
        })
    },
    methods: {
        demo2: function(){
            eventBus.$emit('demo2','demo2')
        }
    }
    
}
</script>

<style scoped>

</style>