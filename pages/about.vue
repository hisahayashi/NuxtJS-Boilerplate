<template>
  <article id="about">
    About
  </article>
</template>
<script>
import Meta from '~/assets/mixins/meta'
import Vue from 'vue'
const $ = require('jquery')

let Component = Vue.extend({
  mixins: [Meta],
  scrollToTop: true,
  layout: 'default',

  data() {
    return {
      meta: {
        title: 'ABOUT',
        description: '',
        type: 'article',
        url: process.env.baseUrl + '/about/',
        image: process.env.baseUrl + '/img/common/share.jpg',
      },
      loading: true,
      isDestroyed: false,
    }
  },

  created() {
  },

  async mounted() {
    this.loading = false
  },

  beforeDestroy() {
    this.isDestroyed = true
  },

  destroyed(){
  },

  afterDestroy(){
  },

  computed: {
  },

  methods: {
  }

})

export default Component
</script>
