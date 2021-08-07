<template>


    <div id='form'>
        <el-form id='for'  ref="ruleForm" label-width="120px" class="demo-ruleForm">
            <el-form-item   label="Имя"  prop="name" >

                <el-input
                    id="in"
                    v-model="form.name"
                    autocomplete="off">
                </el-input>

            </el-form-item>

            <el-form-item label="Полный адрес" >

                <el-input
                    id="in"
                    v-model="form.full_address"
                    autocomplete="off">
                </el-input>

             </el-form-item>

            <el-form-item label="Город" >

                <el-input
                    id="in"
                    v-model="form.id_street" >
                </el-input>

             </el-form-item>

            <el-form-item label="Район" >

                <el-input
                    id="in"
                    v-model="form.id_city" >
                </el-input>

                 </el-form-item>

             <el-form-item label="Статус" >
                 <el-input
                    id="in"
                    v-model="form.id_status" >
                </el-input>
             </el-form-item>

             <el-form-item label="Владелец" >

                <el-input
                    id="in"
                    v-model="form.owner" >
                </el-input>

             </el-form-item>

             <el-form-item label="Информация о владельце" >

                <el-input
                    id="in"
                    v-model="form.owner_info" >
                </el-input>

             </el-form-item>

             <el-form-item label="ip address" >

                <el-input
                    id="in"
                    v-model="form.ip_address" >
                </el-input>

             </el-form-item>

             <el-form-item label="latitude" >

                <el-input
                    id="in"
                    v-model="form.latitude" >
                </el-input>

             </el-form-item>

             <el-form-item label="longitude" >

                <el-input
                    id="in"
                    v-model="form.longitude" >
                </el-input>

             </el-form-item>

             <el-form-item label="Угол обзора" >

                <el-input
                    id="in"
                    v-model="form.viewong_angle" >
                </el-input>

             </el-form-item>

             <el-form-item label="Описание" >

                <el-input
                    id="in"
                    v-model="form.description" >
                </el-input>
             </el-form-item>


             <el-form-item>

                <el-button
                    type="info"
                    plain >
                    Добавить
                </el-button>
                <el-button
                    @click="resetForm('ruleForm')">
                    Сброс
                </el-button>

             </el-form-item>

        </el-form>

    </div>





</template>


<script>

export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
},}







</script>


<style lang="scss">
el-form-item {
    background-color: #FFFFFF;
    color: #FFFFFF;

}
#in {
    width: 90%;


}

#form {
    height: 100% ;
    width: 70%;
    margin:0% auto;
    margin-left:15%;
    margin-right:10%;
    padding-right:3%;
    padding-left:3%;
    padding-top: 3%;
    padding-bottom: 3%;
    text-align: center;
    border: 1px #EBEEF5;
    box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.1);

}

</style>
