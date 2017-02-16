<template>
    <div class="wrapper">
        <div class="head">
        淘宝账户登录
    </div>
    <div class="logo tb-logo">
        <i class="iconfont">&#xe626;</i>
    </div>
    <form action="" id="loginForm" method="post" class="mlogin">
       <div class="field autoClear">
            <div class="label">账户</div>
            <div class="field-control">
                <input type="text" class="input-required" name="TPL_username" placeholder="手机号/邮箱/会员名" value="" id="username">
            </div>
        </div>
        <div class="field autoClear">
            <div class="label">登陆密码</div>
            <div class="field-control">
                <input type="text" class="input-required" name="TPL_username" placeholder="手机号/邮箱/会员名" value="" id="username">
            </div>
        </div>
       <div class="submit">
            <button type="submit" class="button" id="submit-btn" disabled="disabled">登 录</button>
        </div>
        <div class="other-link">
        <a href="//reg.taobao.com/member/new_register.jhtml?TPL_redirect_url=https://h5.m.taobao.com/other/loginend.html?origin=https%3A%2F%2Fh5.m.taobao.com" class="ft-left">免费注册</a>
        <a id="forget" class="ft-right">忘记密码</a>
    </div>
    </form>
    
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>
<style scoped lang="scss">
    @font-face {
        font-family: 'iconfont';
        /* project id 232236 */
        src: url("//at.alicdn.com/t/font_l74bh6ik3ns714i.eot");
        src: url("//at.alicdn.com/t/font_l74bh6ik3ns714i.eot?#iefix") format("embedded-opentype"), url("//at.alicdn.com/t/font_l74bh6ik3ns714i.woff") format("woff"), url("//at.alicdn.com/t/font_l74bh6ik3ns714i.ttf") format("truetype"), url("//at.alicdn.com/t/font_l74bh6ik3ns714i.svg#iconfont") format("svg");
    }
    
    .head {
        width: 100%;
        height: 1.173333rem;
        line-height: 1.173333rem;
        border-bottom: 1px solid #c8c8c8;
        color: #000;
        text-align: center;
        font-size: .453333rem;
        background-color: #f7f7f8;
    }
    
    .logo {
        color: #f40;
        font-size: 1.2rem;
        line-height: 1.2rem;
        text-align: center;
        margin: .5rem;
    }
    
    .iconfont {
        font-family: iconfont;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: .2px;
    }
    
    .mlogin {
        margin-top: .466667rem;
        font-size: .426667rem;
    }
    
    .field {
        display: -webkit-flex;
        -webkit-box-align: center;
        border-bottom: 1px solid #ddd;
        padding: .373333rem .266667rem;
        color: #6c6c6c;
        background-color: #fff;
        text-align: left;
    }
    
    .label {
        width: 2rem;
    }
    
    .field-control {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
    }
    
    input {
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAmJJREFUWAntV7uKIkEUvbYGM4KID3wEIgjKRLLpKGLgFwiCfslGhkb7IbLgAzE1GhMxWxRRBEEwmEgDERWfW6fXuttq60a2wU6B1qlzb9U5fatsKROJVigUArvd7oeAyePx6Af3qGYymT7F2h8Wi+V7Pp+fmE7iv4Sw81GieusKIzNh4puCJzdaHIagCW1F4KSeQ4O4pPLoPb/3INBGBZ7avgz8fxWIxWIUCoX43Blegbe3NwoGg88zwMoncFUB8Yokj8dDdrv9MpfHVquV/H4/iVcpc1qgKAp5vV6y2WxaWhefreB0OimXy6kGkD0YDKhSqdB2u+XJqVSK4vE4QWS5XKrx0WjEcZ/PR9lslhwOh8p1Oh2q1Wp0OBw4RwvOKpBOp1kcSdivZPLvmxrjRCKhiiOOSmQyGXp5ecFQbRhLcRDRaJTe39//BHW+2cDr6ysFAoGrlEgkwpwWS1I7z+VykdvtliHuw+Ew40vABvb7Pf6hLuMk/rGY02ImBZC8dqv04lpOYjaw2WzUPZcB2WMPZet2u1cmZ7MZTSYTNWU+n9N4PJbp3GvXYPIE2ADG9Xqder2e+kTr9ZqazSa1222eA6FqtUoQwqHCuFgscgWQWC6XaTgcEiqKQ9poNOiegbNfwWq1olKppB6yW6cWVcDHbDarIuzuBBaLhWrqVvwy/6wCMnhLXMbR4wnvtX/F5VxdAzJoRH+2BUYItlotmk6nLGW4gX6/z+IAT9+CLwPPr8DprnZ2MIwaQBsV+DBKUEfnQ8EtFRdFneBDKWhCW8EVGbdUQfxESR6qKhaHBrSgCe3fbLTpPlS70M0AAAAASUVORK5CYII=");
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-size: 16px 18px;
        background-position: 98% 50%;
        cursor: auto;
        -webkit-appearance: none;
        width: 100%;
        padding: 0;
        border: 0;
        background-color: transparent;
        font-size: 100%;
        outline: none;
    }
    
    .submit button:disabled {
        color: #ffa286;
    }
    
    .submit {
        margin: .48rem .266667rem 0;
    }
    
    .button {
        width: 100%;
        height: 1.253333rem;
        line-height: 1.253333rem;
        border: 1px solid #f40;
        border-radius: 5px;
        color: #fff;
        background-color: #f40;
        text-align: center;
        font-size: .426667rem;
        display: block;
    }
    
    .other-link {
        overflow: hidden;
        margin: .4rem .266667rem;
        color: #6c6c6c;
    }
    
    .other-link a {
        color: #6c6c6c;
        text-decoration: none;
    }
    
    .ft-left {
        float: left;
    }
    
    .ft-right {
        float: right;
    }
</style>