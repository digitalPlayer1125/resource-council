<template>
  <div class="d-flex">
    <footerVue class="mt-5" />
  </div>
</template>

<script>
import footerVue from '../components/footer.vue'
export default {
  components: {
    footerVue
  },
  head: {
    title: 'Resource Council | Tagline Here',
    meta: [
      { hid: 'description', name: 'description', content: 'Description Here.' },
      { hid: 'og:description', name: 'og:description', content: 'Description Here.' }
    ]
  }
}
</script>

<style>

</style>
