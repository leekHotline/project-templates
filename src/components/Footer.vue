<template>
  <footer class="footer">
    <div class="footer-box" v-for="(icon,index) in icons" :key="index" >
        <router-link :to="routes[index].src">
                  <img :src="icon"  class="footer-icon" alt="图片">
        </router-link>

    </div>
  </footer>
</template>

<script>
export default {
    name:'Footer',
    props:{
        icons:Array,
        routes:Array,
    },
    // data(){
    //     return{
    //         icons:[
    //             require('@/assets/icon/bill.png'),
    //             require('@/assets/icon/favorite.png'),
    //             require('@/assets/icon/message.png'),
    //             require('@/assets/icon/friendZone.png'),
    //             require('@/assets/icon/index.png'),
    //         ]
    //     }
    // }
}
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-around;
  padding: 16px;
  background-color: #f8f8f8;

  position: fixed; /* 使用固定定位 */
  bottom: 0; /* 距离底部为0 */
  left: 0; /* 使页脚从页面的左边开始 */
  width: 100%; /* 使宽度占满整个页面 */
  box-sizing: border-box; /* 包括内边距和边框在内的宽度计算 */
}


.footer-box {
  text-align: center;
}

.footer-icon {
  width: 40px;
  height: 40px;
}
</style>