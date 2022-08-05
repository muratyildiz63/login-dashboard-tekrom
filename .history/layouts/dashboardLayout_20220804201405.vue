<template>
  <div class="flex" v-show="inlogin">
    <div class="w-2/12 transition-all layout-left-menu" v-if="menuShow">
      <div
        class="w-60 h-full shadow-md bg-white absolute"
        id="sidenavSecExample"
      >
        <div class="pt-4 pb-2 px-6">
          <a href="#!">
            <div class="flex items-center">
              <div class="shrink-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                  class="rounded-full w-10"
                  alt="Avatar"
                />
              </div>
              <div class="grow ml-3">
                <p class="text-sm font-semibold text-blue-600">
                  {{ name }} {{ userName }}
                </p>
              </div>
            </div>
          </a>
        </div>
        <ul class="relative px-1">
          <li class="relative">
            <a
              class="
                flex
                items-center
                text-sm
                py-4
                px-6
                h-12
                overflow-hidden
                text-gray-700 text-ellipsis
                whitespace-nowrap
                rounded
                hover:text-blue-600 hover:bg-blue-50
                transition
                duration-300
                ease-in-out
              "
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
            >
              
              <span>Anasayfa</span>
            </a>
          </li>
          <li class="relative" id="sidenavSecEx2">
            <a
              class="
                flex
                items-center
                text-sm
                py-4
                px-6
                h-12
                overflow-hidden
                text-gray-700 text-ellipsis
                whitespace-nowrap
                rounded
                hover:text-blue-600 hover:bg-blue-50
                transition
                duration-300
                ease-in-out
                cursor-pointer
              "
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSidenavSecEx2"
              aria-expanded="false"
              aria-controls="collapseSidenavSecEx2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                class="w-3 h-3 mr-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                ></path>
              </svg>
              <span>Reeranslarımız</span>
            
            </a>
           
          </li>
          <li class="relative" id="sidenavSecEx3">
            <a
              class="
                flex
                items-center
                text-sm
                py-4
                px-6
                h-12
                overflow-hidden
                text-gray-700 text-ellipsis
                whitespace-nowrap
                rounded
                hover:text-blue-600 hover:bg-blue-50
                transition
                duration-300
                ease-in-out
                cursor-pointer
              "
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSidenavSecEx3"
              aria-expanded="false"
              aria-controls="collapseSidenavSecEx3"
            >
          
              <span>Çalışanlarımız</span>
         
            </a>
            <ul
              class="relative accordion-collapse collapse"
              id="collapseSidenavSecEx3"
              aria-labelledby="sidenavSecEx3"
              data-bs-parent="#sidenavSecExample"
            >
              <li class="relative">
                <a
                  href="#!"
                  class="
                    flex
                    items-center
                    text-xs
                    py-4
                    pl-12
                    pr-6
                    h-6
                    overflow-hidden
                    text-gray-700 text-ellipsis
                    whitespace-nowrap
                    rounded
                    hover:text-blue-600 hover:bg-blue-50
                    transition
                    duration-300
                    ease-in-out
                  "
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                  >En Deneyimli</a
                >
              </li>
              <li class="relative">
                <a
                  href="#!"
                  class="
                    flex
                    items-center
                    text-xs
                    py-4
                    pl-12
                    pr-6
                    h-6
                    overflow-hidden
                    text-gray-700 text-ellipsis
                    whitespace-nowrap
                    rounded
                    hover:text-blue-600 hover:bg-blue-50
                    transition
                    duration-300
                    ease-in-out
                  "
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                  >En Başarılı</a
                >
              </li>
            </ul>
          </li>
        </ul>
      
    
      
      </div>
    </div>
    <div class="w-full transition-all">
      <div>
        <nav
          class="
            relative
            w-full
            flex flex-wrap
            items-center
            justify-between
            py-4
            bg-gray-100
            text-gray-500
            hover:text-gray-700
            focus:text-gray-700
            shadow-lg
            navbar navbar-expand-lg navbar-light
          "
        >
          <div
            class="
              container-fluid
              w-full
              flex flex-wrap
              items-center
              justify-between
              px-6
            "
          >
            <button
              @click="menuShow = !menuShow"
              class="
                navbar-toggler
                text-gray-500
                border-0
                hover:shadow-none hover:no-underline
                py-2
                px-2.5
                bg-transparent
                focus:outline-none
                focus:ring-0
                focus:shadow-none
                focus:no-underline
              "
              type="button"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bars"
                class="w-6"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                ></path>
              </svg>
            </button>
            <div
              class="collapse navbar-collapse flex flex-grow items-center"
              id="navbarSupportedContent"
            >
              <a
                class="
                  flex
                  items-center
                  text-gray-900
                  hover:text-gray-900
                  focus:text-gray-900
                  mt-2
                  lg:mt-0
                  mr-1
                "
                href="#"
              >
                <img
                  src="https://www.tsoft.com.tr/assets/images/logo/tsoft-logo-tr.svg"
                  style="height: 15px"
                  alt=""
                  loading="lazy"
                />
              </a>
              <!-- Left links -->
              <ul class="navbar-nav flex pl-0 list-style-none mr-auto">
                <li class="nav-item p-2">
                  <nuxt-link
                    to="loginPage"
                    class="
                      nav-link
                      text-gray-500
                      hover:text-gray-700
                      focus:text-gray-700
                      p-0
                    "
                  ></nuxt-link>
                </li>
                <li class="nav-item p-2">
                  <a
                    class="
                      nav-link
                      text-gray-500
                      hover:text-gray-700
                      focus:text-gray-700
                      p-0
                    "
                    href="#"
                    >Raporlar</a
                  >
                </li>
                <li class="nav-item p-2">
                  <a
                    class="
                      nav-link
                      text-gray-500
                      hover:text-gray-700
                      focus:text-gray-700
                      p-0
                    "
                    href="#"
                    >Projeler</a
                  >
                </li>
              </ul>
              <!-- Left links -->
            </div>

            <button @click="logout">Çıkış Yap</button>

            <!-- Collapsible wrapper -->
          </div>
        </nav>
      </div>
      <div class="flex flex-nowrap w-full">
        <Nuxt />
      </div>

      <footer
        class="
          text-center
          lg:text-left
          bg-gray-100
          text-gray-600
          fixed
          bottom-0
          left-0
          right-0
        "
      >
        <div
          class="
            flex
            justify-center
            items-center
            lg:justify-between
            p-2
            border-b border-gray-300
          "
        >
          <div class="mr-12 hidden lg:block">
            <span>Bu sitenin tüm hakları Murat YILDIZ'a aittir</span>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
import sessionControl from '../middlewares/sessionControl'
import apiRequest from '../services/apiRequest'
export default {
  layout: 'dashboardLayout',
  name: 'IndexPage',
  data() {
    return {
      userID: null,
      userName: null,
      name: null,
      surname: null,
      inlogin: false,
      menuShow: true,
    }
  },
  mounted() {
   sessionControl.sessionControl()
    this.userID = localStorage.getItem('userID')  
    apiRequest(`/user?id=${this.userID}`, 'GET').then(resUser => {
       if (resUser.length > 0) {
          this.name = resUser[0].name
          this.surname = resUser[0].surname
          this.userName = resUser[0].username
          this.inlogin = true
        }
    })
  },
  methods: {
    logout() {
      localStorage.removeItem('userID')
      this.$router.push({ name: 'loginPage' })
    },
  },
}
</script>