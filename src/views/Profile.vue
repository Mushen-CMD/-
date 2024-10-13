<template>
  <div class="profile">
    <van-nav-bar
      title="我"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- ... other code ... -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="chat-o" to="/chat">密报</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/contacts">联系人</van-tabbar-item>
      <van-tabbar-item icon="photo-o" to="/moments">友圈</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/profile">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
// ... other code ...
</script>

<style scoped>
/* ... other styles ... */
</style>