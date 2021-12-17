<template>
<div id="app">
  <h1>Hello App!</h1>
  <p>
    <router-link to="/">Go to Home</router-link><br/>
    <router-link to="/detail">Go to About</router-link><br/>
    <router-link to="/news/1861329">Go to News</router-link><br/>
    <router-link to="/user/boss">Go to User</router-link><br/>
    <router-link to="/notfound">Go to NotFound(404)</router-link>
  </p>
  <!-- route outlet -->
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App',
}
</script>
