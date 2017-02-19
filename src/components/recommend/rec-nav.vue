<template>
    <div>
	<div class="user">
		<div class="userPhoto" id="userPhoto1">
			<div class="set-btn">
                <div class="set-btn"> <p>设置</p> </div>
            </div>
			<div class="user-photo"><img src="//gw.alicdn.com/tfscom/TB1_n4PKXXXXXcYXXXXNx3t4VXX-120-120.jpg_q30"></div>
			<div class="user-nick">
		<p class="nick" id="J_myNick">tb_6791780</p>
		<p class="level level3"></p>
	</div>
		</div>
	</div>
    <section class="user-behavior userBehavior" id="userBehavior2">
		<ul data-spm="1">
			<li>
				<a href="//h5.m.taobao.com/fav/index.htm?#!goods/queryColGood-1">
				<p>0</p>
				<p>收藏的宝贝</p></a>
			</li>
			<li>
				<a href="//h5.m.taobao.com/fav/index.htm?#!shop/queryColShop-1">
				<p>0</p>
				<p>收藏的店铺</p></a>
			</li>
			<li>
				<a href="//h5.m.taobao.com/footprint/waphome.html">
				<p>0</p>
				<p>我的足迹</p></a>
			</li>
		</ul>
	</section>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped lang="scss">
    .user {
        font-size: 0.59733rem;
        position: relative;
        height: 5.266rem;
        margin: 0 auto;
        background: #d34201 url(//gw.alicdn.com/tfscom/TB10.51HFXXXXXqXpXXYx6l2pXX-750-235.jpg_q90) no-repeat top center;
        background-size: cover;
        color: #fff;
    }
    
    .user .user-photo {
        position: absolute;
        bottom: -2rem;
        left: 0.934rem;
        width: 3.734rem;
        height: 3.734rem;
        text-align: center;
        border-radius: 100%;
        padding: 0.134rem;
        background: rgba(255, 255, 255, 0.7);
        transform: translateZ(0.04267rem);
        overflow: hidden;
    }
    
    .user .user-photo img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
    }
    
    .user .user-photo img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
    }
    
    .user .user-nick {
        float: left;
        width: 100%;
        padding-left: 5.334rem;
        box-sizing: border-box;
        margin-top: 4rem;
        font-size: 0.96rem;
        display: -webkit-box;
    }
    
    .user .user-nick .nick {
        max-width: 12rem;
        margin-right: 0.266rem;
        overflow: hidden;
        display: box;
        word-break: break-all;
        font-size: 0.9rem;
        color: white;
    }
    
    .user .user-nick .level {
        background-position: left center;
        background-repeat: no-repeat;
        background-size: 1.066rem;
        -webkit-box-flex: 1;
    }
    
    .user .user-nick .level3 {
        background: url(http://gw.alicdn.com/tfscom/TB1PcQkHFXXXXcQXVXXpQsyGpXX-40-32.png_q90) no-repeat;
    }
    
    .user .user-nick:after {
        clear: both;
    }
    
    section {
        font-size: 0.59733rem;
        height: 2.48rem;
        text-align: center;
        -webkit-box-pack: center;
        -moz-box-pack: center;
        -ms-box-pack: center;
        -o-box-pack: center;
        -webkit-box-align: center;
        -moz-box-align: center;
        -ms-box-align: center;
        -o-box-align: center;
        display: box;
        margin-bottom: 0.64rem;
        border-bottom: .027rem solid #e7e7e7;
        background: #fff;
    }
    
    .user-behavior ul {
        display: -webkit-box;
        width: 20rem;
        margin: 0 auto;
        padding-left: 4.534rem;
        box-sizing: border-box;
    }
    
    .user-behavior ul li:first-child {
        border: 0;
    }
    
    .user-behavior ul li {
        -webkit-box-flex: 1;
        border-left: 0.04267rem solid #e7e7e7;
        display: inline-block;
        padding: .4rem 0.4rem 0rem
    }
    
    p,
    a {
        color: black;
        text-decoration: none;
        font-style: normal;
    }
    
    .user .set-btn p {
        line-height: 1.2rem;
        text-align: center;
        background: rgba(0, 0, 0, .5);
        border-radius: .4rem;
        color: white;
        width: 2.333rem;
        height: 1.2rem;
    }
    
    .user .set-btn {
        position: absolute;
        right: 0.45333rem;
        top: 0.45333rem;
    }
</style>