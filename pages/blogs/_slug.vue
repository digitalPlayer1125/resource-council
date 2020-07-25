<template>
  <div class="d-flex flex-column align-items-center">
    <div class="animated fadeIn d-flex flex-row justify-content-center">
      <div class="blogContent p-3" style="max-width: 699px;">
        <h1 style="line-height: 1.4 !important;" class="mt-2 text--green font-weight-light">
          {{ page.title }}
        </h1>
        <h5 class="mt-3 text-secondary">
          {{ page.intro }}
        </h5>
        <img class="w-100 mt-4 rounded-lg shadow" :src="page.image1">
        <h5 class="mt-5 text-secondary">
          {{ page.description }}
        </h5>
        <nuxt-content class="mt-5" :document="page" />
        <div class="mt-5" style="/*background: #65656565; height: 0.5px;*/" />
        <span v-for="tags in page.tags.split(&quot;,&quot;)" :key="tags" style="font-size: 15px;" class="btn btn-md border rounded-lg mr-2 text-muted">
          {{ tags.trim() }}
        </span>
      </div>
    </div>
    <Footer class="mt-5" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const slug = params.slug || 'index'
    const page = await $content(slug)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    return {
      page
    }
  },
  head () {
    return {
      title: this.page.title,
      meta: [
        { hid: 'description', name: 'description', content: this.page.intro },
        { hid: 'og:description', name: 'og:description', content: this.page.intro }
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
