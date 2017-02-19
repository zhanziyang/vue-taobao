<template>
  <header class="J_Mod mod-header" id="J_Header" style="display: block;">
    <div class="mod-location" id="J_LocationTrigger"><span class="location-name ellipsis" id="J_LocName">文屏路立交</span><i class="i-down"></i></div>
    <a class="mod-search J_Link J_OpenWV" href="https://h5.m.taobao.com/app/daojia/www/search/index.html?loc=%E5%8E%A6%E9%97%A8&amp;cityCode=350200&amp;longitude=118.11195110000001&amp;latitude=24.4600907"><i class="i-zoom"></i><span class="search-placeholder">搜索附近门店</span></a>
    <div class="mod-back" id="J_GoBack"><i class="i-back"></i></div>
  </header>
</template>

<style scoped lang="scss">
  .mod-header {
    position: relative;
    width: 100%;
    height: 84px;
    overflow: hidden;
    background: #EC524F;
    color: #fff;
    display: none;
  }
  
  .mod-location {
    margin-top: 10px;
    width: 100%;
    height: 28px;
    line-height: 28px;
    color: #fff;
    font-weight: 700;
  }
  
  .mod-location .location-name {
    max-width: 250px;
    font-size: 14.0625px;
  }
  
  .mod-location .i-down,
  .mod-location .location-name {
    display: inline-block;
    height: 28px;
    vertical-align: middle;
  }
  
  .ellipsis {
    -webkit-line-clamp: 1;
  }
  
  .d-ellipsis,
  .ellipsis {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .mod-location .i-down {
    width: 9px;
    margin-left: 10px;
}

  .i-down {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAALCAQAAADYHhWPAAAAWElEQVR4AXXKsREBABTA0L8CgBKA/ecAAGqghjIAkJM2LyJokYk/UaB2JzuGTyYyZUU1yFwIZg8CHZIRZiaXzEzMRMxMzKYsvonZlGv9D+JocOJASUNM5Axk8n4aqETMUwAAAABJRU5ErkJggg==) center center no-repeat;
    background-size: contain;
}
  
  .mod-search {
    display: block;
    position: relative;
    margin: 8px 12px;
    height: 20px;
    line-height: 20px;
    padding: 5px;
    text-align: center;
    font-size: 14px;
    background-color: #fafafa;
    color: #9b9b9b;
    border-radius: 4px;
    text-decoration: none;
  }
  
  .mod-search .i-zoom {
    display: inline-block;
    width: 14px;
    height: 14px;
    vertical-align: middle;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAQAAADYBBcfAAABWElEQVR4AcWUKXTCQBCG498qFDa6p6vGIePQ8SI6XqCRvPmn3DcOFYWLQ6J729Vx27eh14RNu64/BpL55h4CKb5FihyPVEDjwBNECxU4JaGMzNnnjeNfYSTWDBp9bg/ChRo0y+iH8ul+0KjDeqVB79wAHXojg8dBWBetQOR2OmgiJ4PDWcK4tNEkJrVQONp8quDO8dDlvBiElUfQ7uIF2q+4R0oG/cBjWLZFP8E9GW4HHsIjmUFY/ekDZiIEFWQWygfkCRmOv/1oX5C2ZND5Bu2ELn1AuwbUEgkg+RtbqEpR6NglrgeEXS48QYsU6peubE11BY7uBgmbx4VyeKNtPYqIjDOrQQhdf65ISqy4v3Nv4lt5/4mMSy3kJ8y+daKDJrKTCTL0kHKXJ9aZBRDxLbREhbiNPRXyrwrpKYdPlG8DtwYNREi4i5RjuVES9dd/oztvQKC7hXoHZikzJ+SlphEAAAAASUVORK5CYII=) center center no-repeat;
    background-size: contain;
  }
  
  .mod-search .search-placeholder {
    vertical-align: middle;
    padding-left: 5px;
  }
</style>