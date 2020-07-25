<template>
  <div class="d-flex flex-column">
    <Cover page-desc="Blogs" image="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
    <div class="container">
      <div class="d-flex flex-row flex-wrap">
        <nuxt-link v-for="(blog, i) in posts" :key="i" :to="&quot;/blogs/&quot;+blog.slug" class="col-12 col-sm-6 col-lg-4 mt-5">
          <div class="animated fadeIn d-flex flex-column h-100 align-items-stretch border rounded-lg" onmouseout="this.classList.remove(&quot;shadow-sm&quot;)" onmouseover="this.classList.add(&quot;shadow-sm&quot;)">
            <img class="rounded-top w-100" :src="blog.image1">
            <div class="p-3 d-flex flex-column h-100 w-100 rounded-bottom">
              <div class="mt-2 d-flex align-items-center">
                <svg
                  style="height: 18px;"
                  class="text-secondary"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="calendar-day"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                ><path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-96zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z" /></svg>
                <span class="ml-2 text-secondary">{{ blog.createdAt.substring(0, 10) }}</span>
              </div>
              <h5 class="mt-3 text--green">
                {{ blog.title }}
              </h5>
              <p style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;" class="mt-1 text-secondary">
                {{ blog.intro }}
              </p>
              <div class="mt-auto d-flex flex-row flex-wrap">
                <span v-for="tags in blog.tags.split(&quot;,&quot;)" :key="tags" style="font-size: 13px;" class="btn btn-md border rounded-lg mr-2 text-muted">
                  {{ tags.trim() }}
                </span>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <Footer class="mt-5" />
  </div>
</template>

<script>
export default {
  async asyncData () {
    const posts = await fetch('http://localhost:3000/_content')
      .then(r => r.json())
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
      title: 'Blogs | Resource Council',
      meta: [
        { hid: 'description', name: 'description', content: 'Blogs | Resource Council' },
        { hid: 'og:description', name: 'og:description', content: 'Blogs | Resource Council' }
      ]
    }
  }
}
</script>

<style>

</style>
