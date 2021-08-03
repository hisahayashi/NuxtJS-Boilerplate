<template>
  <div id="wrap">
    <transition name="fade" mode="out-in" appear>

      <article class="common_container">
        <div class="inner">

          <p>{{error.statusCode}}</p>

          <section class="common_section">
            <div class="text">お探しのページが見つかりませんでした。<br>お手数ですが、トップページから再度ご覧になりたいページをお探しください。</div>
            <p class="btn"><NuxtLink to="/">トップへ</NuxtLink></p>
          </section>

        </div>
      </article>

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


<style lang="scss">
.common_container{
  margin: 30px;
  line-height: 1.5;
}
</style>
