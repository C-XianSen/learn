<template>
    <div class="header">
        <div class="content">
            <div class="logo">logo</div>
            <div class="nav" @click.native="changeTabbar(active)">
                <a class="item">首页</a>
                <a class="item">登录</a>
                <a class="item">注册</a>
            </div>
            <div class="button">
                <div class="logIn">登录</div>
                <div class="signUp">注册</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'header-bar',
    data() {
        return {
            active: 0
        }
    },
    methods: {
        changeTabbar: function (active) {
            switch (active) {
                case 0:
                    this.$router.push('/')
                    break;
                case 1:
                    this.$router.push('/login')
                    break;
                case 2:
                    this.$router.push('/signup')
                    break;
            }
        }
    },
}
</script>

<style scoped>
.header{
    height: 90px;
    padding: 15px 150px;
    background: #999;
}
.content{
    width: 100%;
    min-width: 900px;
    zoom: 1;
    position: relative;
}
.content::after{
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}
.logo{
    position: absolute;
    top: 0;
    left: 0;
    height: 60px;
    line-height: 60px;
    text-align: center;
    width: 150px;
    font-size: 35px;
    color: #fff;
}
.nav{
    width: 600px;
    height: 60px;
    display: flex;
    margin: 0 auto;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
}
.nav .item{
    flex: 1;
    margin: 0 50px;
    text-align: center;
    font-size: 22px;
}
.button{
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 150px;
}
.button div{
    flex: 1;
    text-align: center;
    color: #fff
}
</style>
