<template>
 <div>
     <slider ref="slider" :items="items" :speed="2" :delay="3" :pause="true" :autoplay="true" :dots="true" :arrows="false"></slider>
 </div>
</template>
<script>
    import Slider from './slider/Slider'
    export default {
        data() {
            return {
                items: [{
                    src: '//aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg',
                    alt: 'images-1'
                }, {
                    src: '//gw.alicdn.com/imgextra/i1/153/TB2o.OqeYxmpuFjSZJiXXXauVXa_!!153-0-yamato.jpg_q50.jpg',
                    alt: 'images-2'
                }, {
                    src: '//gw.alicdn.com/imgextra/i4/60/TB2rCRleYBmpuFjSZFuXXaG_XXa_!!60-0-yamato.jpg_q50.jpg',
                    alt: 'images-3'
                }]
            }
        },
        methods: {},
        components: {
            Slider
        }
    }
</script>
<style>

</style>