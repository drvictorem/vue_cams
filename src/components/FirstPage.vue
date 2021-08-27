<template>

    <div id='form'>

        <el-form id='for' @keyup.enter="authorization"  label-width='120' >


            <el-input

                placeholder="Login"
                v-model="login">
            </el-input>


            <el-input

                placeholder="Password"
                type="password"
                v-model="password">
            </el-input>

            <el-button @click="authorization"> Войти
            </el-button>

        </el-form>

    </div>

</template>

<script>
import { mapActions,mapGetters } from 'vuex'
import routes from '../router/index.js'
import axios from 'axios'


export default {

    data () {
        return {
            login: "",
            password: ""
        }
    },

    computed: {

      ...mapGetters(["getStatus"])
        
    },

    mounted() {



      if (this.getStatus == 'error') {

        this.$emit('invalidData')

      }
    },



    methods: {

      ...mapActions(['logon']),


        authorization() {



            let user = {

                login:this.login,
                password:this.password

            }

            this.logon(user)
            .then((response) => {

              if (response == 'success') {



                this.$router.replace('/map')

              } else {


                  this.$emit('invalidData')

                  this.login = ""
                  this.password = ""
              }
              console.log(localStorage.getItem('authStatus'))
            })


        },
      }
    }



</script>

<style scoped lang="scss">


.el-input {
    background-color: #ffffff;
    margin: 3% auto;
}




#for {
    padding: 1%;

    background-color: #FFFFFF;
    text-align: center;
}


#form {
    color: #303133;
    height: 50%;
    width: 30%;
    margin:10% auto;
    padding: 3%;
    padding-right:3%;
    padding-left:3%;
    border: 1px #EBEEF5;
    box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.5);
    background-color: #FFFFFF
}







</style>
