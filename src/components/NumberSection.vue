<template>
  <section class="section section-number">
    <div class="container">
      <hooper class="h-auto" :itemsToShow="4" :infiniteScroll="true">
        <slide  v-for="(card, index) in cards" :key="index">
          <div class="box-card">
            <div class="box-card__img box-card__img_transparent text-white">
              <span>{{card.number}}</span>
            </div>
            <div class="box-card__title text-white">
              {{card.title}}
            </div>
            <p class="box-card__p text-white">
              {{card.p}}
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
  name: 'NumberSection',
  components:{
    Hooper,
    Slide
  },
  data() {
    return {
      cards: [
        {
          number:"507",
          title:"Our Pupils",
          p: "Pulvinar forte maestro node terminal est elipsis prism."
        },
        {
          number:"235",
          title:"Teaching Hours",
          p: "Elipsis morbi nulla a metro interdum vitae elite."
        },
        {
          number:"100%",
          title:"Satisfied Parents",
          p: "Elementum pulvinar detos diaspis movum blandit."
        },
        {
          number:"1050",
          title:"Meals Per Year",
          p: "Pulvinar forte maestro node terminal est elipsis prism."
        },
        {
          number:"$15",
          title:"Morning Session",
          p: "Elipsis morbi nulla a metro interdum vitae elite."
        },
        {
          number:"$25",
          title:"Full Daycare",
          p: "Elementum pulvinar detos diaspis movum blandit."
        }
      ]
    }  
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.section-number{
  padding: 50px 0;
  background-image: url('../assets/section-number/background.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.box-card__img_transparent{
  border: 2px solid white;
}

.box-card__img_transparent span{
  font-size: 2.5rem;
  font-weight: 300;
}
</style>
