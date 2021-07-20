<template>
  <section class="dividing-bar">
    <div class="container">
      <div class="dividing-bar__box d-flex align-items-center justify-content-between">
        <h3 class="dividing-bar__box__title m-0">How to Enroll Your Child to a Class</h3>
        <button class="text-uppercase text-white p-3">
          <span class="pe-3">Learn More</span>
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'DividingBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.dividing-bar{
  background-image: url('../assets/dividingbar/pattern.png');
  padding: 45px 25px;
}

.dividing-bar__box__title{
  font-size: 38px;
  color: white;
  font-weight: 300;
}

button{
  border: 3px solid white;
  background-color:transparent;
  font-weight: 600;
}

</style>
