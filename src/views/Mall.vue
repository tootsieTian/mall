<template>
    <div id="mall">
        <!-- 查找头 -->
        <van-row class="search-bar">
            <van-col span="3">
                <van-icon class="ico-bar" name="location-o"/>
            </van-col>
            <van-col span="16"><input type="text" class='search-input'/></van-col>
            <van-col span="5" class="search-btn">
                <van-button round type="default">搜索</van-button>
            </van-col>
        </van-row>
        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(img,index) in swipe_imageList" :key="index"><img class="swipe-img" v-lazy="img">
            </van-swipe-item>
        </van-swipe>
        <!-- 分类 -->
        <div class="type-bar">
            <div class="type-bar-item" v-for="(cate,index) in category" :key="index">
                <img class="type-bar-img" v-lazy="cate.image">
                <span>{{ cate.mallCategoryName }}</span>
            </div>
        </div>
        <img class="ab-bar" v-lazy="adBanner" width="100%">

        <!-- 商品推荐 -->
        <div class="recommend-area">
            <div class="recommend-title">--商品推荐--</div>
            <div class="recommend-body">
                <!--                设置swiper属性-->
                <swiper :options="swiperOptions">
                    <swiper-slide v-for="(re,index) in recommend" :key="index">
                        <img :src="re.image">
                        <span>{{re.goodsName}}</span>
                        <br>
                        <span>￥{{re.price|toMoney}} ￥{{re.mallPrice|toMoney}}</span>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
        </div>
        <Floor :floor-data="floor1"></Floor>
        <Floor :floor-data="floor2"></Floor>
        <Floor :floor-data="floor3"></Floor>
        <!--        热卖模块-->
        <div class="hot-area">
            <div class="hot-title">--<van-icon name="fire-o" />热卖商品--</div>
            <div class="hot-goods">
                <van-row>
                    <van-col span="12" v-for="(item,index) in hotGoods" :key="index">
                        <GoodsInfo :goods-image="item.image" :goods-name="item.name" :goods-price="item.price"></GoodsInfo>
                    </van-col>
                </van-row>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Floor from "../components/Floor";
    import {toMoney} from '../filter/moneyFilter';
    import GoodsInfo from "../components/GoodsInfo";
    //vant组件
    import {
        Swipe,
        SwipeItem,
        Lazyload,
        Grid,
        GridItem,
        Icon,
        Search
    } from 'vant';

    Vue.use(Lazyload, {lazyComponent: true,}).use(Swipe).use(SwipeItem).use(GridItem).use(Grid).use(Icon).use(Search);
    //swiper组件
    import {swiper, swiperSlide, directive} from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'


    export default {
        components: {
            Floor,
            GoodsInfo,
            swiper,
            swiperSlide,
        },
        data() {
            return {
                swiperOptions: {
                    slidesPerView: 3,
                    loop: true,
                },
                swipe_imageList: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                ],
                category: [],
                adBanner: '',
                recommend: [],
                floor1: {},
                floor2: {},
                floor3: {},
                hotGoods:[]
            }
        },
        directives: {
            swiper: directive
        },
        created() {
            this.$axios.get('/api/index').then((res) => {
                if (res.status === 200) {
                    let data = res.data.data;
                    console.log(data)
                    this.category = data.category;
                    this.adBanner = data.advertesPicture.PICTURE_ADDRESS;
                    this.recommend = data.recommend;
                    this.floor1 = data.floor1;
                    this.floor2 = data.floor2;
                    this.floor3 = data.floor3;
                    this.floor1.name = data.floorName.floor1;
                    this.floor2.name = data.floorName.floor2;
                    this.floor3.name = data.floorName.floor3;
                    this.hotGoods = data.hotGoods;
                }
            }).catch((err) => {
                console.log(err);
            })
        },
        filters: {
            toMoney
        }
    }
</script>

<style lang="scss" scoped>
    #mall {
        color: #999;
        background: rgb(231, 231, 231);

        .search-bar {
            background: #845d32;
            height: 1.2rem;

            .ico-bar {
                margin: 0.25rem 0 0 .3rem;
                font-size: .65rem;
            }

            .search-input {
                background: #F2F2F2;
                height: 0.8rem;
                box-sizing: border-box;
                width: 100%;
                margin-top: .18rem;
                border: 0;
                border-radius: .5rem;
            }

            .van-button {
                font-size: .35rem;
                margin-top: .18rem;
                margin-left: .3rem;
                height: .8rem;
                line-height: .7rem;
            }
        }

        .van-swipe-item {
            width: 100%;
            height: 5rem;

            .swipe-img {
                height: 100%;
                width: 100%;
            }
        }

        .type-bar {
            background-color: #fff;
            padding: 0.1rem 0;
            margin-top: 0.2rem;
            display: flex;
            border-radius: 0.14rem;
            box-sizing: border-box;
            box-shadow: 0 0 0.1rem #BEBEBE;
            justify-content: space-around;
            width: 100%;

            .type-bar-item {
                width: 1.5rem;
                height: 2rem;
                font-size: 0.35rem;

                .type-bar-img {
                    width: 100%;
                    height: 1.5rem;
                }
            }
        }

        .ab-bar {
            margin: 0.1rem 0;
        }

        .recommend-area {
            border-radius: 0.14rem;
            box-sizing: border-box;
            box-shadow: 0 0 0.1rem #BEBEBE;
            background-color: #fff;

            .recommend-title {
                width: 100%;
                font-size: 0.55rem;
                text-align: center;
                color: red;
            }

            .recommend-body {
                font-size: 0.2rem;

                img {
                    width: 99%;
                    height: 2.8rem;
                }

                .swiper-slide {
                    text-align: center;
                    height: 4.2rem;
                }
            }

        }

    }
    .hot-title{
        box-shadow: 0 0 0.1rem #BEBEBE;
        border-radius: 0.14rem;
        margin-top: 0.2rem;
        background-color: #fff;
        text-align: center;
    }

</style>
