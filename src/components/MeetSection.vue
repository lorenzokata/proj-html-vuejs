<template>
  <section class="section section-meet">
    <div class="container pb-4">
      <!-- titolo -->
      <div class="text-center">
        <h2 class="section-title">Our Classes</h2>
        <p class="standard-p">
          Our preschool program has four dedicated classes
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

      <!-- card teacher -->
      <div class="row row-cols-2 g-5 mt-2 mb-5">
        <div v-for="(item, index) in staffCards" :key="index"  class="col">
          <div class="card-box d-flex">

            <div class="card-box__left d-flex flex-column justify-content-between h-100 w-50 pe-4 position-relative">

              <img :src="item.srcImg">
              <div class="card-box__left__name pt-4 text-center">
                {{item.name}}
              </div>
              <div class="card-box__left__job standard-p text-center">
                {{item.job}}
              </div>

              <div class="card-box-quote position-absolute d-flex justify-content-end">
                <img src="@/assets/meet-section/quote.png" alt="quote">
              </div>

            </div>

            <div class="card-box__right d-flex flex-column justify-content-end w-50">
              <!-- paragrafo -->
              <div class="standard-p pb-5">{{item.p}}</div>
              <!-- social -->
              <div class="card-box__social">
                <div v-for="(element, index) in item.social" :key="index" class="social-icon me-1 d-inline-block">
                  <img :src="element">
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>



  </section>
</template>

<script>
export default {
  name: 'MeetSection',
  data() {
    return {
      staffCards:[
        {
          name:'Ruth Richie',
          srcImg:require('../assets/meet-section/team_01.jpg'),
          job:'Teacher',
          p:'I have just finished my studies in Early Childhood Education, and I am also the kid’s yoga teacher here at Fable. I enjoy cooking, swimming and bike riding in my free time.',
          social:[
            require('../assets/meet-section/mail.png'),
            require('../assets/meet-section/facebook.png'),
            require('../assets/meet-section/pinterest.png'),
          ]
        },
        {
          name:'Katie Willmore',
          srcImg:require('../assets/meet-section/team_02.jpg'),
          job:'Assistant Teacher',
          p:'My name is Katie. I grew up and studied in Canada. This is my second year at Fable and love every minute of it, making the children’s learning experience fun.',
          social:[
            require('../assets/meet-section/dribbble.png'),
            require('../assets/meet-section/stumbleupon.png'),
            require('../assets/meet-section/instagram.png'),
          ]
        },
        {
          name:'Angelica Watson',
          srcImg:require('../assets/meet-section/team_03.jpg'),
          job:'Lead Teacher',
          p:'I hold a degree in Early Childhood Education and an advanced English language certificate. I have been working as a kindergarten teacher since 2002.',
          social:[
            require('../assets/meet-section/bing.png'),
            require('../assets/meet-section/skype.png'),
            require('../assets/meet-section/linkedin.png'),
          ]
        },
        {
          name:'Angela Lynn',
          srcImg:require('../assets/meet-section/team_04.jpg'),
          job:'Teacher',
          p:'I have completed a Graduate Diploma in Early Childhood Teaching. I have worked with children aged from six weeks to eight years. This is my second year at Fable.',
          social:[
            require('../assets/meet-section/youtube.png'),
            require('../assets/meet-section/twitter.png'),
            require('../assets/meet-section/googleplus.png'),
          ]
        },
        
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.card-box__left img{
  width: 100%;
}
.social-icon{
  background-color: var(--blaze-orange);
}
.card-box-quote{
  top: 10%;
  left: 80%;
  padding: 10px;
  width: 120px;
  border: 2px solid;
  border-color: var(--blaze-orange);
}
.card-box-quote img{
  height: 35px;
  width: 35px;
}
</style>