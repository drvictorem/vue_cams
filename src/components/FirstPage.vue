<template>

    <div id='form'>

        <el-form id='for'  label-width='120' >

            <label for="login">Логин</label>

            <el-input

                placeholder=""
                v-model="login">
            </el-input>

            <label for="password">Пароль</label>

            <el-input

                placeholder=""
                type="password"
                v-model="password">
            </el-input>

            <el-button @click="loginin"
                >Войти
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
        loginin() {
            let user = {
                login:this.login,
                password:this.password
            }
            this.$store.dispatch('login',user)
            if (this.loggenIn == 'success') {
                // localStorage.setItem("login", this.loggenIn )
                console.log(localStorage.setItem("login", this.loggenIn ))
                this.$router.replace('/map')
            }

        }
        }

    }



</script>

<style scoped lang="scss">

.el-button {
    background-color: #ffffff;
    color: #909399;
    // margin-top: -3%;
}




.el-input {
    background-color: #ffffff;
}




#for {
    background-color: #FFFFFF
}

label {
    background-color: #FFFFFF;
    color: #909399;

}

#form {
    color: #303133;
    height: 2500 px;
    width: 500px;
    margin:100px auto;
    padding: 10 px;
    padding-right:15px;
    padding-left:15px;
    line-height: 50px;
    border: 1px #EBEEF5;
    box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.1);
    background-color: #FFFFFF
}







</style>
