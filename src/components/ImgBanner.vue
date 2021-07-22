<template>
  <section class="section section-img-banner">
    <div v-for="(item, index) in imgs" :key="index" class="h-100 w-25 d-inline-block">
      <img :src="item" class="w-100">
    </div>
  </section>
</template>

<script>

export default {
  name: 'ImgBanner',
  data() {
    return {
      imgs:[
        require('../assets/classes-section/class_01-690x506.jpg'),
        require('../assets/classes-section/class_02-690x506.jpg'),
        require('../assets/classes-section/class_03-690x506.jpg'),
        require('../assets/classes-section/class_04-690x506.jpg'),
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
