<template>
  <div class="d-flex flex-column">
    <Header />
    <Cover cDesc="“Do good. And good will come to you.”" page-desc="Help Us" image="https://images.unsplash.com/photo-1579208570378-8c970854bc23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1095&q=80" />
    <Footer class="mt-5" />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Help Us | Resource Council',
    meta: [
      { hid: 'og:url', property: 'og:url', name: 'og:url', content: 'https://resource-council.vercel.app/help-us' },
      { hid: 'og:title', property: 'og:title', name: 'og:title', content: 'Help Us | Resource Council' },
      { hid: 'og:description', property: 'og:description', name: 'og:description', content: 'The environment is where we all meet; where we all have a mutual interest; it is the one thing all of us share. ~  Lady Bird Johnson' },
      { hid: 'og:image', property: 'og:image', name: 'og:image', content: 'https://images.unsplash.com/photo-1579208570378-8c970854bc23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1095&q=80' },
      { hid: 'twitter:title', property: 'twitter:title', name: 'twitter:title', content: 'Help Us | Resource Council' },
      { hid: 'twitter:description', property: 'twitter:description', name: 'twitter:description', content: 'The environment is where we all meet; where we all have a mutual interest; it is the one thing all of us share. ~  Lady Bird Johnson' },
      { hid: 'twitter:image', property: 'twitter:image', name: 'twitter:image', content: 'https://images.unsplash.com/photo-1579208570378-8c970854bc23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1095&q=80' }
    ]
  }
}
</script>

<style>

</style>
