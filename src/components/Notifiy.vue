<template>
    <div>
        <el-button plain @click="open"></el-button>
    </div>
</template>
<script>
export default {
    methods: {
        open: function(){
            this.$notify.success({
                title: '消息',
                message: '提示框',
                showClose: true
            })
        }
    }
}
</script>