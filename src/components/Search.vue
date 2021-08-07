<template>
    <div>
            <el-row :gutter="20">
                <el-col :span="20" style="margin-left: 13%;">
                    <Autocomplite @responseInput = "showdata" />
                </el-col>
                <el-col
                    v-if="redirectButton"
                    :span="24"
                    style=" margin-top: 1%; margin-left: -39%; ">
                    <el-button
                        type="success"
                        round size="medium"
                        icon="el-icon-map-location"
                        @click="redirect">
                        Показать на карте
                    </el-button>
                </el-col>
            </el-row>
            <el-table
                ref="multipleTable"
                v-loading="loading"
                v-show = "show_table"
                 :data="tableData"
                 style="width: 100%; margin-top:3%;"
                 @selection-change="selected">
                    <el-table-column
                        type="selection"
                        width="55">
                    </el-table-column>
                    <el-table-column
                        prop="id"
                        label="id">
                    </el-table-column>
                    <el-table-column type="expand" >
                        <template #default="props">
                                <p>Полный адрес: {{ props.row.full_address }}</p>
                                <p>Описание: {{ props.row.description }}</p>
                                <p>latitude: {{ props.row.latitude }}</p>
                                <p>longitude: {{ props.row.longitude }}</p>
                                <p>Владелец: {{ props.row.owner}}</p>
                                <p>Инф. о владельце: {{ props.row.owner_info }}</p>
                                <p>Угол обзора: {{ props.row.viewong_angle }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="Имя">
                    </el-table-column>
                    <el-table-column
                        prop="id_street"
                        label="Улица">
                    </el-table-column>
                    <el-table-column
                        prop="id_district"
                        label="Район">
                    </el-table-column>
                    <el-table-column
                        prop="id_city"
                        label="Город">
                    </el-table-column>
                    <el-table-column
                        prop="id_status"
                        label="Статус">
                    </el-table-column>
            </el-table>
       <!-- <el-pagination
       v-model="page"
      :page-size="20"
      layout="prev, pager, next"
      @current-change="sendRequest"
      :total="total">
    </el-pagination> -->
    </div>

</template>


<script>
import routes from '../router/index.js'
import axios from 'axios'
import Autocomplite from './Autocomplite.vue'

export default {

    name:"Search",
    components: {
        Autocomplite,
  },

    data () {
        return {
            tableData: [],
            loading:false,
            show_table:false,
            dataLink: null,
            selectedRow: [],
            redirectButton: false,
        }
    },
    methods: {
        selected(row) {

            this.redirectButton = true
            this.selectedRow = JSON.stringify(row)

    },
        redirect() {

            this.$router.push({name: 'page_map' , params: { dataSearch: this.selectedRow }})

    },

        showdata(data) {
            this.show_table = true
            this.tableData = []
            let one = JSON.stringify(data)
            console.log(data)
            let second = JSON.parse(one)
            console.log(second.data)
            // this.show_table = true
            this.tableData = second.data

        },


        }
    }
</script>

<style scoped lang="scss">

p {
    font-size: 100%;

}

</style>
