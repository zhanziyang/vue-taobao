<template>
  <div>
    <meta name="viewport" content="width=375px,user-scalable=no">
    <Header @location-select="handleLocationSelect"></Header>
    <Main></Main>
    <Slider :show="showSlider"></Slider>
  </div>

</template>

<script>
  import Header from './Daojia/Header'
  import Main from './Daojia/Main'
  import Slider from './Daojia/Slider'

  export default {
    components: {
      Header,
      Main,
      Slider
    },

    data() {
      return {
        showSlider: false
      }
    },

    handleLocationSelect() {
      this.showSlider = true
    }
  }
</script>

<style scoped type="text/css">
  
</style>