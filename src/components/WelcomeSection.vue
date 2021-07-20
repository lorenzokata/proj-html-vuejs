<template>
  <section class="section section-welcome">
    <div class="container text-center">

      <h2 class="section-title">Welcome to Fable</h2>
      <p class="section-subtitle">
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
            <div class="box-card__title">
              Morbi Etos
            </div>
            <p class="box-card__p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora illo architecto ipsum, ex similique?
            </p>
          </div>
          <!-- seconda card -->
          <div class="box-card">
            <div class="box-card__img box-card__img_violet">
              <img src="@/assets/section-welcome/stroller_alt.png" alt="schoolbag_alt">
            </div>
            <div class="box-card__title">
              Morbi Etos
            </div>
            <p class="box-card__p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora illo architecto ipsum, ex similique?
            </p>
          </div>
          <!-- terza card -->
          <div class="box-card">
            <div class="box-card__img box-card__img_orange">
              <img src="@/assets/section-welcome/globe_alt.png" alt="schoolbag_alt">
            </div>
            <div class="box-card__title">
              Morbi Etos
            </div>
            <p class="box-card__p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora illo architecto ipsum, ex similique?
            </p>
          </div>
          <!-- quarta card -->
          <div class="box-card">
            <div class="box-card__img box-card__img_violet">
              <img src="@/assets/section-welcome/bell_alt.png" alt="schoolbag_alt">
            </div>
            <div class="box-card__title">
              Morbi Etos
            </div>
            <p class="box-card__p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora illo architecto ipsum, ex similique?
            </p>
          </div>

        </div>
      </div>
    </div>
    <div class="section__lower-section">
      <div class="container">

        <div class="section__lower-section__box">

          <div class="section__lower-section__box__left">
            <button v-for="(content, index) in contentActive" :key="index">{{content.name}}</button>
          </div>

          <div class="section__lower-section__box__right">

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
          active: true,
          name: 'Overview'
        },
        {
          active: false,
          name: 'Our Mission'
        },
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
