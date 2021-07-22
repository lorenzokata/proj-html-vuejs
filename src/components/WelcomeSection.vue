<template>
  <section class="section section-welcome">
    <div class="container text-center">

      <h2 class="section-title">Welcome to Fable</h2>
      <p class="standard-p">
        Fable daycare, preschool, and kindergarten
      </p>
      <img src="@/assets/section-welcome/header_divider.png" alt="section header divider">
    
    </div> 
      
    <div class="container">
      <div class="section__upper-section">
        <div class="section__upper-section__box">

          <!-- prima card -->
          <div class="box-card">
            <div class="box-card__img box-card__img_orange">
              <img src="@/assets/section-welcome/schoolbag_alt.png" alt="schoolbag_alt">
            </div>
            <div class="standard-card-title">
              Morbi Etos
            </div>
            <p class="standard-p text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora illo architecto ipsum, ex similique?
            </p>
          </div>
          <!-- seconda card -->
          <div class="box-card">
            <div class="box-card__img box-card__img_violet">
              <img src="@/assets/section-welcome/stroller_alt.png" alt="schoolbag_alt">
            </div>
            <div class="standard-card-title">
              Morbi Etos
            </div>
            <p class="standard-p text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora illo architecto ipsum, ex similique?
            </p>
          </div>
          <!-- terza card -->
          <div class="box-card">
            <div class="box-card__img box-card__img_orange">
              <img src="@/assets/section-welcome/globe_alt.png" alt="schoolbag_alt">
            </div>
            <div class="standard-card-title">
              Morbi Etos
            </div>
            <p class="standard-p text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora illo architecto ipsum, ex similique?
            </p>
          </div>
          <!-- quarta card -->
          <div class="box-card">
            <div class="box-card__img box-card__img_violet">
              <img src="@/assets/section-welcome/bell_alt.png" alt="schoolbag_alt">
            </div>
            <div class="standard-card-title">
              Morbi Etos
            </div>
            <p class="standard-p text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora illo architecto ipsum, ex similique?
            </p>
          </div>

        </div>
      </div>
    </div>

    <div class="section__lower-section">
      <div class="container">

        <div class="section__lower-section__box py-5 d-flex">

          <div class="section__lower-section__box__left pe-3 w-50">
            <ul class="mb-4">
              <li v-for="(content, index) in contentActive" :key="index">
                <button class="btn" :class="{'btn-danger': content.active, 'btn-inactive': !content.active}" @click="changeContent(index)">{{content.name}}</button>
                <span></span>
              </li>
            </ul>

            <div v-for="(content, index) in contentActive" :key="index" :class="{'d-none': !content.active}" class="section__lower-section__box__left__content d-flex flex-column align-items-start">
              <h4 class="custom-card__title" v-if="content.p">{{content.p}}</h4>
              <div v-for="(customCard, index) in content.cards" :key="index" class="custom-card d-flex align-items-center mb-4">
                <div class="custom-card__img custom-card__img-orange me-3" :class="{'custom-card__img-transparent': content.iconTransparent}">
                  <img :src="customCard.iconSrc">
                </div>
                <div class="custom-card__text d-flex flex-column align-items-start justify-content-between">
                  <h5 class="standard-card-title" >{{customCard.title}}</h5>
                  <p class="standard-p m-0">{{customCard.p}}</p>
                </div>
              </div>
            </div>

          </div>

          <div class="section__lower-section__box__right w-50">

            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                  <img src="@/assets/section-welcome/gallery1.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src="@/assets/section-welcome/gallery2.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src="@/assets/section-welcome/gallery3.jpg" class="d-block w-100" alt="...">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'WelcomeSection',
  data() {
    return {
      contentActive: [
        {
          active: false,
          iconTransparent: false,
          name: 'Overview',
          p: 'Our philosophy is learning through play as we offer a stimulating environment for children.',
          cards:[
            {
              iconSrc: require('@/assets/section-welcome/clock_alt.png'),
              title: 'Full Day Sessions',
              p: 'Pulvinar est metro ligula blandit maecenas retrum gravida cuprum. Maecenas node estibulum.'
            },
            {
              iconSrc: require('@/assets/section-welcome/diagram_alt.png'),
              title: 'Varied Classes',
              p: 'Pulvinar est metro ligula blandit maecenas retrum gravida cuprum. Maecenas node estibulum.'
            },
          ]
        },
        {
          active: true,
          iconTransparent: true,
          name: 'Our Mission',
          p: '',
          cards:[
            {
              iconSrc: require('@/assets/section-welcome/screen.png'),
              title: 'Online Access',
              p: 'Pulvinar est metro ligula blandit maecenas retrum gravida cuprum. Maecenas node estibulum.'
            },
            {
              iconSrc: require('@/assets/section-welcome/heart.png'),
              title: 'Maecenas Node',
              p: 'Pulvinar est metro ligula blandit maecenas retrum gravida cuprum. Maecenas node estibulum.'
            },
            {
              iconSrc: require('@/assets/section-welcome/lab.png'),
              title: 'Praesent Morbi',
              p: 'Pulvinar est metro ligula blandit maecenas retrum gravida cuprum. Maecenas node estibulum.'
            },
          ]
        },
      ]
    }
  },
  methods:{
    changeContent(index){
      if (!this.contentActive[index].active) {
        this.contentActive[index].active = !this.contentActive[index].active;
        let itemsWithoutCurrent = this.contentActive.filter(function(x,i) { return i != index });
        itemsWithoutCurrent.forEach(element => {
          element.active = false;
        });
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.section__lower-section__box__left{
  height: 472px;
}
.section__lower-section__box__left ul{
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  display: block;
}
.section__lower-section__box__left li{
  list-style-type: none;
  display: inline-block;
  margin-right: 20px;
}
.section__lower-section__box__left button{
  padding: 12px 25px;
  display: inline-block;
  text-decoration: none;
}

.section__lower-section__box__left button .btn-inactive{
  color: grey;
  background-color:transparent;
}

.section__lower-section__box__left__content{
  display: flex;

}
.custom-card__img-transparent{
  background-color: white;
  border: 2px solid;
  border-color: var(--blaze-orange);
}
</style>
