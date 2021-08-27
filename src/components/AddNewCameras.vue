<template>


    <div id='form'>
        <el-form id='for' :model="form"  ref="form"  label-width="10px"  class="demo-ruleForm">

          <el-row>
            <el-col :span="12">
              <p>Имя</p>
            </el-col>
            <el-col :span="12">
              <p>Полный адрес</p>
            </el-col>
          </el-row>
          <el-row>

            <el-col :span="12">


                  <el-input
                      id="in"
                      v-model="form.name"
                      autocomplete="off"
                      size="mini">
                  </el-input>

          </el-col>
            <el-col :span="12">

                  <el-input
                      id="in"
                      v-model="form.full_address"
                      autocomplete="off"
                      size="mini">
                  </el-input>

          </el-col>
          </el-row>
          <el-row>
              <el-col :span="12">
                <p>Город</p>
              </el-col>
              <el-col :span="12">
                <p>Район</p>
              </el-col>
          </el-row>


          <el-row>
            <el-col :span="12">


                  <el-input
                      id="in"
                      v-model="form.id_city"
                      size="mini">
                  </el-input>


          </el-col>
            <el-col :span="12">


                  <el-input
                      id="in"
                      v-model="form.id_district"
                      size="mini">
                  </el-input>



          </el-col>
          </el-row>
          <el-row>
              <el-col :span="12">
                <p>Улица</p>
              </el-col>
              <el-col :span="12">
                <p>Статус</p>
              </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">


                  <el-input
                      id="in"
                      v-model="form.id_street"
                      size="mini">
                  </el-input>


          </el-col>
            <el-col :span="12">


              <el-input
                 id="in"
                 v-model="form.id_status"
                 size="mini">
             </el-input>



          </el-col>
          </el-row>

          <el-row>
              <el-col :span="12">
                <p>Владелец</p>
              </el-col>
              <el-col :span="12">
                <p>Информация о владельце</p>
              </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">

              <el-input
                  id="in"
                  v-model="form.owner"
                  size="mini">
              </el-input>

          </el-col>
            <el-col :span="12">


              <el-input
                  id="in"
                  v-model="form.owner_info"
                  size="mini">
              </el-input>


          </el-col>
          </el-row>

          <el-row>
              <el-col :span="12">
                <p>Угол обзора</p>
              </el-col>
              <el-col :span="12">
                <p>ip address</p>
              </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">

              <el-input
                  id="in"
                  v-model="form.viewong_angle"
                  size="mini">
              </el-input>


          </el-col>
            <el-col :span="12">


                 <el-input
                     id="in"
                     v-model="form.ip_address"
                     size="mini">
                 </el-input>


          </el-col>
          </el-row>
          <el-row>
              <el-col :span="12">
                <p>latitude</p>
              </el-col>
              <el-col :span="12">
                <p>longitude</p>
              </el-col>
          </el-row>



          <el-row>
            <el-col :span="12">


                 <el-input
                     id="in"
                     v-model="form.latitude"
                     size="mini">
                 </el-input>


          </el-col>
            <el-col :span="12">


                 <el-input
                     id="in"
                     v-model="form.longitude"
                     size="mini">
                 </el-input>


          </el-col>
          </el-row>


          <el-row>

              <el-col :span="24">
                <p>Описание</p>
              </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">





          </el-col>
            <el-col :span="24">


                 <el-input
                     id="in"
                     v-model="form.description"
                     size="mini">
                 </el-input>



          </el-col>
          </el-row>

                <el-button
                    type="info"
                    @click="onSubmit"
                    plain >
                    Добавить
                </el-button>
                <el-button
                    @click="reset">
                    Сброс
                </el-button>

        </el-form>

    </div>





</template>


<script>
import { mapActions,mapGetters } from 'vuex'

export default {
  data() {
    return {
      form: {
        name: '',
        full_address: '',
        id_street: '',
        id_city: '',
        id_district: '',
        id_status: '',
        owner: '',
        owner_info: '',
        ip_address: '',
        latitude: '',
        longitude: '',
        viewong_angle: '',
        description: '',

      },
      status: true,
    }
},

methods: {
    ...mapActions(['addNewCams']),


      onSubmit() {

        let body = {
            "name": this.form.name,
            "full_address": this.form.full_address,
            "id_street": this.form.id_street,
            "id_city": this.form.id_city,
            "id_district":this.form.id_district,
            "id_status": this.form.id_status,
            "owner": this.form.owner,
            "owner_info": this.form.owner_info,
            "ip_address": this.form.ip_address,
            "latitude": this.form.latitude,
            "longitude": this.form.longitude,
            "viewong_angle": this.form.viewong_angle,
            "description": this.form.description,
          }



        this.validateForm(body)
        if (this.status === true ) {
          this.addNewCams(JSON.stringify(body))
          .then((response) => {

            if (response)
            {
                console.log(response.data)

                this.$message({
                  message: 'Success',
                  type: 'success'
                });

                this.reset()

              } else {

                this.$message.error(this.$store.getters.getStatusResponse);

              }
          })

        }


      },

      reset() {
        this.form =  {
          name: '',
          full_address: '',
          id_street: '',
          id_city: '',
          id_district: '',
          id_status: '',
          owner: '',
          owner_info: '',
          ip_address: '',
          latitude: '',
          longitude: '',
          viewong_angle: '',
          description: '',
        }
      },

      validateForm(object) {
        for (const property in object) {

          if (object[property]) {
            this.status = true

          } else {
            this.status = false
            this.$message.error('Пожалуйста, заполните все поля')
            break

          }
        }
      },
}



}



</script>


<style lang="scss">
p {

    margin-bottom: 3%;
    margin-left: 1%;
    color: #606266;
    font-size: 90%;
    text-align: left;
    font-family: 'Helvetica Neue';



}





#in {
    width: 80%;
    margin-bottom: 3%;


}

#form {
    height: 100% ;
    width: 70%;
    margin:0% auto;

    padding-right:3%;
    padding-left:3%;
    padding-top: 3%;
    padding-bottom: 2%;
    text-align: center;
    border: 8px #EBEEF5;
    box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.1);

}

</style>
