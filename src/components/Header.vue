<template>
  <header class="header">
    <div class="avatar">
        <img :src="avatarUrl" alt="头像" class="avatar-img"> <!--alt描述图片内容-->
    </div>
    <div class="user-id">
        <span class="user-id-text">{{ userId }}</span>
    </div>
    <div class="settings">
        <img :src="settingsIcon" alt="图标" class="settings-icon">
    </div>
  </header>
</template>

<script>
export default {
    name: 'Header',
    props:{
        avatarUrl:String,
        userId:String,
        settingsIcon:String,
    },
    // data(){
    //     return{
    //         avatarUrl : require('@/assets/icon/avatar.png'),
    //         userId : '用户测试名称',
    //         settingsIcon: require('@/assets/icon/settings.png'),
    //     }
    // },
}
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #fff;
}

.avatar-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.user-id-text {
  font-size: 24px;
  font-weight: bold;
  margin-right: 800px;
}

.settings-icon {
  width: 30px;
  height: 30px;
}
</style>