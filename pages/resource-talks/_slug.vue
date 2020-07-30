<template>
  <div class="d-flex flex-column">
    <Header />
    <div class="animate__animated animate__fadeIn d-flex flex-row justify-content-center">
      <div class="blogContent p-3" style="max-width: 699px;">
        <h1 style="line-height: 1.4 !important;" class="mt-2 text--green font-weight-light">
          {{ article.title }}
        </h1>
        <h5 class="mt-3 text-secondary">
          {{ article.intro }}
        </h5>
        <img class="w-100 mt-4 rounded-lg shadow" :src="article.image1">
        <nuxt-content class="mt-5" :document="article" />
        <div class="mt-5" style="/*background: #65656565; height: 0.5px;*/" />
        <span v-for="tags in article.tags.split(&quot;,&quot;)" :key="tags" style="font-size: 15px;" class="btn btn-md border rounded-lg mr-2 text-muted">
          {{ tags.trim() }}
        </span>
      </div>
    </div>
    <Footer class="mt-5" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('resourceTalks', params.slug).fetch()
    const [prev, next] = await $content('resourceTalks')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      prev,
      next
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  head () {
    return {
      title: this.article.title,
      meta: [
        { hid: 'description', name: 'description', content: this.article.intro },
        { hid: 'og:description', name: 'og:description', content: this.article.intro }
      ]
    }
  }
}
</script>

<style>
  .blogContent > *{
    line-height: 1.7 !important;
    color: #6c757d;
  }
</style>
