<template>
  <section class="section section-contact">
    <div class="container pb-4">
      <!-- titolo -->
      <div class="text-center">
        <h2 class="section-title">Contact Us</h2>
        <p class="standard-p">
          Our postal address and contact details
        </p>
        <img src="@/assets/section-welcome/header_divider.png" class="section-divider" alt="section header divider">
      </div>

      <!-- info -->
      <div class="py-4">

        <div class="row row-cols-4 mb-5 g-5">
          <div v-for="(item, index) in infoContact" :key="index"  class="col">
            <div class="card-box d-flex flex-column align-items-center justify-content-between">

              <div class="custom-card__img bg-white">
                <img :src="item.imgSrc">
              </div>

              <div class="standard-card-title text-center">{{item.title}}</div>

              <div class="standard-p m-0 text-center">
                {{item.p1}} <br>
                {{item.p2}} <br>
                {{item.p3}} <br>
              </div>

            </div>
          </div>
        </div>

        <div class="row row cols-2 mt-5 g-5">
          <div class="col">
            <div class="form-box d-flex flex-column justify-content-between p-2">
              <div class="form-box__name">
                <input type="text" name="name" id="name" placeholder="Your Name *" class="w-100 p-2">
              </div>
              <div class="form-box__email">
                <input type="text" name="email" id="email" placeholder="Your E-Mail*" class="w-100 p-2">
              </div>
              <div class="form-box__subject">
                <input type="text" name="subject" id="subject" placeholder="Subject" class="w-100 p-2">
              </div>
            </div>
          </div>
          <div class="col">
            <div class="form-box">
              <div class="form-box__message p-2 h-100 position-relative">
                <textarea type="text" name="message" id="message" class="w-100 h-100 p-2" placeholder="Your Message *"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- button -->
      <div class="text-center">
        <button class="custom-button text-uppercase p-3 text-center">
          <span>Send Message</span>
        </button>
      </div>


    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      infoContact:[
        {
          imgSrc:require('../assets/contact/envelope (1).png'),
          title:'Postal Address',
          p1:'Fable Care Center',
          p2:'85 Fentiman Ave',
          p3:'Ottawa, ON K1S 0T7',
        },
        {
          imgSrc:require('../assets/contact/mobile.png'),
          title:'Phone & E-mail',
          p1:'Phone: 1-800-64-38',
          p2:'Fax: 1-800-64-39',
          p3:'office@fable.com',
        },
        {
          imgSrc:require('../assets/contact/document (1).png'),
          title:'Business Hours',
          p1:'Monday – Friday',
          p2:'8.00 am – 5.00 pm',
          p3:'Weekend Closed',
        },
        {
          imgSrc:require('../assets/contact/clock.png'),
          title:'Sessions',
          p1:'Mornings, 8 am – 12 noon',
          p2:'Afternoons, 1 pm – 5 pm',
          p3:'Full Day, 8 am – 5 pm',
        },
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-box{
  height: 210px;
}
.card-box_violet{
  background-color: var(--butterfly-bush);
}
.card-box__right{
  background-image: url('../assets/classes-section/class_01-690x506.jpg');
  background-position: center;
  background-size: contain;
}
.card-box__right button{
  background-color: var(--blaze-orange);
  border: none;
}
.card-box__left__lower__left{
  border-right: 2px solid grey;
}
.section__lower-section ul{
  margin: 0px;
  padding: 0px;
  list-style: none;
}

.section__lower-section li{
  padding-left: 30px;
  margin-bottom: 10px;
  background-size: 17px 17px;
  background-repeat: no-repeat;
  background-position: left 2px;
  background-image: url('../assets/classes-section/style_1.png');
}



.form-box{
  height: 200px;
}
</style>