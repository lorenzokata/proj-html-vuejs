<template>
  <section class="jumbotron">

      <div id="carouselExampleInterval" class="carousel slide h-100 position-relative" data-bs-ride="carousel">
        <div class="carousel-inner h-100">
          <!-- prima scheda carosello -->
          <div class="carousel-item active h-100" data-bs-interval="10000000">
            <div class="container h-100">
              <div class="box-carousel p-4 d-flex h-100">
                <img src="@/assets/jumbotron/slider_slide1_img1.png" class="d-block h-100 position-relative" alt="...">
                <div class="box-carousel__text__1 d-flex flex-column justify-content-center align-items-center position-absolute top-50 start-50">
                  <h4 class="box-carousel__text__caption">Welcome to Fable!</h4>
                  <h2 class="box-carousel__text__title">Perfect Education</h2>
                  <h3 class="box-carousel__text__subtitle">For Your Child</h3>
                  <button class="btn btn-danger text-uppercase mt-4">buy this theme now</button>
                </div>
                <img src="@/assets/jumbotron/slider_slide1_img2.png" class="d-block h-100" alt="...">
              </div>
            </div>
          </div>
          <!-- seconda scheda carosello -->
          <div class="carousel-item h-100" data-bs-interval="10000000">
            <div class="container h-100">
              <div class="box-carousel p-4 d-flex justify-content-between h-100">
                <div class="box-carousel__text__2 d-flex flex-column justify-content-center align-items-start">
                  <h4 class="box-carousel__text__caption">Friendly Atmosphere</h4>
                  <h2 class="box-carousel__text__title">Welcoming Place</h2>
                  <h3 class="box-carousel__text__subtitle">For Every Child</h3>
                  <button class="btn btn-danger text-uppercase mt-4">buy this theme now</button>
                </div>
                <div class="box-carousel__img__2">
                  <img src="@/assets/jumbotron/slider_slide2_img1.png" class="d-block h-100" alt="...">
                </div>
              </div>
            </div>
          </div>
          <!-- terza scheda carosello -->
          <div class="carousel-item h-100" data-bs-interval="10000000">
            <div class="container h-100">
              <div class="box-carousel p-4 d-flex justify-content-between h-100">
                <div class="box-carousel__text__3 d-flex flex-column justify-content-center align-items-start">
                  <h4 class="box-carousel__text__caption">Friendly Atmosphere</h4>
                  <h2 class="box-carousel__text__title">Welcoming Place</h2>
                  <h3 class="box-carousel__text__subtitle">For Every Child</h3>
                  <button class="btn btn-danger text-uppercase mt-4">buy this theme now</button>
                </div>
                <div class="box-carousel__img__3">
                  <img src="@/assets/jumbotron/slider_slide3_img1.png" class="d-block h-100" alt="...">
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="carousel-control-prev position-absolute start-0" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>    
  </section>
</template>

<script>
export default {
  name: 'Jumbotron',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.jumbotron{
  margin-top: 150px;
  height: 600px;
  background-image: url('../assets/jumbotron/slider_slide1_background.png');
  background-size: contain;
}

// carosello text
.box-carousel__text__1{
  transform: translate(-50%, -50%);
}
.box-carousel__text__2{
  padding-left: 100px;
}
.box-carousel__text__caption{
  color: var(--blaze-orange);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.box-carousel__text__title{
  color: var(--butterfly-bush);
  font-weight: 900;
  font-size: 2.5rem;
}
.box-carousel__text__subtitle{
  color: var(--butterfly-bush);
  font-weight:300;
  font-size: 2.5rem;
}

// carosello img
.box-carousel__img__2{
  width: 65%;
  background-image: url('../assets/jumbotron/slider_slide2_img2.png');
  background-repeat: no-repeat;
  background-position: right center;
}

// carosello prev next icon
.carousel-control-prev-icon, .carousel-control-next-icon{
  border-radius: 50%;
  padding: 30px;
  display: none;
}
.jumbotron:hover .carousel-control-prev-icon{
  display: block;
  background-color: grey;
}
.jumbotron:hover .carousel-control-next-icon{
  display: block;
  background-color: grey;
}
.carousel-control-prev:hover .carousel-control-prev-icon, .carousel-control-next:hover .carousel-control-next-icon{
  display: block;
  background-color: red;
}
</style>
