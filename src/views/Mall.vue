<template>
    <div>
        <van-row class="search-bar">
            <van-col span="3"><van-icon class="ico-bar" name="location-o" /></van-col>
            <van-col span="16"><input type="text" class='search-input' /></van-col>
            <van-col span="5" class="search-btn"><van-button round type="default">搜索</van-button></van-col>
        </van-row>
        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index"><img></van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
import { Search } from 'vant';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Search);
Vue.use(Icon);
    export default {
        data(){
            return{
                bannerPicArray:[
                1,2,3,5
            ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.search-bar{
    background: #F2F2F2;
    .ico-bar{
        margin: 0.25rem 0 0 .3rem;
        font-size: .65rem;
    }
    .search-input{
        background: #F2F2F2;
        height: 0.7rem;
        box-sizing: border-box;
        width: 100%;
        margin-top: .15rem;
        border: 0;
        border-bottom: 1px solid skyblue;
    }
    .van-button{
        font-size: .35rem;
        margin-top: .18rem;
        margin-left: .3rem;
        height: .75rem;
        line-height: .7rem;
    }
}
.my-swipe .van-swipe-item{
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}
</style>