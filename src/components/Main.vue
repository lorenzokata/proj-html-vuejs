<template>
  <main>
    <Jumbotron/>
    <DividingBar/>
    <WelcomeSection/>
    <NumberSection/>
    <ClassesSection/>
    <ImgBanner/>
    <DividingBar2/>
    <MeetSection/>
    <TransparentSection/>
    <WhatsNewSection/>
    <ContactUs/>
  </main>
</template>

<script>
import Jumbotron from './Jumbotron.vue'
import DividingBar from './DividingBar.vue'
import WelcomeSection from './WelcomeSection.vue'
import NumberSection from './NumberSection.vue'
import ClassesSection from './ClassesSection.vue'
import ImgBanner from './ImgBanner.vue'
import DividingBar2 from './DividingBar2.vue'
import MeetSection from './MeetSection.vue'
import TransparentSection from './TransparentSection.vue'
import WhatsNewSection from './WhatsNewSection.vue'
import ContactUs from './ContactUs.vue'

export default {
  name: 'Main',
  components: {
    Jumbotron,
    DividingBar,
    WelcomeSection,
    NumberSection,
    ClassesSection,
    ImgBanner,
    DividingBar2,
    MeetSection,
    TransparentSection,
    WhatsNewSection,
    ContactUs
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
