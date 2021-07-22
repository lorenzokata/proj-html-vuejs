<template>
  <footer class="py-5">
    <div class="container">
      <div class="row g-5 text-white">

        <div class="col-3">
          <div class="card-box w-100">
            <div class="title pb-3">ABOUT US</div>
            <div class="standard-p pb-3">Elipsis magna a nulla elite forte maecenas est elementum magna etos interdum movum morbi vehicula morbi.</div>
            <img class="w-75" src="@/assets/footer/logo_footer.png" alt="logo fable del footer">
          </div>
        </div>
        <div class="col-3">
          <div class="card-box w-100">
            <div class="title pb-3">ARCHIVES</div>
            <div v-for="(item, index) in months" :key="index" class="standard-p-footer p-2 mb-2">{{item.month}} ({{item.number}})</div>
          </div>
        </div>
        <div class="col-3">
          <div class="card-box w-100">
            <div class="title pb-3">OUR FEATURES</div>
            <div class="standard-p pb-3">Nunc gravida rutrum mauris vehin hasellus ac pretium augue vivamul lacus ligul mattis ac vene:</div>
            <ul>
              <li v-for="(item, index) in list" :key="index" >{{item}}</li>
            </ul>
          </div>
        </div>
        <div class="col-3">
          <div class="card-box w-100">
            <div class="title pb-3">RECENT POSTS</div>
            <div class="activity d-flex w-1000 pb-4">
              <img class="pe-3 w-50" src="@/assets/footer/blog_08-150x150.jpg">
              <div class="activity-text">
                <div class="activity-title py-3">Drawing and Painting Lessons</div>
                <img src="@/assets/footer/date_footer.png">
                <span class="ps-2">October 03, 2014</span>
              </div>
            </div>
            <div class="activity d-flex w-100 pb-4">
              <img class="pe-3 w-50" src="@/assets/footer/blog_09-150x150.jpg">
              <div class="activity-text">
                <div class="activity-title py-3">Fall Parents Meeting Day</div>
                <img src="@/assets/footer/date_footer.png">
                <span class="ps-2">October 03, 2014</span>
              </div>
            </div>
            <div class="activity d-flex w-1000 pb-4">
              <img class="pe-3 w-50" src="@/assets/footer/blog_10-150x150.jpg">
              <div class="activity-text">
                <div class="activity-title py-3">Birthday in Kindergarten</div>
                <img src="@/assets/footer/date_footer.png">
                <span class="ps-2">September 20, 2014</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      months:[
        {
        month:'OCTOBER 2014',
        number: '2'
        },
        {
        month:'SEPTEMBER 2014',
        number: '2'
        },
        {
        month:'AUGUST 2014',
        number: '2'
        },
        {
        month:'JULY 2014',
        number: '2'
        },
        {
        month:'JUNE 2014',
        number: '2'
        },
        {
        month:'MAY 2014',
        number: '1'
        },
      ],
      list:[
        'Friendly and welcoming place',
        'Science and art classes',
        'Positive learning environment',
        'Educational field trips',
        'Writing and reading classes',
        'Science and art classes',
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer{
  background-image: url('../assets/dividingbar/pattern.png');
  background-size: contain;
}
.title{
  font-size: 1.5rem;
}
.standard-p{
  color: lightgrey;
}
.standard-p-footer{
  color: lightgrey;
  font-weight: 400;
  border: 1px solid grey;
}

ul{
  margin: 0px;
  padding: 0px;
  list-style: none;
}

li{
  padding-left: 30px;
  margin-bottom: 10px;
  background-size: 17px 17px;
  background-repeat: no-repeat;
  background-position: left 2px;
  background-image: url('../assets/footer/style_4_alt.png');
}

.activity-title{
  font-size: 0.9rem;
}

.activity-text span{
  font-size: 0.8rem;
  color: lightgrey;
}
</style>
