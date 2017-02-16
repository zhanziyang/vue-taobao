<template>
<div>
<header class="top-bar" id="J_Header">
    <div class="top-bar-w">
        <div class="top-bar-c">
            <div class="s-input-select">
                <div class="s-input-tab">
                    <div class="s-input-tab-txt" @click="toggleMenu">宝贝</div>
                    <div v-if="catagoryOn" class="s-input-tab-nav" id="J_TabNav">
                        <ul>
                            <li class="all"><span class="icon icons-baobei"></span>宝贝</li>
                            <li class="shop"><span class="icon icons-shop"></span>店铺</li>
                            <li class="mall"><span class="icon icons-tmall"></span>天猫</li>
                        </ul>
                    </div>
                </div>
                <div class="s-input-frame" @click="toggleSuggest">
                    <form class="c-form-suggest" id="J_Search" method="get" action="/h5">
                        <div class="s-form-search search-form">
                            <input type="search" name="q" class="J_autocomplete" autocomplete="off" value="">
                            <button style="display: none;"><span></span></button>
                        </div>
                        <div class="c-form-btn">
                            <input type="submit" name="search" class="icon icons-search">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <a class="logo" href="//m.taobao.com" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
            <div class="icons-home"></div>
        </a>
        <div class="top-bar-btn closed" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1); display: none;">取消</div>
    </div>
</header>
<div v-if="suggestOn" class="suggest-container" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
    <h3>大家都在搜</h3>
    <ul class="suggest-hotkey" data-sugg-type="2">
        <li>项链</li>
        <li>水杯</li>
        <li>男士皮鞋</li>
        <li>外套男</li>
        <li>潍坊wlan100</li>
        <li>针织开衫</li>
        <li>男款秋装外套</li>
        <li>女包</li>
        <li>男士裤子休闲裤</li>
        <li>风衣</li>
        </ul>
 </div>
</div>
</template>
<script>
    export default {
        data() {
            return {
                catagoryOn: false,
                suggestOn: false
            }
        },
        methods: {
            toggleMenu() {
                this.catagoryOn = !this.catagoryOn
            },
            toggleSuggest() {
                this.suggestOn = !this.suggestOn
            }
        }

    }
</script>
<style scoped lang="scss">
    $designWidth: 750;
    @function px2rem($px) {
        @return $px*320/$designWidth/20+rem;
    }
    
    * {
        outline: none;
    }
    
    .suggest-container {
        margin-bottom: px2rem(16);
        text-align: left;
    }
    
    .suggest-container h3 {
        color: #999;
        font-size: px2rem(20);
        height: px2rem(48);
        line-height: px2rem(48);
        padding-left: px2rem(16);
        background: #eee;
        padding-bottom: px2rem(16);
    }
    
    .suggest-container .suggest-hotkey {
        padding: px2rem(8) px2rem(20) px2rem(0);
        background: #f9f9f9;
    }
    
    .suggest-container .suggest-hotkey li {
        border: px2rem(1) solid #dedede;
        height: px2rem(52);
        line-height: px2rem(52);
        width: inherit;
        border-radius: px2rem(28);
        text-align: center;
        padding: 0 px2rem(15);
        display: inline-block;
        margin-right: px2rem(8);
        margin-bottom: px2rem(12);
        color: #666;
        font-size: px2rem(28);
        list-style: none;
    }
    
    .suggest-container {
        background: white;
        overflow: hidden
    }
    
    .icons-home,
    .icons-baobei,
    .icons-tmall,
    .icons-shop,
    .icons-search {
        background-image: url(/static/icons@2x.png);
    }
    
    .top-bar {
        width: 100%;
        background: #f6f6f6;
        z-index: 101
    }
    
    .top-bar-w {
        width: 100%;
        color: #212121;
        height: px2rem(64);
        line-height: px2rem(64);
        padding: px2rem(12) 0;
        display: -webkit-box;
        position: relative;
        border-bottom: px2rem(2) solid #dbdbdb
    }
    
    .top-bar-c {
        -webkit-box-flex: 1;
        margin: 0 px2rem(16)
    }
    
    .s-input-select {
        display: -webkit-box;
        height: px2rem(64);
        background: #e3e3e5;
        border-radius: px2rem(8)
    }
    
    .s-input-tab {
        display: inline-block;
        position: relative
    }
    
    .s-input-tab .s-input-tab-txt {
        width: px2rem(112);
        height: px2rem(60);
        line-height: px2rem(60);
        text-indent: px2rem(20);
        color: #999;
        font-size: px2rem(28)
    }
    
    .s-input-tab .s-input-tab-txt:after {
        content: '';
        position: absolute;
        width: px2rem(12);
        height: px2rem(6);
        background-repeat: no-repeat;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAMAAADAMI+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAQlBMVEX///9dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY27///8uqZX9AAAAFHRSTlMA5+OrpwOTjmz8+2hJ8vBGLdbSK35PS8AAAAABYktHRACIBR1IAAAAMklEQVQI12NgFIEDJgZmBIeFgZUNxmZnZWBg4OAEMbm4GcCAh1dEhI+fAQoEBIWEQTQAoJUDbNS7QAEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTUtMDEtMjZUMTY6MTE6MzYrMDg6MDBa8kEXAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE1LTAxLTI2VDE2OjExOjM2KzA4OjAwK6/5qwAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=);
        background-size: px2rem(12) px2rem(6);
        top: px2rem(26);
        left: px2rem(16)
    }
    
    .s-input-tab .s-input-tab-nav {
        position: absolute;
        left: 0;
        top: px2rem(60);
        z-index: 101;
        padding: px2rem(20);
    }
    
    .s-input-tab .s-input-tab-nav ul {
        background: #484d50;
        border-radius: px2rem(12);
        width: 2px2rem(80);
        overflow: hidden;
        color: #c7c8c9;
    }
    
    .s-input-tab .s-input-tab-nav li {
        border-top: px2rem(2) solid #707476;
        margin-top: px2rem(-2);
        font-size: px2rem(24);
        height: px2rem(70);
        width: px2rem(210);
        line-height: px2rem(70);
    }
    
    .s-input-tab .s-input-tab-nav ul:after {
        position: absolute;
        left: px2rem(40);
        top: px2rem(10);
        content: '';
        display: inline-block;
        width: px2rem(20);
        height: px2rem(20);
        background: #484d50;
        transform: rotate(45deg);
    }
    
    .s-input-frame {
        -webkit-box-flex: 1;
        width: 100%;
        padding-right: px2rem(20);
        line-height: px2rem(46);
    }
    
    .c-form-suggest {
        position: relative;
    }
    
    .s-input-frame .c-form-suggest {
        display: -webkit-box;
    }
    
    .s-input-frame .s-form-search {
        -webkit-box-flex: 1;
    }
    
    .s-input-frame .s-form-search .J_autocomplete {
        border: none;
        background: none;
        width: 100%;
        height: px2rem(52);
        font-size: px2rem(28);
    }
    
    .s-input-frame .s-form-search {
        -webkit-box-flex: 1
    }
    
    .s-input-frame .s-form-search .J_autocomplete {
        border: none;
        background: none;
        width: 100%;
        height: px2rem(52);
        font-size: px2rem(28)
    }
    
    .s-input-frame .s-form-search .J_autocomplete {
        border: none;
        background: none;
        width: 100%;
        height: px2rem(52);
        font-size: px2rem(28)
    }
    
    .s-input-frame .icons-search {
        display: block;
        border: none;
        text-indent: px2rem(-999);
        position: relative;
        top: px2rem(14);
        background-color: transparent;
    }
    
    .s-input-frame .c-form-btn {
        width: px2rem(60);
        height: px2rem(60);
        margin-right: px2rem(-20);
    }
    
    .icons-search {
        background-position: px2rem(-3) -742px;
        width: px2rem(36);
        height: px2rem(36);
    }
    
    .top-bar-w .icons-home {
        margin: px2rem(10) px2rem(10) px2rem(0) 0;
    }
    
    .icons-home {
        background-position: px2rem(-6) -274px;
        width: px2rem(46);
        height: px2rem(42)
    }
    
    .icons-baobei {
        background-position: px2rem(-6) px2rem(-328);
        width: px2rem(42);
        height: px2rem(40)
    }
    
    .icons-tmall {
        background-position: px2rem(-6) px2rem(-384);
        width: px2rem(42);
        height: px2rem(40);
    }
</style>