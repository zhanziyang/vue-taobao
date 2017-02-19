<template>
  <div>
    <meta name="viewport" content="width=375px,user-scalable=no">
    <DaoJiaHeader @location-select="handleLocationSelect"></DaoJiaHeader>
    <Main></Main>
    <Slider :show="showSlider" @cancel="handleSliderCancel"></Slider>
  </div>

</template>

<script>
  import DaoJiaHeader from './Daojia/Header'
  import Main from './Daojia/Main'
  import Slider from './Daojia/Slider'

  export default {
    data() {
      return {
        showSlider: false
      }
    },

    components: {
      Header,
      Main,
      Slider
    },

    methods: {
      handleLocationSelect() {
        this.showSlider = true
      },

      handleSliderCancel() {
        this.showSlider = false
      }
    }
  }
</script>

<style scoped type="text/css">
  
</style>