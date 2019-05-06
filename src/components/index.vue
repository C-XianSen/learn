<template>
    <div class="content">
        <div class="banner" id="banner">
            <div class="item" v-for="(item, index) in items" :key="index" v-show="index === mark">
                <img :src="'../assets/images/banner_' + item + '.jpg'" alt="">
            </div>
        </div>
        <div class="doc">
            <span v-for="(doc, index) in items" :key="index" :class="{'active': index === mark}"></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mark: 0,
            items: [
                1,
                2,
                3
            ],
        }
    },
    methods: {
        autoPlay: function () {
            this.mark++
            if (this.mark === 3) {
                this.mark = 0
            }
        },
        play: function () {
            setInterval(this.autoPlay, 2500)
        },
        change: function (i) {
            this.mark = i
        }
    },
    created() {
        this.play()
    },
}
</script>

<style scoped>
.banner{
    width: 100%;
    height: 600px;
    overflow: hidden;
    position: relative;
}
.item{
    width: 100%;
    height: 600px;;
}
.item a{
    display: block;
    width: 100%;
    height: 600px;
    font-size: 0;
}
img {
    width: 100%;
}
.doc{
    position: absolute;
    width: 100%;
    bottom: 10px;
    margin: 0 auto;
    z-index: 10;
    text-align: center;
}
.doc span{
    width: 20px;
    height: 5px;
    border: 1px solid;
    background: #fff;
    display: inline-block;
    margin-right: 10px;
}
.active {
    background: #666 !important
}
</style>
