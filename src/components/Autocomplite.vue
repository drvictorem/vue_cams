<template>

                <el-row :gutter="20">
                    <el-col :span="20">
                        <el-input
                            placeholder="Найти"
                            @keyup.enter="sendRequest"
                            name = "search"
                            v-model="search"
                            size="small"
                            clearable style=" margin-left: 3%; height: 80%;"

                            >
                        </el-input>
                    </el-col>
                </el-row>


</template>


<script>

import { mapActions,mapGetters } from 'vuex'




export default {
    name:"Autocomplite",

    data () {
        return {

            search: null,
            response:'',




        }
    },
    methods: {

        ...mapActions(['getFromSearch']),



    sendRequest () {


        
        let word = this.search
        this.getFromSearch(word)
        .then((response) =>{

              if (response){

                if(response.data != []) {
                  console.log(response.data)

                  let data = response.data
                  this.$emit('responseInput', {
                          data
                      })

                      return data
                } else {

                    this.$message.error('Нет результатов поиска');}

                  } else {

                    this.$message.error(this.$store.getters.getError);
                  }


        })

        this.search = null


    },




        }
    }

</script>

<style scoped lang="scss">




</style>
