<template>
  <div :class="className" :style="style" id="J_LocationView" data-spm="location">
    <div class="view-content">
      <div class="search-bar flex-container J_SearchBar border border-bottom">
        <div class="search-wrap">
          <input class="J_SearchField search-field" type="text" placeholder="请输入小区、写字楼、学校名称等" name="q" autocomplete="off" maxlength="13"
            data-spm-click="gostr=/tbbd.32.3;locaid=d3">
            <i class="i-clear J_Clear" style="display: none;"></i>
            <button type="button" class="btn-hide J_Hide" data-spm-click="gostr=/tbbd.32.4;locaid=d4" @click="onCancelClick">取消</button>
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
        style: {},
        className: 'location-view mod-panel animated'
      }
    },

    props: {
      show: {
        type: Boolean,
        default: false
      }
    },

    watch: {
      show() {
        this.style = {
          height: window.innerHeight + 'px',
          display: 'block'
        }
        if (this.show) {
          this.className = 'location-view mod-panel animated slideInRight'
        } else {
          this.className = 'location-view mod-panel animated slideOutRight'
        }
      }
    },

    mounted() {
      this.style = {
        height: window.innerHeight + 'px',
        display: this.show ? 'block' : 'none'
      }
    },

    methods: {
      onCancelClick() {
        this.$emit('cancel')
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
    width: 375px;
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
    padding-right: 54px;
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
    width: 316px;
    height: 32px;
    margin: 6.5px 0 6.5px 5px;
    padding-left: 12px;
    outline: 0;
    border-radius: 4px;
    border: none;
    background: #e5e5e5;
    color: #333;
    font-size: 14px;
}

.mod-panel .i-clear {
    display: none;
    position: absolute;
    right: 56.25px;
    top: 8px;
    height: 29px;
    line-height: 29px;
    width: 22.5px;
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
    padding-right: 12px;
    line-height: 45px;
    height: 45px;
    font-size: 14px;
    color: #333;
    outline: 0;
    border: 0;
    background: 0;
}

.mod-panel .list-hd {
    position: relative;
    height: 22px;
    line-height: 22px;
    padding-top: 14px;
    padding-left: 12px;
    font-size: 11px;
    color: #999;
    text-align: left;
}
.mod-panel .list-hd .hd-text {
    font-weight: 400;
}
.mod-panel .list-bd {
    padding: 0 12px;
    background: #fff;
}
.border {
    border-width: 1px;
}
.border-bottom, .mod-border {
    border-bottom: 1px solid #ddd;
}
.border-top, .mod-border {
    border-top: 1px solid #ddd;
}
.mod-location, .view-content .mod-current .list-item {
    text-align: center;
    font-size: 14px;
}
.mod-panel .list-item:last-child {
    border-bottom: none;
}
.mod-panel .list-item {
    padding: 14.5px 0;
    color: #333;
    font-size: 14px;
}
.view-content .mod-current .current-item {
    color: #f56353;
}
.view-content .mod-current .i-current, .view-content .mod-current .i-current-error {
    width: 16px;
    height: 16px;
    display: inline-block;
    vertical-align: middle;
}
.i-current {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAjVBMVEUAAAD2ZFP/fWr2Y1T1Y1P7aFn2ZFP/b1/2Y1T2Y1P3ZVX/cV/2Y1T3ZVX2ZFP4Zln1ZFT1Y1T1Y1P2ZFT2ZVX/Zlj/d2H2Y1P2ZFP1ZFP4ZVT5Zlb2Y1T1Y1T2Y1T2Y1T2ZVT2ZFT2ZFT2ZFT3ZVX3ZVb2ZFP2Y1T2ZFP2Y1P2ZFP3Zlb/bVX2Y1T2Y1NxCctxAAAALnRSTlMA5wT28BrZD7bDHwqiM2kk69XQVU0RB+HKmkkou56VjIl9dm5fOr6qqJBZQRXyYFSMDQAAAYpJREFUeAF10gWCpDAURdFLgruWu7W//S9vWiCtcwrnG1A4UJX7PI63h0vAH7JjKKctDT+UnuQty14vq3PuS2HHV1EsJSsDkXxg1jXS0uCkjepHYAoAc7ZKBpcfqkn5FgDFXMlYw2zURvwMIJhrybuTvJSRmSdMCqsOYPDV48wMzlmhAfaK+ZtpVIKpVeBk12KG06mFJ4VMnu8k2V3m+vkKeNDRze3JJgurxkXkunBzIxJrE0DVaocb80CoavqYqof3vbXTHCtt8eW92UGne94tVEDsvaoVY/UugYty3iW6YuZ6FxOqCF4Ba80zgMAqAxO86pS/hq9gKp1nMNx0x6jUnqVOjNZW8/y+lvfMaKmSXgtcxEKv4oCR8VQxs1rjrC9dhbNSCGyV8x+JjkBqdeVPj/IygIPCgUm8Y5LWKgHIWm3M779c1CieQj1thp8BaasmYlR4Cq/fA/rXSymAC1e+xgUUsbSJACc7WGlxWhXyq/4YSv7J8F26tXLq/cBvs36ZhNYPbw9PBucf2jEp6xebfjQAAAAASUVORK5CYII=) center center no-repeat;
    background-size: contain;
}

@-webkit-keyframes slideInRight {
    0% {
        -webkit-transform: translate3d(100%,0,0);
        transform: translate3d(100%,0,0);
        visibility: visible
    }

    100% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0)
    }
}

@keyframes slideInRight {
    0% {
        -webkit-transform: translate3d(100%,0,0);
        transform: translate3d(100%,0,0);
        visibility: visible
    }

    100% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0)
    }
}

.slideInRight {
    -webkit-animation-name: slideInRight;
    animation-name: slideInRight
}

.animated {
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

@-webkit-keyframes slideInLeft {
    0% {
        -webkit-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0);
        visibility: visible
    }

    100% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0)
    }
}

@keyframes slideInLeft {
    0% {
        -webkit-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0);
        visibility: visible
    }

    100% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0)
    }
}

.slideInLeft {
    -webkit-animation-name: slideInLeft;
    animation-name: slideInLeft
}

@-webkit-keyframes slideOutLeft {
    0% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0)
    }

    100% {
        visibility: hidden;
        -webkit-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0)
    }
}

@keyframes slideOutLeft {
    0% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0)
    }

    100% {
        visibility: hidden;
        -webkit-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0)
    }
}

.slideOutLeft {
    -webkit-animation-name: slideOutLeft;
    animation-name: slideOutLeft
}

@-webkit-keyframes slideOutRight {
    0% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0)
    }

    100% {
        visibility: hidden;
        -webkit-transform: translate3d(100%,0,0);
        transform: translate3d(100%,0,0)
    }
}

@keyframes slideOutRight {
    0% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0)
    }

    100% {
        visibility: hidden;
        -webkit-transform: translate3d(100%,0,0);
        transform: translate3d(100%,0,0)
    }
}

.slideOutRight {
    -webkit-animation-name: slideOutRight;
    animation-name: slideOutRight
}

</style>