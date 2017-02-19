<template>
  <div class="shopList">
    <div class="mod-shop-card border border-bottom clearfix" v-for="i in 10">
      <a class="shop-link J_Link J_OpenWV" href="https://h5.m.taobao.com/app/daojia/www/shop/index.html?shop_id=143330041&amp;cityCode=350200&amp;longitude=118.11195110000001&amp;latitude=24.4600907&amp;scm=1007.13642.52243.100200300000000">
        <div class="shop-top clearfix">
          <div class="mod-left">
            <div class="shop-logo img-wrap">
              <img src="//gw.alicdn.com/TLife/1479960845833/TB1Cf1zOpXXXXcyapXXlRNh3pXX_160x160xzQ75s100.jpg_.webp" alt="商家logo" class="shop-logo J_LazyLoad"
                data-network="Q75s100,Q50s100" data-srcset="//gw.alicdn.com/TLife/1479960845833/TB1Cf1zOpXXXXcyapXXlRNh3pXX_72x72xz.jpg 1x,//gw.alicdn.com/TLife/1479960845833/TB1Cf1zOpXXXXcyapXXlRNh3pXX_160x160xz.jpg 2x,//gw.alicdn.com/TLife/1479960845833/TB1Cf1zOpXXXXcyapXXlRNh3pXX_270x270xz.jpg 3x"
                data-lazyimg="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII="
                data-bestsrc="//gw.alicdn.com/TLife/1479960845833/TB1Cf1zOpXXXXcyapXXlRNh3pXX_160x160xzQ75s100.jpg_.webp"></div>
          </div>
          <div class="mod-right">
            <div class="info-detail">
              <div class="info-item">
                <p class="shop-name ellipsis name-short"><span class="name-text">厦门爱尚花艺花店</span></p>
                <div class="item-right"><span class="distance highlight-distance has-mid-line"><span class="mid-line"></span><span class="number">5.5</span>
                  <!-- react-text: 36 -->千米
                  <!-- /react-text -->
                  </span>
                </div>
              </div>
              <div class="info-item"><span class="i-star"><span class="i-star-level" style="width: 100%;"></span></span><span class="sold-count"><span class="highlight-sold"><!-- react-text: 42 -->月销<!-- /react-text --><span class="number">20</span>
                <!-- react-text: 44 -->笔
                <!-- /react-text -->
                </span>
                </span>
                <div class="item-right"><span class="arrival-time">30分钟送达</span></div>
              </div>
              <div class="info-item info-bottom"><span class="delivery-amount"><span class="highlight-delivery"><!-- react-text: 50 --><!-- /react-text --><span class="price-icon">¥</span><span
                  class="number">0</span>
                <!-- react-text: 53 -->
                <!-- /react-text -->
                </span>
                <!-- react-text: 54 -->起送
                <!-- /react-text -->
                </span><span class="delivery-fee has-mid-line"><span class="mid-line"></span><span>免配送费</span></span><span class="shop-tag item-right"></span></div>
            </div>
            <div class="info-item mod-activity">
              <ul class="activity-list J_ActivityList">
                <li class="activity-item ellipsis clearfix J_ActivityItem"><img src="//gw.alicdn.com/tps/TB1rFwhKFXXXXXEXXXXXXXXXXXX-188-42.png" class="i-activity-icon"><span class="activity-desc">满128减10元;满218减20元;满330减30元</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mod-bottom"></div>
      </a>
    </div>
  </div>
</template>

<style scoped>
  .mod-shop-card.border {
    border-color: #e8e8e8;
  }
  
  .border {
    border-width: 1px;
  }
  
  .border-bottom,
  .mod-border {
    border-bottom: 1px solid #ddd;
  }
  
  .mod-shop-card {
    position: relative;
    padding: 15px 10px 15px 9px;
    box-sizing: border-box;
    font-size: 12px;
    background: #fff;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
  
  .clearfix:after,
  .clearfix:before {
    content: ' ';
    display: table;
  }
  
  .mod-shop-card .shop-link {
    display: block;
    text-decoration: none;
  }
  
  .mod-shop-card .mod-left {
    position: relative;
    float: left;
    vertical-align: top;
    width: 65px;
  }
  
  .mod-shop-card .shop-logo {
    float: left;
    vertical-align: top;
    width: 65px;
    height: 65px;
    border-radius: 3px;
  }
  
  .img-wrap {
    overflow: hidden;
    background-color: #f7f7f7;
  }
  
  .mod-shop-card .shop-logo img {
    border-radius: 3px;
  }
  
  .mod-shop-card .shop-logo {
    float: left;
    vertical-align: top;
    width: 65px;
    height: 65px;
    border-radius: 3px;
  }
  
  .mod-shop-card .mod-right {
    margin-left: 75px;
  }
  
  .mod-shop-card .info-detail {
    position: relative;
  }
  
  .mod-shop-card .info-item {
    position: relative;
    margin-bottom: 4px;
    line-height: 16px;
    color: #666;
  }
  
  .mod-shop-card .shop-name.name-short {
    max-width: 200px;
  }
  
  .mod-shop-card .item-right {
    position: absolute;
    right: 0;
    top: 0;
  }
  
  .mod-shop-card .has-mid-line {
    position: relative;
    padding-left: 15px;
  }
  
  .mod-shop-card .item-right .mid-line {
    display: none;
  }
  
  .number,
  .price {
    font-family: Helvetica, Arial, sans-serif;
  }

  .mod-shop-card .shop-name {
    height: 22.5px;
    font-size: 16px !important;
    line-height: 22px;
    color: #333;
    font-weight: 500;
}

.ellipsis {
    -webkit-line-clamp: 1;
}

.d-ellipsis, .ellipsis {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
}
  
  .mod-shop-card .i-star {
    margin-top: -3px;
    margin-right: 6px;
  }
  
  .i-star-level {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAASCAMAAACNZRtzAAAAYFBMVEUAAAD/tRf/qAL/qAP/pwL/pwP/qAT/pwP/qgX/tiT/qAL/qAP/pwP/qAP/qQL/qAP/qwb/qg7/pwL/qAL/qAL/qAL/pwP/qAP/pwL/qgP/qQP/qgP/pwT/qAb/qAf/pwLYXzFNAAAAH3RSTlMACtq/38qHXzUH66ull3RkKRL34dLPxqF3UU1LQywjrttEywAAAIVJREFUeAG9yMUBwzAAA0AZwlxm7T9lubWdv3LPQ+AcAvkeyZN8g4x0y+2FT6V4A/fqZpE15bDnW1eURry5ZcLmyoXnjFcubpvZjsoFTBvvbtLuUx+2qeQLhB6h32vos35RhD7oF90rrOVTq19kZD0AxZrc6jb0Kjd4qvra6hfVhC9jpPsAFlRZcPIklMwAAAAASUVORK5CYII=) 0 center no-repeat;
    background-size: 55px 9px;
  }
  
  .i-star,
  .i-star-level {
    height: 9px;
    display: inline-block;
  }
  
  .mod-shop-card .info-bottom {
    margin-bottom: 0;
  }
  
  .mod-shop-card .delivery-amount {
    line-height: 22.5px;
  }
  
  .mod-shop-card .price-icon {
    padding-right: 1px;
  }
  
  .mod-shop-card .has-mid-line {
    position: relative;
    padding-left: 15px;
  }
  
  .mod-shop-card .mid-line {
    position: absolute;
    left: 0;
    top: 3px;
    width: 5px;
    height: 9.5px;
    margin-right: 4px;
    margin-left: 6px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAATCAQAAAAD4lRlAAAAkUlEQVR4AWNABfclbqU9FkITvNV049l/ZhSh/0w3H91sR1N32/3G/7uqaII3Vt08hCZ0U+TGz5vx6Jbk3/j0ghtd86Wbs9A1m974f9sCXd2Mm1fRhJ5x3fx4sxhdc+yNX3fE0DUfuLkOTeiOyo3/t7zRNbfeeIoeDMw3nt5sQ/eJN5ZguLnu5kF0S8Ru/EIPBgAfLEcdx0zLkAAAAABJRU5ErkJggg==) 0 center no-repeat;
    background-size: contain;
  }
  
  .mod-shop-card .mod-activity {
    position: relative;
    margin-top: 7px;
    margin-bottom: 0;
    padding-top: 2px;
    font-size: 11px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAACCAQAAADlLaTJAAAAFElEQVQI12N48R8EGYCAdBYDJZoB2lBEfRJ0AjsAAAAASUVORK5CYII=) repeat-x;
    background-size: 15px 1px;
  }
  
  .mod-shop-card .activity-list {
    transition: .2s height ease;
    -webkit-transition: .2s height ease;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .mod-shop-card .activity-item {
    width: 100%;
    padding: 6px 10px 0 0;
    box-sizing: border-box;
    line-height: 14px;
  }
  
  .mod-shop-card .i-activity-icon {
    display: inline-block;
    height: 14px;
    width: auto;
    margin-right: 4px;
  }
  
  .mod-shop-card .activity-desc {
    vertical-align: middle;
  }

  .i-star {
    width: 55px;
    line-height: 9px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAASCAQAAAAQsiPKAAAA9UlEQVR4Ad3MA0wGQBQH8JddUzOzxjCzMTcr18w4e30z05zd7Gz932V7yvNyXZ/9fTPu3unhtyPPkAGYx7wM8BhoYInLISG5WEdLvGXGixpakQ9pWTu5ulniGRvmMW3sXtRunqhDH6Qd/3EPV4scRCptYcAl/0F6X/zLFzCoaolvIf0vvlXVEhKx7xdfIU1Va+KRGPZFeU3Ek6rWFtzilU7dhJPylmQQvj2xyCANLO1lQXpZhTpY4mpvWLTpYIk77eQUp7acB3SwhE3z+IEbZKAMFJW4M9c7OlgTfhftpzG2+iIMTXjFqQ6WjkIR5/FB5F6UuvYfzDoUWtMfkqYAAAAASUVORK5CYII=) 0 center no-repeat;
    background-size: 55px 9px;
}
</style>