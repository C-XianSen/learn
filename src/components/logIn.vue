<template>
    <div class="login">
        <form class="form">
            <p class="info">
                <label for="user">用户名</label>
                <input type="text" name="user" id="user" v-model="user.name" placeholder="请输入您的用户名">
            </p>
            <p class="tips">
                <span v-show="isUser">请输入四位数以上且首位为字母</span>
            </p>
            <p class="info">
                <label for="psd">密码</label>
                <input type="password" name="psd" id="psd" maxlength="16" v-model="user.psd" placeholder="请输入您的密码">
            </p>
            <p class="tips">
                密码强度：{{ level }}
            </p>
            <p class="submit">
                <input type="button" value="登录" @click="checkForm">
            </p>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import { checkStrong } from '../assets/js/checkStrong.js'

export default {
    data() {
        return {
            user: {
                name: '',
                psd: ''
            },
            token: '',
            isUser: false,
            level: '',
        }
    },
    methods: {
        checkForm: function () {
            if (this.user.name === "A123" && this.user.psd === "123456") {
                var data = {token: "123"}
                this.$store.commit('setStorage', data)
                this.$router.push('/index')
                console.log(data.token)
            }
            // if (/^[a-zA-Z][a-zA-Z0-9_-]{3,15}$/.test(this.user) && this.psd.length >= 6) {
            //     axios({
            //         method: 'post',
            //         url: '',
            //         data: this.user,
            //         headers: {
            //             'Content-type': 'application/x-www-form-urlencoded'
            //         }
            //     })
            //     .then(res => {
            //         // token: res.data.token
            //         this.$store.commit('setStorage', res.data)
            //         this.$router.push('/index')
            //         alert("登录成功")
            //     })
            //     .catch(err =>  {
            //         alert("请输入正确的账号或密码")
            //         console.log(err)
            //     })
            // }
            else {
                alert("请输入正确的账号和密码")
            }
        },
    },
    watch: {
        'user.psd': function (newVal, oldVal) {
            this.level = checkStrong(newVal)
        },
        'user.name': function (newVal, oldVal) {
            this.isUser = !/^[a-zA-Z][a-zA-Z0-9_-]{3,15}$/.test(newVal)
        }
    },
}
</script>

<style scoped>
.login{
    width: 100%;
}

.form{
    width: 350px;
    margin: 0 auto;
    padding: 50px;
    overflow: hidden;
}
.form p{
    width: 250px;
    height: 30px;
}
.form label{
    float: left;
    line-height: 30px;
    font-size: 14px;
    font-weight: bold;
}
.info input{
    float: right;
    margin-top: 3px;
    height: 24px;
    width: 200px;
    border-radius: 3px;
}
.tips{
    line-height: 30px;
    margin-left: 50px;
    color: #ff8800
}
.submit{
    height: 40px;
    text-align: center;
    margin-top: 10px;
}
.submit input{
    width: 100px;
    height: 36px;
    border: 2px solid #ff8800;
    border-radius: 5px;
    background-color: #ff8800;
    color: #fff;
    font-size: 16px;
}
</style>
