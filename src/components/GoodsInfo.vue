<template>
    <div class="goods-item">
        <img :src="goodsImage">
        <div>{{goodsName}}</div>
        <div>￥{{goodsPrice|toMoney}}</div>
    </div>
</template>

<script>
    import {toMoney} from "../filter/moneyFilter";

    export default {
        name: "GoodsInfo",
        props:['goodsImage','goodsName','goodsPrice'],
        filters:{
            toMoney
        }
    }
</script>

<style lang="scss" scoped>
.goods-item{
    background-color: #fff;
    text-align: center;
    height: 6.5rem;
    img{
        width: 90%;
        height: 4.5rem;
    }
    div{
        font-size: .4rem;
        margin: 0 0.2rem;
    }
}
</style>
