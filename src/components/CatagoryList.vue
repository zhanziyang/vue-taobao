<template>
  <div class="tmall-menu-panel">
    <ul class="tmall-menu-panel-ul">
      <li class="tmall-menu-panel-li" v-for="item in catagories">
        <a href="#" class="tmall-menu-panel-href">
          <img :src="item.img" alt="" class="tmall-menu-panel-image">
          <span class="tmall-menu-panel-title">{{item.title}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'tmallCatagoryList',
        data() {
            return {
                catagories: [{
                    img: '//gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png?imgtag=avatar)',
                    title: '积分乐园'
                }, {
                    img: '//gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png?imgtag=avatar)',
                    title: '充值'
                }, {
                    img: '//gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png?imgtag=avatar)',
                    title: '充值'
                }, {
                    img: '//gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png?imgtag=avatar)',
                    title: '充值'
                }, {
                    img: '//gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png?imgtag=avatar)',
                    title: '充值'
                }, {
                    img: '//gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png?imgtag=avatar)',
                    title: '充值'
                }, {
                    img: '//gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png?imgtag=avatar)',
                    title: '充值'
                }, {
                    img: '//gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png?imgtag=avatar)',
                    title: '充值'
                }, {
                    img: '//gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png?imgtag=avatar)',
                    title: '充值'
                }, {
                    img: '//gw.alicdn.com/tps/TB1FDOHLVXXXXcZXFXXXXXXXXXX-183-129.png?imgtag=avatar)',
                    title: '充值'
                }]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .tmall-menu-panel {
        display: block;
        background: white;
        margin-bottom: 0.505rem;
        padding: 0.156rem 0;
    }
    
    .tmall-menu-panel-ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0px;
    }
    
    .tmall-menu-panel-li {
        display: inline-block;
        flex: 1 1 20%;
    }
    
    .tmall-menu-panel-href {
        text-align: center;
        display: block;
        font-size: 12px;
        margin: 4px;
        color: black;
        text-decoration: none;
    }
    
    .tmall-menu-panel-image {
        display: block;
        margin: 0 auto 5px;
        width: 2.6rem;
    }
    
    span {
        box-sizing: border-box;
        line-height: 0.688rem;
        text-align: center;
        font-size: 0.45rem;
        color: #666666;
        background-color: transparent;
        width: 1.625rem;
        height: 0.688rem;
    }
</style>