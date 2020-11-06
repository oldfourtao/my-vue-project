<template>
<div class="flex layout h-100">
    <Header class="h800"></Header>
    <div class="flex-1 flex">
        <div class="w200">
            <Slider></Slider>
        </div>
        <div class="flex-1">
        <router-view></router-view>
        </div>

        
    </div>
    <Footer class="h100 lh100"></Footer>
    
</div>
    
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import Slider from './Slider'
export default {
 components: { Header,Footer,Slider },
}
</script>

<style scoped>
    .layout{
        display: flex;
        flex-direction: column;
    }

    .flex {
        display: flex;
    }
    .flex-1{
        flex: 1;
    }
    .h100{
        height: 100px;
    }
    .h-100{
        height: 100%;
    }

    .lh100{
        line-height: 100px;
    }

    .w300{
        width: 300px;
    };

    .w200{
        width: 200px;
    }
</style>