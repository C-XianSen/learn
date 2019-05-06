<template>
    <div id="app">
        <div class="header">
            <div class="content">
                <div class="logo">logo</div>
                <div class="nav">
                    <router-link  v-for="(item, index) in items" :key="index" :to="item.url" class="item">{{ item.title }}</router-link>
                </div>
                <div class="button">
                    <div class="logIn">登录</div>
                    <div class="signUp">注册</div>
                </div>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            items: [
                {title: '首页', url: '/index', name: ''},
                {title: '登录', url: '/login'},
                {title: '注册', url: '/signup'}
            ]
        }
    }
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
    color: #fff;
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
.router-link-active{
    color: #008cff!important
}
</style>
