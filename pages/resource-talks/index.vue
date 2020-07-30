<template>
  <div class="d-flex flex-column">
    <Header />
    <Cover cDesc='Human resources is a huge part of what makes businesses work.' page-desc="Resource Talks" image="https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80" />
    <div class="container">
      <div class="d-flex flex-column align-items-center">
        <h2 class="text-dark mt-3 mb-4">Title 1</h2>
        <video controls autoplay poster="" src="/R%20Karpagam%20Resource%20Talk.mp4" class="shadow rounded-lg w-100"></video>
        <!-- <nuxt-link v-for="(blog, i) in posts" :key="i" :to="&quot;/resource-talks/&quot;+blog.slug" v-bind:class="i==0 ? '' : 'mt-5'" class="px-md-5 col-lg-9 d-flex flex-column flex-md-row">
          <div v-bind:class="i%2!=0 ? 'order-lg-1' : 'order-lg-0'" class="order-0 col-lg-9">
            <img class="w-100 rounded-top" :src="blog.image1">
          </div>
          <div :class="i%2==0 ? 'order-lg-1' : 'order-lg-0'" class="order-1 col-lg">
            <div class="w-100 h-100 d-lg-none border p-4">
              <div class="d-flex d-lg-none flex-column flex-lg-row">
                <span class="text-dark h5">
                  {{ blog.title }}
                </span>
              </div>
              <p class="d-block d-lg-none mt-1 text-secondary">
                {{ blog.author }}
              </p>
              <p style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;" class="d-lg-none mt-1 text-secondary">
                {{ blog.intro }}
              </p>
              <div class="d-block d-lg-none mt-auto d-flex flex-row flex-wrap">
                <span v-for="tags in blog.tags.split(&quot;,&quot;)" :key="tags" style="font-size: 13px;" class="btn btn-md border rounded-lg mr-2 text-muted">
                  {{ tags.trim() }}
                </span>
              </div>
            </div>
          </div>
          <div :style="i%2!=0 ? 'left: 0;' : 'right: 0;'" class="d-none d-lg-block shadow position-absolute order-1 bg-white rounded-lg p-3 m-5" style="width: 50%;">
            <div class="d-flex flex-column flex-lg-row">
              <span class="text-dark h5">
                {{ blog.title }}
              </span>
            </div>
            <p class="mt-1 text-secondary">
              {{ blog.author }}
            </p>
            <p style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;" class="mt-1 text-secondary">
              {{ blog.intro }}
            </p>
            <div class="mt-auto d-flex flex-row flex-wrap">
              <span v-for="tags in blog.tags.split(&quot;,&quot;)" :key="tags" style="font-size: 13px;" class="btn btn-md border rounded-lg mr-2 text-muted">
                {{ tags.trim() }}
              </span>
            </div>
          </div>
        </nuxt-link> -->
      </div>
    </div>
    <Footer class="mt-5" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content('resourceTalks', params.slug)
      .only(['title', 'image1', 'slug', 'author', 'tags', 'intro'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      posts
    }
  },
  data () {
    return {
      posts: [],
      mouse: false
    }
  },
  head () {
    return {
      title: 'Resource Talks | Resource Council',
      meta: [
        { hid: 'og:url', property: 'og:url', name: 'og:url', content: 'https://resource-council.vercel.app/resource-talks' },
        { hid: 'og:title', property: 'og:title', name: 'og:title', content: 'Resource Talks | Resource Council' },
        { hid: 'og:description', property: 'og:description', name: 'og:description', content: 'The environment is where we all meet; where we all have a mutual interest; it is the one thing all of us share. ~  Lady Bird Johnson' },
        { hid: 'og:image', property: 'og:image', name: 'og:image', content: 'https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80' },
        { hid: 'twitter:title', property: 'twitter:title', name: 'twitter:title', content: 'Resource Talks | Resource Council' },
        { hid: 'twitter:description', property: 'twitter:description', name: 'twitter:description', content: 'The environment is where we all meet; where we all have a mutual interest; it is the one thing all of us share. ~  Lady Bird Johnson' },
        { hid: 'twitter:image', property: 'twitter:image', name: 'twitter:image', content: 'https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80' }
      ]
    }
  }
}
</script>

<style>

</style>
