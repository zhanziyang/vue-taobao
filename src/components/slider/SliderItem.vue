<template lang="jade">
    li.slider-item(:style="{'width': `${100 / this.count}%`}")
      img(:src="item.src", :alt="item.alt")
</template>

<script>
    export default {
        name: 'SliderItem',
        props: {
            count: {
                type: Number,
                required: true
            },
            item: {
                type: Object,
                required: true
            }
        }
    }
</script>