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
        loggenIn() {

            return this.$store.getters.getStatus
        }
    },



    methods: {
        authorization() {
            let user = {
                login:this.login,
                password:this.password
            }
            this.$store.dispatch('login',user)
            if (this.loggenIn == 'success') {

                let authUser = JSON.stringify(this.loggenIn)
                localStorage.setItem("authUser", authUser)
                this.$router.replace('/map')

                this.login = ""
                this.password = ""

            }
            if (this.loggenIn == 'error') {

              let authUser = JSON.stringify(this.loggenIn)
              localStorage.setItem("authUser", authUser)

              this.$emit('invalidData')

              this.login = ""
              this.password = ""

            }

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
