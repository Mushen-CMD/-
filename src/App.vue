<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
// App component logic here
</script>

<style>
#app {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  background-color: #f5f7fa;
}

.van-nav-bar {
  background-color: #fff;
}

.van-nav-bar__title {
  color: #333;
  font-weight: 600;
}

.van-tabbar {
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05);
}

.van-button--primary {
  background-color: #6366f1;
  border-color: #6366f1;
}

.van-cell {
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 8px;
}

.van-field__control {
  color: #333;
}
</style>