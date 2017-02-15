<template>
    <div>
    <searchBar></searchBar>
<section class="searchcontent">
        <div class="search-list">
            <ul>
                <li v-for="item in items">
                    <div class="list-item">
                        <div class="p">
                            <a :href="item.link" title="">
                                <img class="p-pic" :src="item.image" style="visibility: visible;">
                                <span class="flag c-icon-pt">
									</span>
                            </a>
                        </div>
                        <div class="d">
                            <a href="item.link" title="">
                                <h3 class="d-title">{{item.title}}</h3>
                            </a>
                            <p class="d-price">
                                <em class="h">
									<span class="price-icon">
									¥</span>
									<span class="font-num">
									{{item.price}}</span>
									</em>
                                <del>
                                    <span class="price-icon">
									¥</span>
                                    <span class="font-num">
									{{item.price_fake}}</span>
                                </del>
                            </p>
                            <div class="d-main">
                                <p class="d-freight">运费{{item.freight}}</p>
                                <p class="d-num">
                                    <span class="font-num">{{item.pay_num}}</span> 人付款
                                </p>
                                <p class="d-area">
                                    {{item.area}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="icons-group">
                    </div>
                </li>
            </ul>
        </div>
        
</section>

</div>
</template>
<script>
    import searchBar from '../common/SearchBar'
    export default {
        data() {
            return {
                items: [{
                    link: '//detail.m.tmall.com/item.htm?id=538459397705&amp;abtest=7&amp;rn=71fe072d41a9a3c6586d895297db927c&amp;sid=61ee03f344dabcdfab884b3fa84d3a45',
                    image: '//gw3.alicdn.com/bao/uploaded/i4/TB18bnOPXXXXXbbXVXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
                    title: '康王复方酮康唑发用洗剂100ml止痒去头屑头皮屑康王洗发水',
                    price: 32,
                    price_fake: 36,
                    freight: 5.00,
                    pay_num: 14967,
                    area: '广州'
                }, {
                    link: '//detail.m.tmall.com/item.htm?id=538459397705&amp;abtest=7&amp;rn=71fe072d41a9a3c6586d895297db927c&amp;sid=61ee03f344dabcdfab884b3fa84d3a45',
                    image: '//gw3.alicdn.com/bao/uploaded/i4/TB18bnOPXXXXXbbXVXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
                    title: '康王复方酮康唑发用洗剂100ml止痒去头屑头皮屑康王洗发水',
                    price: 32,
                    price_fake: 36,
                    freight: 5.00,
                    pay_num: 14967,
                    area: '广州'
                }, {
                    link: '//detail.m.tmall.com/item.htm?id=538459397705&amp;abtest=7&amp;rn=71fe072d41a9a3c6586d895297db927c&amp;sid=61ee03f344dabcdfab884b3fa84d3a45',
                    image: '//gw3.alicdn.com/bao/uploaded/i4/TB18bnOPXXXXXbbXVXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
                    title: '康王复方酮康唑发用洗剂100ml止痒去头屑头皮屑康王洗发水',
                    price: 32,
                    price_fake: 36,
                    freight: 5.00,
                    pay_num: 14967,
                    area: '广州'
                }, {
                    link: '//detail.m.tmall.com/item.htm?id=538459397705&amp;abtest=7&amp;rn=71fe072d41a9a3c6586d895297db927c&amp;sid=61ee03f344dabcdfab884b3fa84d3a45',
                    image: '//gw3.alicdn.com/bao/uploaded/i4/TB18bnOPXXXXXbbXVXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
                    title: '康王复方酮康唑发用洗剂100ml止痒去头屑头皮屑康王洗发水',
                    price: 32,
                    price_fake: 36,
                    freight: 5.00,
                    pay_num: 14967,
                    area: '广州'
                }, {
                    link: '//detail.m.tmall.com/item.htm?id=538459397705&amp;abtest=7&amp;rn=71fe072d41a9a3c6586d895297db927c&amp;sid=61ee03f344dabcdfab884b3fa84d3a45',
                    image: '//gw3.alicdn.com/bao/uploaded/i4/TB18bnOPXXXXXbbXVXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
                    title: '康王复方酮康唑发用洗剂100ml止痒去头屑头皮屑康王洗发水',
                    price: 32,
                    price_fake: 36,
                    freight: 5.00,
                    pay_num: 14967,
                    area: '广州'
                }, {
                    link: '//detail.m.tmall.com/item.htm?id=538459397705&amp;abtest=7&amp;rn=71fe072d41a9a3c6586d895297db927c&amp;sid=61ee03f344dabcdfab884b3fa84d3a45',
                    image: '//gw3.alicdn.com/bao/uploaded/i4/TB18bnOPXXXXXbbXVXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
                    title: '康王复方酮康唑发用洗剂100ml止痒去头屑头皮屑康王洗发水',
                    price: 32,
                    price_fake: 36,
                    freight: 5.00,
                    pay_num: 14967,
                    area: '广州'
                }, {
                    link: '//detail.m.tmall.com/item.htm?id=538459397705&amp;abtest=7&amp;rn=71fe072d41a9a3c6586d895297db927c&amp;sid=61ee03f344dabcdfab884b3fa84d3a45',
                    image: '//gw3.alicdn.com/bao/uploaded/i4/TB18bnOPXXXXXbbXVXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
                    title: '康王复方酮康唑发用洗剂100ml止痒去头屑头皮屑康王洗发水',
                    price: 32,
                    price_fake: 36,
                    freight: 5.00,
                    pay_num: 14967,
                    area: '广州'
                }, {
                    link: '//detail.m.tmall.com/item.htm?id=538459397705&amp;abtest=7&amp;rn=71fe072d41a9a3c6586d895297db927c&amp;sid=61ee03f344dabcdfab884b3fa84d3a45',
                    image: '//gw3.alicdn.com/bao/uploaded/i4/TB18bnOPXXXXXbbXVXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
                    title: '康王复方酮康唑发用洗剂100ml止痒去头屑头皮屑康王洗发水',
                    price: 32,
                    price_fake: 36,
                    freight: 5.00,
                    pay_num: 14967,
                    area: '广州'
                }, {
                    link: '//detail.m.tmall.com/item.htm?id=538459397705&amp;abtest=7&amp;rn=71fe072d41a9a3c6586d895297db927c&amp;sid=61ee03f344dabcdfab884b3fa84d3a45',
                    image: '//gw3.alicdn.com/bao/uploaded/i4/TB18bnOPXXXXXbbXVXXXXXXXXXX_!!0-item_pic.jpg_210x210.jpg',
                    title: '康王复方酮康唑发用洗剂100ml止痒去头屑头皮屑康王洗发水',
                    price: 32,
                    price_fake: 36,
                    freight: 5.00,
                    pay_num: 14967,
                    area: '广州'
                }]
            }
        },
        components: {
            searchBar
        }
    }
</script>
<style scoped>
    .search-list {
        background: #f9f9f9;
    }
    
    li {
        min-height: 160px;
        padding: 12px 6px;
        border-bottom: 1px solid #dbdbdb;
        position: relative;
        list-style: none;
    }
    
    .list-item {
        display: -webkit-box;
    }
    
    li .p {
        display: inline-block;
        text-align: center;
        overflow: hidden;
    }
    
    .p {
        width: 200px;
        height: 200px;
        margin-right: 20px;
        margin-left: 16px;
    }
    
    .flag.c-icon-pt {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkFCMjUyMDRDMDVEMTFFMjg0NDRGN0RDNUUzOUNDRDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkFCMjUyMDVDMDVEMTFFMjg0NDRGN0RDNUUzOUNDRDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyQUIyNTIwMkMwNUQxMUUyODQ0NEY3REM1RTM5Q0NENCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyQUIyNTIwM0MwNUQxMUUyODQ0NEY3REM1RTM5Q0NENCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnIfiCwAAAYWSURBVHjazJh7bFNV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) no-repeat 0 0;
        background-size: contain;
        position: absolute;
        width: 40px;
        height: 40px;
        left: 0;
        top: 0;
    }
    
    a {
        color: #3d4245;
        text-decoration: none;
    }
    
    li {
        text-align: justify;
    }
    
    li .p a {
        line-height: 160px;
        display: inline-block;
        position: relative;
    }
    
    .d {
        margin: 4px 15px 6px 0;
        -webkit-box-flex: 1;
    }
    
    li .d-title {
        line-height: 44px;
        margin-bottom: 6px;
        position: relative;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
        color: #4b566a;
        font-size: 28px;
        height: 88px;
    }
    
    li .d p {
        line-height: 48px;
        color: #999;
    }
    
    .h {
        color: #eb5211;
    }
    
    li .d .d-price .h span {
        font-size: 32px;
        font-style: normal;
    }
    
    .search-list .price-icon {
        font-family: arial;
    }
    
    .search-list .font-num {
        font-family: avenir arial;
    }
    
    .d .d-price del span {
        font-size: 28px;
        margin-left: 5px;
    }
    
    .d .d-main {
        display: -webkit-box;
        margin-top: -2px;
        height: 40px;
        overflow: hidden;
    }
    
    .d .d-main p {
        font-size: 24px;
        overflow: hidden;
    }
    
    .d .d-main .d-num {
        -webkit-box-flex: 1;
        text-align: center;
    }
    
    .d-num span {
        font-size: 24px;
    }
    
    .d .d-main .d-area {
        text-align: right;
    }
</style>