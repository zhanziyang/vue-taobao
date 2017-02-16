<template>
    <div class="vertical-view">
        <h2>
            <img class="icon" src="//img.alicdn.com/tps/TB1t9n6LFXXXXaXXXXXXXXXXXXX-60-60.png">
            <span class="title">超实惠</span>
        </h2>
        <div class="stuff-plate">
            <img :src="stuff.image" alt="" v-for='stuff in stuffs'>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                stuffs: [{
                    image: '//gw.alicdn.com/tps/TB1u_5AKVXXXXaGXFXXXXXXXXXX-432-330.jpg_q50.jpg',
                    id: 1
                }, {
                    image: '//img.alicdn.com/imgextra/i4/28/TB2o7W2er4npuFjSZFmXXXl4FXa_!!2-subaru.png',
                    id: 2
                }, {
                    image: '//img.alicdn.com/imgextra/i4/28/TB2o7W2er4npuFjSZFmXXXl4FXa_!!2-subaru.png',
                    id: 3
                }, {
                    image: '//img.alicdn.com/imgextra/i4/28/TB2o7W2er4npuFjSZFmXXXl4FXa_!!2-subaru.png',
                    id: 4
                }, {
                    image: '//gw.alicdn.com/tps/TB1u_5AKVXXXXaGXFXXXXXXXXXX-432-330.jpg_q50.jpg',
                    id: 5
                }, {
                    image: '//img.alicdn.com/imgextra/i4/28/TB2o7W2er4npuFjSZFmXXXl4FXa_!!2-subaru.png',
                    id: 4
                }, {
                    image: '//img.alicdn.com/imgextra/i4/28/TB2o7W2er4npuFjSZFmXXXl4FXa_!!2-subaru.png',
                    id: 4
                }, {
                    image: '//img.alicdn.com/imgextra/i4/28/TB2o7W2er4npuFjSZFmXXXl4FXa_!!2-subaru.png',
                    id: 4
                }]
            }
        }
    }
</script>

<style scoped lang="css">
    .vertical-view {
        box-sizing: border-box;
        line-height: 0;
        background-color: rgba(255, 255, 255, 0);
        margin-bottom: 0.505rem;
    }
    
    h2 {
        box-sizing: border-box;
        line-height: 0;
        height: 0.844rem;
        background-color: white;
        text-align: center;
        border-bottom: 1px solid #efefef;
    }
    
    .icon {
        height: 0.422rem;
        vertical-align: middle;
    }
    
    .title {
        box-sizing: border-box;
        line-height: 0.844rem;
        font-size: 0.569rem;
        color: #ff350e;
        background-color: transparent;
        margin-left: 0.141rem;
        width: 1.313rem;
        height: 0.844rem;
        vertical-align: middle;
    }
    
    .stuff-plate {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    }
    
    .stuff-plate img {
        flex: 1 1 0;
        height: 4.6rem;
    }
</style>