<template>
  <article id="index">
    Index
  </article>
</template>
<script>
import Meta from '~/assets/mixins/meta'
import Vue from 'vue'
const $ = require('jquery')
if(process.client) require('jquery.easing')

let Component = Vue.extend({
  // mixins: [Meta],
  scrollToTop: true,
  layout: 'default',

  data() {
    return {
      loading: true,
      isDestroyed: false,
    }
  },

  head () {
    return {
      titleTemplate: null,
      title: 'HOME',
    }
  },

  created() {
  },

  async mounted() {
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


<style>
</style>
