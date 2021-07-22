<template>
  <section class="section section-transparent">
    <div class="container">
      <hooper :progress="true" :autoPlay="true" :playSpeed="500000000000">
        <slide  v-for="(card, index) in cards" :key="index">
          <div class="box-card">
            <div class="custom-card__img mb-4">
              <img src="@/assets/transparent-section/quote_alt.png">
            </div>
            <div class="standard-card-title text-white mb-3">
              {{card.p}}
            </div>
            <p class="standard-p text-white">
              {{card.author}}
            </p>
          </div>
        </slide>
      </hooper>
    </div>
  </section>
</template>

<script>
import { Hooper, Slide } from 'hooper';

export default {
  name: 'TransparentSection',
  components:{
    Hooper,
    Slide
  },
  data() {
    return {
      cards: [
        {
          p:"Fable Kindergarten is a great place for my daughter to start her schooling experience. It’s welcoming and safe and my daughter loves being there.",
          author:"Matthew D. Campbell",
        },
        {
          p:"I have a 1 year old and a 5 year old who have been attending for a year now. I can not tell you how much I adore and appreciate all of the wonderful staff.",
          author:"Kenneth M. Garcia",
        },
        {
          p:"I have to say that I have 2 children ages 5 and 2 and have used various daycare’s in Kindergartens and this is by far the very best I have ever used.",
          author:"Cecil J. Kirk",
        },
        {
          p:"Fable Kindergarten is a great place for my daughter to start her schooling experience. It’s welcoming and safe and my daughter loves being there.",
          author:"Joe R. Hamblen",
        },
        {
          p:"This letter is to recognize you and your staff for doing an excellent job teaching my son. His skill level is significantly better since attending Fable.",
          author:"Tony I. Robinette",
        },
        {
          p:"I have to say that I have 2 children ages 5 and 2 and have used various daycare’s in Kindergartens and this is by far the very best I have ever used.",
          author:"Emma E. Shook",
        },
      ]
    }  
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.section-transparent{
  padding: 50px 0;
  background-image: url('../assets/transparent-section/parallax_02.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.custom-card__img{
  border: 2px solid white;
}

.standard-card-title{
  font-size: 2rem;
  font-weight: 200;
}

.hooper{
  height: auto;
}
</style>
