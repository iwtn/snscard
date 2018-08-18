<template>
  <section>
    <label for="github_account">Github Account</label>
    <input name="github_account" type="text" />
  </section>
</template>

<script>
const octokit = require('@octokit/rest')()

octokit.users.getForUser({
  username: 'iwtn'
}).then(({data, headers, status}) => {
  console.log(data)
  console.log(headers)
  console.log(status)
})
</script>

<style>
</style>
