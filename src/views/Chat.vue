<template>
  <!-- ... other code ... -->
  <van-tabbar v-model="active">
    <van-tabbar-item icon="chat-o" to="/chat">密报</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/contacts">联系人</van-tabbar-item>
    <van-tabbar-item icon="photo-o" to="/moments">友圈</van-tabbar-item>
    <van-tabbar-item icon="manager-o" to="/profile">我</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
// ... other code ...
</script>

<style scoped>
/* ... other styles ... */
</style>