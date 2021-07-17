<template>
  <header>
    <!-- <div class="container">
      <nav class="navbar">
        <a href="#" class="navbar-brand"><img src="@/assets/logo.png" alt="fable logo"></a>
        <div class="right">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div> -->

  <div class="dropdown">
    <button
      class="btn btn-primary dropdown-toggle"
      type="button" id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false">
      Dropdown button: {{value}}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" role="menu">
      <li v-for="option in options" :key="option">
        <a class="dropdown-item" @click="value = option" href="javascript:void(0)">{{option}}</a>
      </li>
    </ul>
  </div>

  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      options: ['Pippo', 'Pluto', 'Paperino'],
      value: 'Minni'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

nav{
  height: 150px;
}

nav a{
  height: 100%;
}

nav a img{
  height: 100%;
}

</style>
