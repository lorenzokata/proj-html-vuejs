<template>
  <main>
    <Jumbotron/>
    <DividingBar/>
    <WelcomeSection/>
  </main>
</template>

<script>
import Jumbotron from './Jumbotron.vue'
import DividingBar from './DividingBar.vue'
import WelcomeSection from './WelcomeSection.vue'

export default {
  name: 'Main',
  components: {
    Jumbotron,
    DividingBar,
    WelcomeSection,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
