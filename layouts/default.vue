<template>
  <div id="wrap">
    <Header :is-show-logo="true" />
    <Nuxt />
    <Footer :is-show-logo="true" />
    <Loader :is-show="loading" />
  </div>
</template>

<script>
import Vue from 'vue'

let Component = Vue.extend({

  data() {
    return {
      loading: true,
    }
  },

  created() {
  },

  mounted() {
    this.loading = false
  },

  beforeDestroy() {
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

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
