<template>
  <div class="flex" v-show="inlogin">
    <div class="w-2/12 transition-all layout-left-menu" v-if="menuShow">
      <strong  class=".shadow-lg">Hoşgeldin <span>{{ name }}</span></strong>

      <ul>
        <li>
          <nuxt-link to="/">Anasayfa</nuxt-link>
        </li>
        <li>Referanslarımız</li>
        <li>Perseonelllerimiz</li>
        <li>Çıkış Yap</li>
      </ul>
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
                    >Login</nuxt-link
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
            <!-- Collapsible wrapper -->

            <!-- Right elements -->
            <div class="flex items-center relative">
              <!-- Icon -->

              <div class="dropdown relative">
                <a
                  class="dropdown-toggle flex items-center hidden-arrow"
                  href="#"
                  id="dropdownMenuButton2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                    class="rounded-full"
                    style="height: 25px; width: 25px"
                    alt=""
                    loading="lazy"
                  />
                </a>
                <ul
                  class="
                    dropdown-menu
                    min-w-max
                    absolute
                    hidden
                    bg-white
                    text-base
                    z-50
                    float-left
                    py-2
                    list-none
                    text-left
                    rounded-lg
                    shadow-lg
                    mt-1
                    hidden
                    m-0
                    bg-clip-padding
                    border-none
                    left-auto
                    right-0
                  "
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <a
                      class="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      "
                      href="#"
                      >Action</a
                    >
                  </li>
                  <li>
                    <a
                      class="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      "
                      href="#"
                      >Another action</a
                    >
                  </li>
                  <li>
                    <a
                      class="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                      "
                      href="#"
                      >Something else here</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <!-- Right elements -->
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
import axios from 'axios'
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
      menuShow: false,
    }
  },

  mounted() {
    this.userID = localStorage.getItem('userID')
    axios
      .get(`http://localhost:3000/user?id=${this.userID}`)
      .then((resUser) => {
        if (resUser.data.length > 0) {
          this.name = resUser.data[0].name
          this.surname = resUser.data[0].surname
          this.userName = resUser.data[0].userName
          this.inlogin = true
        } else {
          this.$router.push({ name: 'loginPage' })
        }
      })
  },
}
</script>