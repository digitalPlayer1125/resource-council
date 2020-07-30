<template>
  <div class="d-flex flex-column">
    <Header />
    <Cover page-desc="About" image="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    <Footer class="mt-5" />
  </div>
</template>

<script>
export default {
  head: {
    title: 'About | Resource Council',
    meta: [
      { hid: 'og:url', property: 'og:url', name: 'og:url', content: 'https://resource-council.vercel.app/about' },
      { hid: 'og:title', property: 'og:title', name: 'og:title', content: 'About | Resource Council' },
      { hid: 'og:description', property: 'og:description', name: 'og:description', content: 'The environment is where we all meet; where we all have a mutual interest; it is the one thing all of us share. ~  Lady Bird Johnson' },
      { hid: 'og:image', property: 'og:image', name: 'og:image', content: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
      { hid: 'twitter:title', property: 'twitter:title', name: 'twitter:title', content: 'About | Resource Council' },
      { hid: 'twitter:description', property: 'twitter:description', name: 'twitter:description', content: 'The environment is where we all meet; where we all have a mutual interest; it is the one thing all of us share. ~  Lady Bird Johnson' },
      { hid: 'twitter:image', property: 'twitter:image', name: 'twitter:image', content: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }
    ]
  }
}
</script>

<style>

</style>
