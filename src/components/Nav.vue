<template>

    <div id = 'menu'>

        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            text-color="#606266"
          >

         <el-menu-item
             index="1"
             text-color="#606266"
             @select="handleSelect"
             @click="$router.replace('map')" >Карта
        </el-menu-item>

        <el-menu-item
            index="2"
            text-color="#606266"
            @select="handleSelect"
            @click="$router.replace('search')">Поиск
        </el-menu-item>

            <el-submenu
            text-color="#606266"
            index="3">
                <template #title>Настройки</template>
                <el-menu-item
                    index="2-1"
                    text-color="#606266"
                    @select="handleSelect"
                    @click="$router.replace('add')">Добавть новые камеры
                </el-menu-item>

            </el-submenu>

            <div id = "avatar">

                <el-avatar size="small" icon="el-icon-user-solid"></el-avatar>
                <p>{{getUser}}</p>

            </div>

        </el-menu>




    </div>



</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '2',
        user:''
      };
    },

    computed: mapGetters(["getUser"]),

    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }



</script>
<style scoped lang="scss">


#avatar{
    color: #606266;
    position: absolute;
    top: 10%;
    right: 2%;



}

p {
    font-size: 80%;
    text-align: center;
    top: 5%;

}

#menu {




    // border-radius: 4px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;

}


</style>
