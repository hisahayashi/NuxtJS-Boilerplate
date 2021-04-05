<template>
  <article class="common_container">
    <div class="inner">

      <section class="common_section">
        <div class="text">お探しのページが見つかりませんでした。<br>お手数ですが、トップページから再度ご覧になりたいページをお探しください。</div>
        <p class="btn"><NuxtLink to="/">トップへ</NuxtLink></p>
      </section>

    </div>
  </article>
</template>

<script>
import Meta from '~/assets/mixins/meta'
import Vue from 'vue'

let Component = Vue.extend({
  // mixins: [Meta],
  scrollToTop: true,
  layout: 'default',

  data() {
    return {
      loading: true
    }
  },

  components: {
  },

  created() {
  },

  mounted() {
    this.loading = false
  },

  computed: {
  },

  methods: {
  }

})

export default Component
</script>
