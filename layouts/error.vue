<template>
  <div id="wrap">
    <Header :is-show-logo="true" />
    <transition name="fade" mode="out-in" appear>

      <article class="common_container">
        <div class="inner">

          <section class="common_section">
            <div class="text">お探しのページが見つかりませんでした。<br>お手数ですが、トップページから再度ご覧になりたいページをお探しください。</div>
            <p class="btn"><NuxtLink to="/">トップへ</NuxtLink></p>
          </section>

          <!-- <p>{{error.statusCode}}</p> -->

        </div>
      </article>

    </transition>
    <Footer :is-show-logo="true" />

    <transition name="fade" mode="out-in" appear>
      <Loader v-if="loading" />
    </transition>

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

  props: ['error'],

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
</style>
