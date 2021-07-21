<template>
  <section class="section section-classes">
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
      <!-- card viola -->
      <div class="row row-cols-2 g-5 mb-5">
        <div v-for="(item, index) in classesCards" :key="index"  class="col">
          <div class="card-box d-flex">
            <div class="card-box__left d-flex flex-column justify-content-between p-4 h-100 w-50">
              <div class="card-box__left__upper">
                <div class="standard-card-title text-white">
                  {{item.title}}
                </div>
                <div class="standard-p text-white">
                  Class name
                </div>
              </div>
              <div class="card-box__left__lower d-flex text-center standard-p">
                <div class="card-box__left__lower__left w-50">
                  <span class="d-block text-white">{{item.oldness}}</span>
                  <span class="d-block text-white">Month olds</span>
                </div>
                <div class="card-box__left__lower__right w-50">
                  <span class="d-block text-white">{{item.classSize}}</span>
                  <span class="d-block text-white">Class size</span>
                </div>
              </div>
            </div>
            <div class="card-box__right position-relative h-100 w-50">
              <img :src="item.imgSrc" alt="" class="h-100 w-100">
              <button class="btn position-absolute bottom-0 end-0">
                <span class="pe-3">Read More</span>
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- lower section -->
      <div class="lower-section">
        <div class="row g-5 my-5">
          <div class="col">
            <div class="d-flex flex-column justify-content-between">
              <div class="paragraph-title">
                We have been educating children for over fifteen years. Our goal is to create a place that engages each child.
              </div>
              <div class="standard-p">
                Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis luctus. Urna eget lacinia eleifend praesent luctus a arcu quis facilisis venenatis aenean interdum.
              </div>
              <ul>
                <li>Comprehensive reporting on individual achievement</li>
                <li>Educational field trips and school presentations</li>
                <li>Individual attention in a small-class setting</li>
                <li>Learning program with after-school care</li>
                <li>Opportunities to carry out scientific investigations</li>
                <li>Positive learning environment for your child</li>
              </ul>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'ClassesSection',
  data() {
    return {
      classesCards:[
        {
          title:'Little Lambs',
          oldness:'12-24',
          classSize:'9',
          imgSrc:require('../assets/classes-section/class_01-690x506.jpg')
        },
        {
          title:'Bouncy Bears',
          oldness:'2-3',
          classSize:'12',
          imgSrc:require('../assets/classes-section/class_02-690x506.jpg')
        },
        {
          title:'Tenderhearts',
          oldness:'3-4',
          classSize:'15',
          imgSrc:require('../assets/classes-section/class_03-690x506.jpg')
        },
        {
          title:'Shining Stars',
          oldness:'4-5',
          classSize:'20',
          imgSrc:require('../assets/classes-section/class_04-690x506.jpg')
        },
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-box{
  height: 210px;
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
.lower-section ul{
  margin: 0px;
  padding: 0px;
  list-style: none;
}

.lower-section li{
  padding-left: 30px;
  background-size: 17px 17px;
  background-repeat: no-repeat;
  background-position: left 2px;
  background-image: url('../assets/classes-section/style_1.png');
}
</style>