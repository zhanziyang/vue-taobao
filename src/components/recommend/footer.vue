<template>
    <footer data-spm="4">
		<div class="nick">
			<a href="">tb_6791780</a>
		</div>
		<div class="login">
			<router-link to="/logistic">退出</router-link>
		</div>
		<div class="feedback">
			<a href="#">意见反馈</a>
		</div>
		<div class="topc">
			<a href="#" target="_blank">电脑版</a>
		</div>
	</footer>
</template>
<script>
    export default {}
</script>
<style lang="scss" scoped>
    footer {
        height: 1.347rem;
        background: #fff;
        border-top: 1px solid #e7e7e7;
        border-bottom: 1px solid #e7e7e7;
        display: flex;
        align-items: center;
    }
    
    footer>div {
        flex: 1;
    }
    
    footer a {
        display: block;
        width: 100%;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    
    footer .feedback,
    footer .topc {
        border-left: 1px solid #e7e7e7;
    }
    
    a {
        text-decoration: none;
        color: black;
        font-size: 0.7rem;
    }
</style>