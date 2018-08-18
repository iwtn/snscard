<template>
  <section>
    <label for="github_account">Github Account</label>
    <input name="github_account" type="text"></input>
  </section>
</template>

<script>
const octokit = require('@octokit/rest')()

octokit.repos.getForOrg({
  org: 'octokit',
  type: 'public'
}).then(({data, headers, status}) => {
  console.log(data)
  console.log(headers)
  console.log(status)
})
</script>

<style>
</style>
