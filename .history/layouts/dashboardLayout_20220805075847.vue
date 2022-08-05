<template>
  <div class="flex" v-show="inlogin">
    <div
      class="w-2/12 transition-all layout-left-menu"
      :class="{ active: menuShow }"
    >
      <div
        class="w-full h-full shadow-md bg-white absolute"
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
                  {{ name }} ({{ userName }})
                </p>
              </div>
            </div>
          </a>
        </div>
        <ul class="relative px-1">
          <li class="relative">
            <nuxt-link
              to="/"
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
            </nuxt-link>
          </li>
          <li class="relative" id="sidenavSecEx2">
            <nuxt-link to="/referencePage"
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
              <span>Reeranslarımız</span>
            </nuxt-link>
          </li>
          <li class="relative" id="sidenavSecEx3">
            <nuxt-link
              to="/personnelPage"
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
            </nuxt-link>
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

        <div class="menuClose" @click="menuShow = !menuShow">Kapat</div>
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
                  <nuxt-link to="/commnetPage"
                    class="
                      nav-link
                      text-gray-500
                      hover:text-gray-700
                      focus:text-gray-700
                      p-0
                    "
                    href="#"
                    >Yorumlar</nuxt-link                  >
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
        ></div>
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
      menuShow: false,
    }
  },
  mounted() {
    sessionControl.sessionControl()
    this.userID = localStorage.getItem('userID')
    apiRequest(`/user?id=${this.userID}`, 'GET').then((resUser) => {
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