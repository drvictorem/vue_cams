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


              <el-row>
                <el-col :span="8">
                  <div>
                    <el-avatar size="medium" icon="el-icon-user-solid" style = 'margin-top:5%;'></el-avatar>
                  </div>

                </el-col>
                <el-col :span="8">

                  <div style = 'margin-top:5%;'>
                    <h1>{{getUser}}</h1>
                  </div>

                </el-col>
                <el-col :span="8">

                  <div>
                      <el-button type="text" @click='logout' style = 'color:#F56C6C; font-size: 80%;' >Выход</el-button>
                  </div>


                </el-col>
              </el-row>

            </div>

        </el-menu>




    </div>



</template>

<script>
import { mapActions,mapGetters } from 'vuex'

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

    methods:{


      logout() {

        // ...mapActions([""])

        this.$store.dispatch('logout')
        this.$router.push('/')
        console.log('logout')

      }
    }

  }



</script>
<style scoped lang="scss">


#user{
    width: 21% ;
    height: 80%;
    color: #606266;
    position: absolute;
    top: 10%;
    right: 0.5%;
    text-align: center;
    box-shadow: 0 0px 2px 0 rgba(0, 0.1, 0.1, 0.1);
    background-color: #ffffff;


}

h1 {
    margin-right: 2%;
    font-size: 90%;
    font-family: 'Helvetica Neue';
    text-align: left;
    top: 5%;

}

#menu {
  // height: 20%;

    border-radius: 4px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
    background-color: #ffffff;

}


</style>
