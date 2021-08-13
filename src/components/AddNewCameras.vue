<template>


    <div id='form'>
        <el-form id='for' :model="form" ref="form" label-width="10px"  class="demo-ruleForm">

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
                      v-model="form.id_street"
                      size="mini">
                  </el-input>


          </el-col>
            <el-col :span="12">


                  <el-input
                      id="in"
                      v-model="form.id_city"
                      size="mini">
                  </el-input>



          </el-col>
          </el-row>

          <el-row>
              <el-col :span="12">
                <p>Статус</p>
              </el-col>
              <el-col :span="12">
                <p>Владелец</p>
              </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">

                  <el-input
                     id="in"
                     v-model="form.id_status"
                     size="mini">
                 </el-input>

          </el-col>
            <el-col :span="12">


                 <el-input
                     id="in"
                     v-model="form.owner"
                     size="mini">
                 </el-input>


          </el-col>
          </el-row>

          <el-row>
              <el-col :span="12">
                <p>Информация о владельце</p>
              </el-col>
              <el-col :span="12">
                <p>ip address</p>
              </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">


                 <el-input
                     id="in"
                     v-model="form.owner_info"
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
                <p>Угол обзора</p>
              </el-col>
              <el-col :span="12">
                <p>Описание</p>
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

export default {
  data() {
    return {
      form: {

        name: '',
        full_address: '',
        id_street: '',
        id_city: '',
        id_status: '',
        owner: '',
        owner_info: '',
        ip_address: '',
        viewong_angle: '',
        description: '',
      }
    }
},

methods: {
      onSubmit() {
        console.log(this.form);
      },

      reset() {
        this.form =  {
          name: '',
          full_address: '',
          id_street: '',
          id_city: '',
          id_status: '',
          owner: '',
          owner_info: '',
          ip_address: '',
          viewong_angle: '',
          description: '',
        }
      }


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
