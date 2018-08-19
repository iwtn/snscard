<template>
  <section class="container">
    <div>
      <h1 class="title">
        {{ login }}
      </h1>
      <img class="image" :src="avatar_url" />
      <ul class="links">
        <li>{{bio}}</li>
        <li>{{blog}}</li>
      </ul>
    </div>
  </section>
</template>

<script>
const octokit = require('@octokit/rest')()


export default {
  asyncData () {
    return octokit.users.getForUser({
      username: 'iwtn'
    }).then(({data, headers, status}) => {
      console.log(data)
      return {
        login: data.login,
        avatar_url: data.avatar_url,
        bio: data.bio,
        blog: data.blog
      }
    })
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 900;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.image {
  width: 100vw;
}

.links {
  text-align: left;
  font-size: 20px;
  list-style-type: none;
}
</style>

