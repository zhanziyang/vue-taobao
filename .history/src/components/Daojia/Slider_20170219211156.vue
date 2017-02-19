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
    data: {
      style: {}
    },

    mounted() {
      this.style = {
        height: window.innerHeight + "px"
      }
    }
  }
</script>