<template>
  <div>
  <SearchBar/>
  <Slider></Slider>
  <CatagoryList></CatagoryList>
  <CatagoryDetail/>
  <CatagoryDetail/>
  <CatagoryDetail/>
  </div>
</template>

<script>
    import CatagoryList from './CatagoryList'
    import Slider from './Slider'
    import SearchBar from './Header'
    import CatagoryDetail from './CatagoryDetail'
    export default {
        components: {
            CatagoryList,
            Slider,
            SearchBar,
            CatagoryDetail
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    div {
        height: 100%;
        background-color: rgb(238, 238, 238)
    }
</style>