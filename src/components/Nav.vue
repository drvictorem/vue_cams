<template>

    <div id = 'menu'>

        <el-menu
            :default-active="activeIndex"

            class="el-menu-demo"
            mode="horizontal"
            text-color="#606266"
          >

         <el-menu-item
             index="/map"
             text-color="#606266"
             @click="$router.replace('map')" >Карта
        </el-menu-item>

        <el-menu-item
            index="/search"
            text-color="#606266"

            @click="$router.replace('search')">Поиск
        </el-menu-item>

            <el-submenu
            text-color="#606266"
            index="add">
                <template #title>Настройки</template>
                <el-menu-item
                    index="add"
                    text-color="#606266"

                    @click="$router.replace('add')">Добавть новые камеры
                </el-menu-item>

            </el-submenu>

            <div id = "user">



                  <div>
                    <el-avatar size="medium" icon="el-icon-user-solid"></el-avatar>
                  </div>

                  <div>
                    <p>{{getUser}}</p>
                  </div>


            </div>

        </el-menu>




    </div>



</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
      return {
        activeIndex: '',
        
      };
    },

    mounted() {

      this.activeIndex = this.$route.matched[0].path
    },

    computed: {

      ...mapGetters(["getUser"])
    },

  }



</script>
<style scoped lang="scss">


#user{
    width: auto;

    color: #606266;
    position: absolute;
    top: 10%;
    right: 5%;
    text-align: center;

}

p {
    margin-right: 2%;
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
