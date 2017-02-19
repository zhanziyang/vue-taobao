<template>
  <div class="location-view mod-panel animated slideInRight" :style="style" id="J_LocationView" data-spm="location">
    <div class="view-content">
      <div class="search-bar flex-container J_SearchBar border border-bottom">
        <div class="search-wrap">
          <input class="J_SearchField search-field" type="text" placeholder="请输入小区、写字楼、学校名称等" name="q" autocomplete="off" maxlength="13"
            data-spm-click="gostr=/tbbd.32.3;locaid=d3">
            <i class="i-clear J_Clear" style="display: none;"></i>
            <button type="button" class="btn-hide J_Hide" data-spm-click="gostr=/tbbd.32.4;locaid=d4">取消</button>
        </div>
      </div>
      <div class="scroll-wrap">
        <div class="scroll" id="J_LocationScroll" style="height: 622px; touch-action: auto; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); position: relative; overflow: hidden;">
          <div class="xs-container" style="transform-origin: 0px 0px 0px; transform: translate(0px, 0px) translateZ(0px);">
            <div class="xs-content" style="height: 623px; transform-origin: 0px 0px 0px; transform: translate(0px, 0px) scale(1) translateZ(0px);">
              <div class="J_InitialPanel">
                <div class="mod-current J_Current">
                  <div class="list-hd">
                    <h3 class="hd-text">当前位置</h3>
                  </div>
                  <ul class="list-bd border mod-border">
                    <li class="list-item border border-bottom  J_AddressItem" data-poiid="" data-addressid="" data-longitude="118.11195110000001"
                      data-latitude="24.4600907" data-citycode="350200" data-cityname="%E5%8E%A6%E9%97%A8" data-name="文屏路立交"
                      data-spm-click="gostr=/tbbd.32.5;locaid=d5">
                      <p class="current-item"><i class="i-current"></i><span class="item-info">文屏路立交</span></p>
                      </li>
                  </ul>
                </div>
                <div class="mod-address J_DeliveryAddress" style="display: none;"></div>
              </div>
              <div class="J_SearchHistory" style="display: none;"></div>
              <div class="mod-search-result J_SearchResult" style="display: none;"></div>
            </div>
          </div>
          <div class=" xs-fixed-container"></div>
          <div style="width: 3px; bottom: 8px; top: 3px; right: 3px; opacity: 0; position: absolute; z-index: 999; overflow: hidden; border-radius: 3px; transform: translateZ(0px); transition: opacity 300ms ease-out 100ms;">
            <div style="width: 100%; position: absolute; background: rgba(0, 0, 0, 0.298039); border-radius: 3px; height: 611px; transform: translateY(0px) translateZ(0px);"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        style: {}
      }
    },

    mounted() {
      this.style = {
        height: window.innerHeight + 'px'
      }
    }
  }

</script>

<style scoped>
  .slideInRight {
    -webkit-animation-name: slideInRight;
    animation-name: slideInRight;
  }
  
  .animated {
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  
  .location-view {
    background: #f4f4f4;
    color: #333;
    width: 10rem;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
  }
  
  .mod-panel .search-bar {
    background: #fff;
  }
  
  .search-bar {
    width: 100%;
    box-sizing: border-box;
  }
  
  .border {
    border-width: 1px;
  }
  
  .flex-container {
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-orient: horizontal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
  }
  
  .flex-container,
  .search-bar .search-wrap {
    display: -webkit-box;
    display: -webkit-flex;
  }
  
  .border-bottom,
  .mod-border {
    border-bottom: 1px solid #ddd;
  }

  .search-bar .search-wrap {
    position: relative;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    box-sizing: border-box;
    padding-right: 1.44rem;
}

.flex-container, .search-bar .search-wrap {
    display: -webkit-box;
    display: -webkit-flex;
}

.search-bar .search-wrap .search-field {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
}

.mod-panel .search-field {
    box-sizing: border-box;
    -webkit-appearance: none;
    width: 8.37333333rem;
    height: .85333333rem;
    margin: .17333333rem 0 .17333333rem .13333333rem;
    padding-left: .32rem;
    outline: 0;
    border-radius: .10666667rem;
    border: none;
    background: #e5e5e5;
    color: #333;
    font-size: 14px;
}
.mod-panel .search-field {
    box-sizing: border-box;
    -webkit-appearance: none;
    width: 8.37333333rem;
    height: .85333333rem;
    margin: .17333333rem 0 .17333333rem .13333333rem;
    padding-left: .32rem;
    outline: 0;
    border-radius: .10666667rem;
    border: none;
    background: #e5e5e5;
    color: #333;
    font-size: 14px;
}
.mod-panel .i-clear {
    display: none;
    position: absolute;
    right: 1.5rem;
    top: .21333333rem;
    height: .77333333rem;
    line-height: .77333333rem;
    width: .6rem;
    color: #999;
}
.i-clear {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABYUlEQVR4Aa3WN3JCMRgE4DfDBbgPp6DXoSj/n3mVOofe2ap0BlTROVaEkrAmhx3pCTzSVoD9KYcqVWxbjVp1GmQqUw3q1Kqx7eqa0u+qk5kgkpm6fvcipO6oFzRHfd1pRG5b0hNcmN5tKzkq8iy4Is+2HWU0CK6LBqZWnUq0Jpdn6mBybPLpnc3U8Yd7DPAISeZx9fv92TcnM3g64V9YF59gPNblixbDYfmdfj0AmCIGGND3uyWq7qyh+CSKmU/UPHtuu3pmgixFDGW2WgZq+Gui8swqaiq1ggyVZVaQpRGKUcMEQ6OkQZChsswKCpVMBWlqvGPGzHCmjZDHsfgcpCHHzBIUdU1dM/NJM5gebJtjJEXR9JscIxdQaniLxJgERVuEN+17jCHqPbZp+Rj5jTFE/UaPETrYPGYYMnNCDTGjzqnno/afqTuFDv9i11GhC7LQlV3oEVHyWVP+oVXs6fcHCrKjF21ePt4AAAAASUVORK5CYII=) center center no-repeat;
    background-size: 16px 16px;
}
.mod-panel .btn-hide {
    position: absolute;
    right: 0;
    top: 0;
    padding-right: .32rem;
    line-height: 1.2rem;
    height: 1.2rem;
    font-size: 14px;
    color: #333;
    outline: 0;
    border: 0;
    background: 0;
}
</style>