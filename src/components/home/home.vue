<template>
  <div class="hello">
    <home-nav></home-nav>

    <div v-if="!$auth.ready()">
      Loading ...
    </div>

    <div v-if="$auth.ready() && isLoggedIn">
    </div>
  </div>
</template>

<script src='./config.js'></script>
<style scoped lang='scss' src='./styles.scss'></style>
