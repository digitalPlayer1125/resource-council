<template>
  <div class="d-flex flex-column">
    <Header />
    <div class="d-flex flex-row justify-content-center">
      <div class="mt-3 blogContent p-3" style="max-width: 699px;">
        <h1 style="line-height: 1.4 !important;" class="mt-2 text--green font-weight-light">
          {{ article.title }}
        </h1>
        <h5 class="mt-3 text-secondary">
          {{ article.intro }}
        </h5>
        <!-- <img class="w-100 mt-4 rounded-lg shadow" :src="article.image1"> -->
        <video controls autoplay poster="" src="/R%20Karpagam%20Resource%20Talk.mp4" class="rounded-lg w-100"></video>
        <nuxt-content class="mt-5" :document="article" />
        <div class="mt-5" style="/*background: #65656565; height: 0.5px;*/" />
        <span v-for="tags in article.tags.split(&quot;,&quot;)" :key="tags" style="font-size: 15px;" class="btn btn-md border rounded-lg mr-2 text-muted">
          {{ tags.trim() }}
        </span>
        <h4 class="ml-2 mt-5 text-dark" v-if='prev || next'> Read more from our curated collection </h4>
        <div class="d-flex flex-row flex-wrap justify-content-between">
          <nuxt-link v-if='prev' class="col p-2 mt-3 text-secondary d-flex flex-column align-items-start justify-content-start" :to='prev.slug'>
            <img class="rounded-lg w-100" style="max-width: 317px !important;" :src="prev.image1">
            <p class="mt-3" style='font-size: 20px;'>
              &larr; {{prev.title}}
            </p>
          </nuxt-link>
          <nuxt-link v-if='next' class="col p-2 mt-3 text-secondary d-flex flex-column align-items-start justify-content-start" :to='next.slug'>
            <img class="rounded-lg w-100" style="max-width: 317px !important;" :src="next.image1">
            <p class="mt-3" style='font-size: 20px;'>
              {{next.title}} &rarr;
            </p>
          </nuxt-link>
        </div>
      </div>
    </div>
    <Footer class="mt-5" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles')
      .only(['title', 'slug', 'image1'])
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
    color: #343a40;
    /* #6c757d; */
  }
</style>
