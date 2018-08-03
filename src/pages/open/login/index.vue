<template>
    <section id="mod-main-content" class="hasLine">
        <div class="logo">
            <img src="/image/logo.png">
        </div>
        <div class='weui-cells'>
            <div class='weui-cell weui-cell_input'>
                <div class="weui-cell__hd">
                    <label class="weui-label">手机号码</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" placeholder="请输入手机号" type="tel" maxlength="11" v-model="userName"/>
                </div>
            </div>
            <div class="weui-cell weui-cell_input">
                <div class="weui-cell__hd">
                    <label class="weui-label">短信验证码</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" placeholder="请输入验证码" type="number" v-model="smsCode"/>
                </div>
                <div class="weui-cell__ft">
                    <button class="weui-btn btn-sms btn-mini" @click="getSMsCode">{{btnText}}</button>
                </div>
            </div>
        </div>
        <div class="weui-btn-area mt50">
            <button class="weui-btn btn weui-btn_plain-primary" @click="login">确定</button>
        </div>
    </section>
</template>
<script>
    import request from '../../../comm/request';
    import msgbox from '../../../comm/msgbox'
    new Vue({
      data:{
        btnText:'获取验证码'
      },
      methods:{
        getSMsCode:function() {
          request.get('/login_send_sms?mobilePhone='+this.userName)
          .then(function (response) {
            msgbox.alert('cuowu');
          })
          .catch(function (error) {
            console.log(error);
          });
        },
        login:function() {
          ;
        }
      }
    })
</script>
<style>
</style>