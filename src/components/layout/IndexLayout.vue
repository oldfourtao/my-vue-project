<template>
<div class="flex layout">
    <Header class="h100"></Header>
    <div class="flex-1"></div>
    <Footer class="h100"></Footer>
</div>
    
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
 components: { Header,Footer },
}
</script>

<style scoped>
    .layout{
        display: flex;
        flex-direction: column;
    }
    .flex-1{
        flex: 1;
    }
    .h100{
        height: 100px;
    }
</style>