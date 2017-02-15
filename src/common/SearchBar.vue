<template>
<header class="top-bar" id="J_Header">
    <div class="top-bar-w">
        <div class="top-bar-c">
            <div class="s-input-select">
                <div class="s-input-tab">
                    <div class="s-input-tab-txt" @click="toggleMenu">宝贝</div>
                    <div v-if="on" class="s-input-tab-nav" id="J_TabNav">
                        <ul>
                            <li class="all"><span class="icon icons-baobei"></span>宝贝</li>
                            <li class="shop"><span class="icon icons-shop"></span>店铺</li>
                            <li class="mall"><span class="icon icons-tmall"></span>天猫</li>
                        </ul>
                    </div>
                </div>
                <div class="s-input-frame">
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
</template>
<script>
    export default {
        data() {
            return {
                on: false
            }
        },
        methods: {
            toggleMenu() {
                this.on = !this.on
            }
        }

    }
</script>
<style>
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
        height: 64px;
        line-height: 64px;
        padding: 12px 0;
        display: -webkit-box;
        position: relative;
        border-bottom: 2px solid #dbdbdb
    }
    
    .top-bar-c {
        -webkit-box-flex: 1;
        margin: 0 16px
    }
    
    .s-input-select {
        display: -webkit-box;
        height: 64px;
        background: #e3e3e5;
        border-radius: 8px
    }
    
    .s-input-tab {
        display: inline-block;
        position: relative
    }
    
    .s-input-tab .s-input-tab-txt {
        width: 112px;
        height: 60px;
        line-height: 60px;
        text-indent: 20px;
        color: #999;
        font-size: 28px
    }
    
    .s-input-tab .s-input-tab-txt:after {
        content: '';
        position: absolute;
        width: 12px;
        height: 6px;
        background-repeat: no-repeat;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAMAAADAMI+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAQlBMVEX///9dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY27///8uqZX9AAAAFHRSTlMA5+OrpwOTjmz8+2hJ8vBGLdbSK35PS8AAAAABYktHRACIBR1IAAAAMklEQVQI12NgFIEDJgZmBIeFgZUNxmZnZWBg4OAEMbm4GcCAh1dEhI+fAQoEBIWEQTQAoJUDbNS7QAEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTUtMDEtMjZUMTY6MTE6MzYrMDg6MDBa8kEXAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE1LTAxLTI2VDE2OjExOjM2KzA4OjAwK6/5qwAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=);
        background-size: 12px 6px;
        top: 26px;
        left: 16px
    }
    
    .s-input-tab .s-input-tab-nav {
        position: absolute;
        left: 0;
        top: 60px;
        z-index: 101;
        padding: 20px;
    }
    
    .s-input-tab .s-input-tab-nav ul {
        background: #484d50;
        border-radius: 12px;
        width: 280px;
        overflow: hidden;
        color: #c7c8c9;
    }
    
    .s-input-tab .s-input-tab-nav li {
        border-top: 2px solid #707476;
        margin-top: -2px;
        height: 70px;
        line-height: 70px;
    }
    
    .s-input-tab .s-input-tab-nav ul:after {
        position: absolute;
        left: 40px;
        top: 10px;
        content: '';
        display: inline-block;
        width: 20px;
        height: 20px;
        background: #484d50;
        transform: rotate(45deg);
    }
    
    .s-input-frame {
        -webkit-box-flex: 1;
        width: 100%;
        padding-right: 20px;
        line-height: 46px;
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
        height: 52px;
        font-size: 28px;
    }
    
    .s-input-frame .s-form-search {
        -webkit-box-flex: 1
    }
    
    .s-input-frame .s-form-search .J_autocomplete {
        border: none;
        background: none;
        width: 100%;
        height: 52px;
        font-size: 28px
    }
    
    .s-input-frame .s-form-search .J_autocomplete {
        border: none;
        background: none;
        width: 100%;
        height: 52px;
        font-size: 28px
    }
    
    .s-input-frame .icons-search {
        display: block;
        border: none;
        text-indent: -999px;
        position: relative;
        top: 14px;
        background-color: transparent;
    }
    
    .s-input-frame .c-form-btn {
        width: 60px;
        height: 60px;
        margin-right: -20px
    }
    
    .icons-search {
        background-position: -3px -742px;
        width: 36px;
        height: 36px
    }
    
    .top-bar-w .icons-home {
        margin: 10px 10px 0px 0
    }
    
    .icons-home {
        background-position: -6px -274px;
        width: 46px;
        height: 42px
    }
    
    .icons-baobei {
        background-position: -6px -328px;
        width: 42px;
        height: 40px
    }
    
    .icons-tmall {
        background-position: -6px -384px;
        width: 42px;
        height: 40px
    }
    
    * {
        outline: none;
    }
</style>