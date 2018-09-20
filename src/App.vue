<template>
  <div id="app">
    <div class="side-bar">
      <div class="side-bar-menu" @click="$router.push({ name: 'vue-custom-element' })">
        vue-custom-element
      </div>
      <div class="side-bar-menu" @click="$router.push({ name: 'vue-web-component-wrapper' })">
        vue-web-component-wrapper
      </div>
    </div>
    <div class="wc-body">
      <router-view/>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style scoped>
.side-bar {
  float: left;
  width: 200px;
  border-right: 1px solid #ccc;
  height: 100vh;
}
.side-bar-menu {
  float: left;
  width: 100%;
  padding: 20px;
}
.side-bar-menu:hover {
  color: blue;
  cursor: pointer;
}
.wc-body {
  float: left;
  width: calc(100vw - 1px - 200px);
}
</style>
