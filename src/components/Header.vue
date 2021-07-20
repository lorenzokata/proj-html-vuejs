<template>
  <header class="vw-100">
    <nav class="navbar navbar-expand-lg navbar-light p-0 h-100">
      <div class="container h-100">

        <div class="left h-100">
          <a class="navbar-brand py-4" href="#"><img src="@/assets/logo.png" alt="logo fable" id="logo"></a>
        </div>

        <div class="right h-100 d-flex align-items-center">

          <div class="collapse navbar-collapse h-100" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 h-100 d-flex align-items-center">
              
              <li v-for="(item, index) in navData" :key="index" class="nav-item dropdown h-100">
                
                <a class="nav-link d-flex flex-column justify-content-center align-items-center h-100 px-4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" :aria-expanded="false" @mouseover="item.isActive = true" @mouseleave="item.isActive = false">
                  <img class="mb-3" :src="(item.isActive) ? item.iconSrcOver : item.iconSrc" alt="item.name">
                  <div :class="{'text-white' : item.isActive}">{{item.name}}</div>
                </a>

                <div class="dropdown-menu m-0" aria-labelledby="navbarDropdown" v-show="item.subItems">
                  <div class="dropdown-box d-flex p-3">
                    <ul v-for="(subItems,index) in item.subItems" :key="index" class="d-flex flex-column p-0">
                      <div v-if="subItems.title" class="subItems-title pb-3 ps-2">{{subItems.title}}</div>
                      <li v-for="(items, index) in subItems.items" :key="index"><a class="dropdown-item p-2" href="#">{{items}}</a></li>
                    </ul>
                  </div>
                </div>

              </li>
              
            </ul>
          </div>

        </div>

      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      navData: [
        {
          name: 'Home',
          iconSrcOver: require('../assets/navicons/home-2.png'),
          iconSrc: require('../assets/navicons/home.png'),
          isActive: false,
          subItems:[
            {
              title:'',
              items: ['Home Style I','Home Style II', 'Home Style III', 'Home Style IV', 'Home – Scrolling One Page']
            }
          ]
        },
        {
          name: 'Pages',
          iconSrcOver: require('../assets/navicons/document-2.png'),
          iconSrc: require('../assets/navicons/document.png'),
          isActive: false,
          subItems:[
            {
              title:'Pages I',
              items: ['About Us I', 'About Us II', 'Our Services I', 'Our Services II', 'Page Right Sidebar', 'Page Left Sidebar']
            },
            {
              title:'Pages II',
              items: ['Our Classes', 'Single Class', 'Our Staff I', 'Our Staff II', 'Single Teacher', 'Mael Menu']
            },
            {
              title:'Pages III',
              items: ['II Columns Gallery', 'III Columns Gallery', 'Tabbed Gallery', 'Gallery Right Sidebar', 'Gallery Left Sidebar']
            },
            {
              title:'Pages IV',
              items: ['Contact Us I', 'Contact Us II', 'Pricing Plans I', 'Pricing Plans II', 'Page Not Found', 'Sitemap', 'Maintenance Mode']
            }
          ]
        },
        {
          name: 'Blog',
          iconSrcOver: require('../assets/navicons/printer-2.png'),
          iconSrc: require('../assets/navicons/printer.png'),
          isActive: false,
          subItems:[
            {
              title:'Layout',
              items: ['Blog Full Width', 'Blog Right Sidebar', 'Blog Left Sidebar', 'Post Full Width']
            },
            {
              title:'Post Types',
              items: ['Post Image', 'Post Audio', 'Post Video I', 'Post Video II']
            },
            {
              title:'Other Pages',
              items: ['Tag Page', 'Archive Page', 'Category Page', 'Search Result Page']
            }
          ]
        },
        {
          name: 'Shop',
          iconSrcOver: require('../assets/navicons/cart-2.png'),
          iconSrc: require('../assets/navicons/cart.png'),
          isActive: false,
          subItems:[
            {
              title:'',
              items: ['Cart', 'Products', 'My account', 'List Of WooCommerce Widgets']
            }
          ]
        },
        {
          name: 'Shortcodes',
          iconSrcOver: require('../assets/navicons/lab-2.png'),
          iconSrc: require('../assets/navicons/lab.png'),
          isActive: false,
          subItems:[
            {
              title:'Shortcodes I',
              items: ['Example', 'Example', 'Example', 'Example', 'Example', 'Example',]
            },
            {
              title:'Shortcodes II',
              items: ['Example', 'Example', 'Example', 'Example', 'Example', 'Example',]
            },
            {
              title:'Shortcodes III',
              items: ['Example', 'Example', 'Example', 'Example', 'Example', 'Example',]
            },
            {
              title:'Shortcodes IV',
              items: ['Example', 'Example', 'Example', 'Example', 'Example', 'Example',]
            },
          ]
        },
        {
          name: 'Support',
          iconSrcOver: require('../assets/navicons/envelope-2.png'),
          iconSrc: require('../assets/navicons/envelope.png'),
          isActive: false,
          subItems:''
        },
        {
          name: 'Contact',
          iconSrcOver: require('../assets/navicons/chat-2.png'),
          iconSrc: require('../assets/navicons/chat.png'),
          isActive: false,
          subItems:[
            {
              title:'',
              items: ['Contact Us I', 'Contact Us II']
            }
          ]
        },
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

header{
  height: 150px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: white;
}

#logo{
  height: 150px;
}

// DROPDOWN MENU

.dropdown-box li{
  list-style: none;
  padding: 0 0 15px;
}

.dropdown-box li:last-child{
  padding: 0;
}

.dropdown-box a{
  padding: 0;
}

.dropdown-box a:hover{
  background-color: red;
  color: white;
}

.nav-link img{
  width: 2rem;
}

.nav-link:hover{
  background-color: red;
}

.nav-link:hover img{
  color: white;
}

.subItems-title{
  color: #554e9e;
}
.dropdown-item{
  color: grey;
}

</style>
