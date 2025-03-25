<template>
    <div class="my-page">
        <Header v-if="!isBottomNav" :avatarUrl = "avatarUrl" :userId = "userId" :settingsIcon = "settingsIcon"/>

        <div v-if="!isBottomNav" class="section">
            <h3>订单</h3>
            <div class="icon-group">
                <IconBox v-for="(icon,index) in orderIcons" :key="index" :icon="icon.src" :label="icon.label"></IconBox>
            </div>
        </div>

        <div v-if="!isBottomNav" class="section">
      <h3>功能</h3>
      <div class="icon-group">
        <IconBox v-for="(icon, index) in functionIcons" :key="index" :icon="icon.src" :label="icon.label" />
      </div>
    </div>

    <div v-if="!isBottomNav" class="section">
      <h3>个人中心</h3>
      <div class="icon-group">
        <IconBox v-for="(icon, index) in profileIcons" :key="index" :icon="icon.src" :label="icon.label" />
      </div>
    </div>

      <router-view></router-view>

        <Footer :icons = "icons" :routes = "routes"/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import IconBox from '@/components/IconBox.vue'

export default {
    name: 'My',
    components:{
        Header,
        Footer,
        IconBox,
    },
    data(){
        return{
            avatarUrl: require("@/assets/icon/avatar.png"),
            userId : '测试用户名称',
            settingsIcon: require("@/assets/icon/settings.png"),

            orderIcons:[
                {src:require("@/assets/icon/order1.png"),label:"订单一"},
                { src: require('@/assets/icon/order2.png'), label: '订单2' },
                { src: require('@/assets/icon/order3.png'), label: '订单3' },
                { src: require('@/assets/icon/order4.png'), label: '订单4' },
                { src: require('@/assets/icon/order5.png'), label: '订单5' }
            ],

            functionIcons: [
        { src: require('@/assets/icon/function1.png'), label: '功能1' },
        { src: require('@/assets/icon/function2.png'), label: '功能2' },
        { src: require('@/assets/icon/function3.png'), label: '功能3' },
        { src: require('@/assets/icon/function4.png'), label: '功能4' }
      ],

      profileIcons: [
        { src: require('@/assets/icon/profile1.png'), label: '个人信息' },
        { src: require('@/assets/icon/profile2.png'), label: '设置' },
        { src: require('@/assets/icon/profile3.png'), label: '安全' },
        { src: require('@/assets/icon/profile4.png'), label: '账户' },
        { src: require('@/assets/icon/profile5.png'), label: '日志' },
        { src: require('@/assets/icon/profile6.png'), label: '监测' },
      ],


            icons:[
                require('@/assets/icon/bill.png'),
                require('@/assets/icon/favorite.png'),
                require('@/assets/icon/message.png'),
                require('@/assets/icon/friendZone.png'),
                require('@/assets/icon/index.png'),
            ],
            routes:[
              {src:'/test1',name:'test1'},
              {src:'/test2',name:'test2'},
              {src:'/test3',name:'test3'},
              {src:'/test4',name:'test4'},
              {src:'/',name:'my'},
            ],

            isBottomNav:false,


        }
    },
    methods:{

    },
    watch:{
      $route(to,from){
        this.isBottomNav = ['/test1','/test2','/test3','/test4'].includes(to.path);
        //如果要进入的页面路由 被自定义的数组包含 isBottomNav=true 表示显示导航栏 隐藏其他标签;
      }
    }
}
</script>

<style scoped>
.my-page {
  display: flex;
  flex-direction: column;
}

.main-content{
  flex-grow:1;
}

.section {
  margin: 20px 0;
}

.icon-group {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;  /* 确保第二行的图标从左边开始 */
}

.icon-group > div{
    flex : 1 1 calc(20% - 20px);
    max-width: calc(20% - 20px);
}

h3 {
  font-size: 20px;
  margin-bottom: 10px;
}
</style>