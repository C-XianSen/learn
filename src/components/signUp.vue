<template>
    <div class="signup">
        <form class="form">
            <p class="info">
                <label for="user">用户名</label>
                <input type="text" name="user" id="user" v-model="user.name" placeholder="请输入用户名">
            </p>
            <p class="tips">
                <span v-show="isUser">请输入四位数以上且首位为字母</span>
            </p>
            <p class="info">
                <label for="psd">密码</label>
                <input type="password" name="psd" id="psd" maxlength="16" v-model="user.psd" placeholder="请输入至少6位数密码">
            </p>
            <p class="tips">
                密码强度：{{ level }}
            </p>
            <p class="info">
                <label for="mail">邮箱</label>
                <input type="email" name="mail" id="mail" v-model="user.mail" placeholder="请输入邮箱">
            </p>
            <p class="tips">
                <span v-show="isMail">请输入正确的邮箱地址</span>
            </p>
            <p class="info">
                <label for="tel">手机号</label>
                <input type="tel" name="tel" id="tel" v-model="user.tel" placeholder="请输入电话号码" maxlength="11">
            </p>
            <p class="tips">
                <span v-show="isTel">请输入正确的手机号码</span>
            </p>
            <p class="submit">
                <input type="button" value="注册" @click="this.checkForm">
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
                psd: '',
                mail: '',
                tel: ''
            },
            level: '',
            isUser: false,
            isMail: false,
            isTel: false
        }
    },
    methods: {
        checkForm: function () {
            let isOk = true
            if (!this.checkUser() && this.user.name.length == 0) {
                alert("请输入正确的用户名")
                isOk = false
            }
            if (this.user.psd.length < 6) {
                alert("请确保输入的密码强度至少为低")
                isOk = false
            }
            if (!this.checkMail() && this.user.mail.length == 0) {
                alert("请输入正确的邮箱")
                isOk = false
            }
            if (!this.checkTel() && this.user.tel.length == 0) {
                alert("请输入正确的手机号码")
                isOk = false
            }
            if (isOk) {
                axios({
                    method: 'post',
                    url: '',
                    data: this.user,
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded'
                    }
                })
                .then(res => {
                    alert("注册成功")
                })
                .catch(err => {
                    alert("注册失败")
                    console.log(err)
                })
            } else {
                alert("注册失败")
            }
        },
        checkUser: function (val) {
            return /^[a-zA-Z][a-zA-Z0-9_-]{3,15}$/.test(val)
        },
        checkMail: function (val) {
            return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(val)
        },
        checkTel: function (val) {
            return /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(val)
        }
    },
    watch: {
        'user.psd': function (newVal, oldVal) {
            this.level = checkStrong(newVal)
        },
        'user.name': function (newVal, oldVal) {
            this.isUser = !this.checkUser(newVal)
        },
        'user.mail': function (newVal, oldVal) {
            this.isMail = !this.checkMail(newVal)
        },
        'user.tel': function (newVal, oldVal) {
            this.isTel = !this.checkTel(newVal)
        }
    },
}
</script>

<style scoped>
.signup{
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