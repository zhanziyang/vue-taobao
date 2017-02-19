<template lang="jade">
    .slider-arrows-wrap
      span.slider-arrow.slider-arrow-left(@click="turn(-1)") &lt;
      span.slider-arrow.slider-arrow-right(@click="turn(1)") &gt;
</template>

<script>
    export default {
        name: 'SliderArrows',
        props: {
            turn: {
                type: Function,
                required: true
            }
        }
    }
</script>

<style scoped>
    span {
        font-size: 14px;
    }
</style>