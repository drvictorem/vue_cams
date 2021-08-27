<template>

                <el-row :gutter="20">
                    <el-col :span="20">
                      <div id = 'Input' @mouseleave="mouseleave">
                        <el-input
                            placeholder="Найти"
                            @keyup.enter="sendRequest"
                            @input = "autocompliteInput"
                            @keydown.down = 'down($index)'
                            name = "search"
                            list = 'dataResponse'
                            v-model="search"
                            size="small"
                            clearable style=" margin-left: 3%; height: 80%;"

                            >
                        </el-input>

                        <div class = 'list'>
                          <ul>
                            <li
                            v-for="item in list"
                            :key="item.id"
                            v-show = "showList"
                            @click="clickItem(item.name)"
                            @mouseover="mouseoverItem(item.name)"

                             >
                              <a>{{item.name}}</a>
                            </li>

                          </ul>
                        </div>

                      </div>
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
            list:[],
            showList: false,
            current: 0,

        }
    },
    methods: {

        ...mapActions(['getFromSearch']),

        clickItem(index) {
          console.log(index)
          this.search = index
          this.sendRequest()
        },

        mouseoverItem(index) {
          this.search = index
        },

        mouseleave() {
          this.showList = false
        },

        autocompliteInput() {

            console.log(this.search)
            this.showList = true



            this.getFromSearch(this.search)
            .then((response) => {
              this.showDataList = true
              this.list = response.data


            }

          )
        },

        sendRequest () {

            let word = this.search
            this.getFromSearch(word)
            .then((response) =>{

                  if (response){

                    if(response.data != []) {
                      console.log(response.data)

                      let data = response.data
                      this.list = response.data

                      console.log(data)
                      this.$emit('responseInput', {
                              data
                          })

                          return data
                    }
                    else {

                        this.$message.error('Нет результатов поиска');}

                      }
                      else {

                        this.$message.error(this.$store.getters.getError);
                      }


            })

            this.search = null
            this.showList = false

        },




        }
    }

</script>

<style scoped lang="scss">

// .active {
//   color: #409EFF;
// }
//
// static {
//   font-size: 80%;
//   color: #606266;
//   font-family: 'Arial';
// }

#Input {
  // height: 50%;

  overflow: inherit;
}

.list {

  margin-left: 0;
  padding-left: 0;
  margin-left: 3%;
  margin-right: -3%;
  // margin-top: 1%;
  z-index:1;
  box-shadow: 0 0px 2px 0 rgba(0, 0.1, 0.1, 0.1);

}
a {
  font-size: 80%;
  color: #606266;
  font-family: 'Arial';
}

ul {
  width: 100% auto;
  text-align: left;
  box-shadow: 0 3px 5px 0 rgba(0, 0.1, 0.1, 0.1);
  background-color: #FFFFFF;
  overflow: inherit;
}

li {
  height: 90%;
  padding: 1%;
  list-style-type: none;
  box-shadow: 0 0px 2px 0 rgba(0, 0.1, 0.1, 0.1);
}


</style>
