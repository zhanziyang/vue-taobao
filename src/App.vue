<template>
  <div id="app">
    <router-view></router-view>
     <footer class="tab">
      <ul class="tab-list">
          <li class="tab-content">
          <router-link to="/home">
              <span>&#xe722;</span>
              <p>首页</p>
             </router-link>
          </li>
          <li>
          <router-link to="/logistic">

              <span>&#xe811;</span>
              <p>物流</p>

          </router-link>
                </li>
           <li class="tab-content">
                <router-link to="/rec">
                <span>&#xe722;</span>
                <p>购物车</p>
              </router-link>
          </li>
           <li class="tab-content">
                <router-link to="/daojia">
              <span>&#xe6dc;</span>
              <p>到家</p>
               </router-link>
          </li>
           <li class="tab-content">
                <router-link to="/more">
              <span>&#xe6c5;</span>
              <p>更多</p>
               </router-link>
          </li>
      </ul>
  </footer>
  </div>
</template>

<script>
    export default {
        name: 'tmall',
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">
    @font-face {
        font-family: 'iconfont';
        /* project id 232236 */
        src: url("//at.alicdn.com/t/font_ajm34r7ld3l0izfr.eot");
        src: url("//at.alicdn.com/t/font_ajm34r7ld3l0izfr.eot?#iefix") format("embedded-opentype"), url("//at.alicdn.com/t/font_ajm34r7ld3l0izfr.woff") format("woff"), url("//at.alicdn.com/t/font_ajm34r7ld3l0izfr.ttf") format("truetype"), url("//at.alicdn.com/t/font_ajm34r7ld3l0izfr.svg#iconfont") format("svg");
    }
    
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
    }
    
    footer {
        border-top: 1px solid #e7e7e7;
        border-bottom: 1px solid #f8f8f8;
        width: 100%;
        left: 0px;
        bottom: -3px;
        width: 100%;
        position: fixed;
        padding: 10px 0;
        background: white;
    }
    
    ul {
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        height: 100%;
    }
    
    li {
        font-size: 0.42667rem;
        color: #5d656b;
        flex: 1;
        text-align: center;
        box-sizing: border-box;
        display: inline-block;
    }
    
    span {
        font-family: iconfont;
        font-size: 0.85333rem;
    }
    
    p {
        padding-top: 0.21333rem;
    }
    
    a {
        display: block;
        text-decoration: none;
        color: #666;
    }
</style>