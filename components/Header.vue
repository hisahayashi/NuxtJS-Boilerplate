<template>
  <header id="head" :class="[color, {'scrollOver': isScrollOver}]">

    <h1 class="logo" v-if="isEnableLogo"><NuxtLink to="/" @click.native="routerClick" title=""><Logo /></NuxtLink></h1>

    <nav id="gnav" class="gnav" ref="gnav">

      <transition name="scale-fade" mode="out-in" appear>
        <p class="bg" v-if="!isEnableStoring || isShowNav" @click="closeMenu"></p>
      </transition>

      <transition name="gnav-scale-fade" mode="out-in" appear>
        <div class="inner" v-if="!isEnableStoring || isShowNav">
          <ul class="nav">
            <li><NuxtLink to="/" @click.native="routerClick">HOME</NuxtLink></li>
            <li><NuxtLink to="/about" @click.native="routerClick">ABOUT</NuxtLink></li>
          </ul>
        </div>
      </transition>

    </nav>

    <div id="menu" class="menu" v-if="isEnableStoring">
      <a href="javascript:void(0);" @click="toggleMenu" class="menu_trigger" :class="{'active': isShowNav}">
        <span></span><span></span>
      </a>
    </div>

  </header>
</template>

<script>
import Logo from '@/assets/img/global/logo.svg'
import Vue from 'vue'

const $ = require('jquery')

let Component = Vue.extend({

  name: 'Header',

  mixins: [],

  props: ['isShowLogo', 'color'],

  // watch: {
  //   isWhite: function(newVal, oldVal) {
  //     console.log('Prop changed: ', newVal, ' | was: ', oldVal)
  //   }
  // },

  data() {
    return {
      isShowNav: false,
      mediaQuery: null,
      isScrollOver: false,
      isHome: false,
      isEnableLogo: false,
      isEnableStoring: false
    }
  },

  components: {
    Logo,
  },

  created() {
  },

  mounted() {

    if(this.$route.name == 'Index') this.isHome = true

    if(process.client){
      $(window).on('scroll', this.scroll)
      this.addMediaQuery()
    }

    this.isEnableLogo = this.isShowLogo
  },

  destroyed() {
    if(process.client){
      $(window).off('scroll')
      this.mediaQuery.removeListener(this.handle)
    }
  },

  computed: {
  },

  methods: {

    toggleMenu() {
      if(this.isShowNav){
        this.closeMenu()
      }
      else{
        this.openMenu()
      }
    },

    openMenu() {
      let $gnav = this.$refs.gnav
      this.isShowNav = true
      this.isEnableLogo = true
      return false
    },

    closeMenu() {
      let $gnav = this.$refs.gnav
      this.isShowNav = false
      return false
    },

    scroll() {
      let pos = $(window).scrollTop()
      if(pos > 10){
        if(!this.isScrollOver) this.isScrollOver = true
      }
      else{
        if(this.isScrollOver) this.isScrollOver = false
      }
    },

    routerClick() {
      this.closeMenu()
      // return false
      return false
    },

    addMediaQuery(){
      this.mediaQuery = window.matchMedia('(max-width: 667px)')
      // ページが読み込まれた時に実行
      this.handle(this.mediaQuery)
      // ウィンドウサイズが変更されても実行されるように
      this.mediaQuery.addListener(this.handle)
    },

    handle(mq) {
      console.log('mq', mq)
      if (mq.matches) {
        this.isEnableStoring = true
      }
      else {
        this.isEnableStoring = false
      }
    }

  }
})

export default Component
</script>
