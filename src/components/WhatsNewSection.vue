<template>
  <section class="section section-whats-new">
    <div class="container pb-4">
      <!-- titolo -->
      <div class="text-center">
        <h2 class="section-title">What's New</h2>
        <p class="standard-p">
          Keep up to date with the latest news
        </p>
        <img src="@/assets/section-welcome/header_divider.png" class="section-divider" alt="section header divider">
      </div>
      <!-- paragrafo -->
      <div class="row g-5 mb-5">
        <div class="col">
          <div class="paragraph-title">
            We provided four classes with nine to twenty children each aged twelve month to five years of age.
          </div>
        </div>
        <div class="col">
          <div class="standard-p">
            Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis luctus. Urna eget lacinia eleifend praesent luctus a arcu quis facilisis venenatis. Aenean interdum, nibh vitae sodales, magna ante feugiat elit maecenas.
          </div>
        </div>
      </div>

      <!-- card activity -->
      <div class="row row-cols-3 g-5 mt-2 mb-5">
        <div v-for="(item, index) in activityCards" :key="index"  class="col">
          <div class="card-box">

            <div class="card-box__date mb-4">
              {{item.date}}
            </div>

            <div class="card-box__img mb-4">
              <img :src="item.srcImg" class="position-relative w-100">
              <div class="number-absolute position-absolute right-0 bottom-0 p-3 text-white">{{item.number}}</div>
            </div>

            <div class="standard-card-title mb-4">
              {{item.title}}
            </div>

            <div class="standard-p mb-4">
              {{item.p}}
            </div>

            <div class="card-box__tag pt-3">
              <span class="pe-3">
                <img class="pe-1" src="@/assets/whats-new-section/author.png">
                Anna Brown
              </span>
              <span>
                <img class="pe-1" src="@/assets/whats-new-section/category.png">
                {{item.category}}
              </span>
            </div>

          </div>
        </div>
      </div>

      <!-- button -->
      <div class="text-center">
        <button class="custom-button text-uppercase p-3 text-center">
          <span class="pe-2">Go to blog</span>
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>

    </div>

    <!-- maps -->

    <div class="maps-container">

    </div>

  </section>
</template>

<script>
export default {
  name: 'WhatsNewSection',
  data() {
    return {
      activityCards:[
        {
          date:'October 03, 2014',
          srcImg:require('../assets/whats-new-section/blog_08.jpg'),
          title:'Drawing and Painting Lessons',
          p:'Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum',
          number: '64',
          category: 'Events, Fun'
        },
        {
          date:'October 03, 2014',
          srcImg:require('../assets/whats-new-section/blog_09.jpg'),
          title:'Teacher',
          p:'Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum',
          number: '',
          category: 'Event, Fun'
        },
        {
          date:'September 20, 2014',
          srcImg:require('../assets/whats-new-section/blog_10.jpg'),
          title:'Teacher',
          p:'Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum',
          number: '',
          category: 'Event, Fun'
        },
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.card-box__tag{
  border-top: 1px solid lightgrey;
}

.card-box__tag img{
  width: 16px;
  height: 16px;
}

.maps-container{
  height: 400px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('../assets/maps/maps.png');
}
</style>