<template>
    <!-- 商品楼层 -->
    <div class="goods-body">
        <div class="goods-title">--{{floorName}}--</div>
        <div class="goods-floor">
            <img class="goods-first" v-lazy="floor1.image">
            <div class="goods-floor-right">
                <img v-lazy="floor2.image">
                <img v-lazy="floor3.image">
            </div>
        </div>
        <img v-lazy="floor4.image" width="50%">
        <img v-lazy="floor5.image" width="50%">
    </div>
</template>

<script>
    export default {
        name: "Floor",
        data(){
            return{
                floorName:'',
                floor1:[],
                floor2:[],
                floor3:[],
                floor4:[],
                floor5:[],
            }
        },
        props:['floorData'],
        watch:{
            floorData:function () {
                this.floorName = this.floorData.name;
                this.floor1 = this.floorData[0];
                this.floor2 = this.floorData[1];
                this.floor3 = this.floorData[2];
                this.floor4 = this.floorData[3];
                this.floor5 = this.floorData[4];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .goods-body {
        border-radius: 0.2rem;
        box-sizing: border-box;
        box-shadow: 0 0 0.1rem #BEBEBE;
        background-color: #fff;
        .goods-title{
            font-size: 0.45rem;
            text-align: center;
            margin: 0.2rem 0;
        }
        .goods-floor {
            display: flex;

            .goods-first {
                width: 50%;
                height: 5.6rem;
                box-sizing: border-box;
                border-right: 1px solid aquamarine;
            }

            .goods-floor-right {
                width: 50%;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;

                img {
                    height: 2.8rem;
                }
            }
        }
    }
</style>
