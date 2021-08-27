<template>
    <!-- <Nav /> -->
    <MapBackground ref="mapbck" @clickOnMarker = "showBtnModal"/>
        <div id="panel">
            <div id = "button">
                <el-row>
                    <el-col :span="12">
                        <el-tooltip class="item" effect="dark" content="Показать все камеры" placement="top-start">
                            <el-button
                                type="primary"
                                icon="el-icon-more"
                                size="small"
                                round id="getall"
                                @click="showAll"
                                style="width:50%"
                                plain>
                            </el-button>
                        </el-tooltip>
                    </el-col>
                    <el-col :span="12">
                        <el-tooltip class="item" effect="dark" content="Видео с камеры" placement="top-start">

                            <el-button
                                type="primary"
                                icon="el-icon-video-camera"
                                size="small"
                                v-show="btnOpenModal"
                                round id="getall"
                                @click="openModal"
                                style="width:50%"
                                >
                            </el-button>
                        </el-tooltip>
                    </el-col>
                </el-row>

            </div>
            <div id = "autocomplite">
                <Autocomplite @responseInput = "searchResponse" />
            </div>
        </div>

    <MapModal ref="modal" >
        <template v-slot:body>
                <p>{{text}}</p>
                <VideoPlayer/>
        </template>
    </MapModal>

</template>

<script>
import { mapActions,mapGetters } from 'vuex'
import {  ref } from 'vue'
import MapModal from './MapModal.vue'
import MapBackground from './MapBackground.vue'
import VideoPlayer from './VideoPlayer.vue'
import Autocomplite from './Autocomplite.vue'
// import Nav from '@/components/Nav.vue'

export default {

    components: {

      MapModal,

      MapBackground,

      VideoPlayer,

      Autocomplite,
      // Nav,



  },

    name:"Map",

    data () {

      return {

          btnOpenModal: false,
          text: '',
          cams:[],

    };

},
//   computed: {
//
//     cam: {
//
//       get: function() {
//         return this.$store.getters.getCams
//       },
//
//       set: function(newValue) {
//
//         this.cams = newValue
//
//       }
//     // ...mapGetters['getCams']
//   }
// },
//
//
//   watch: {
//
//     'camsGet': {
//       handler() {
//         console.log('hbh')
//         this.$refs.mapbck.showMarker(this.cams)
//
//       }
//     },
//     // deep: true
//
//   },


    methods: {
        ...mapActions(['getAllCameras']),

        searchResponse(data) {

            let one = JSON.stringify(data)

            let second = JSON.parse(one)

            this.$refs.mapbck.showMarker(second.data);

        },



        openModal() {

            this.$refs.modal.openModal();

        },

        showAll() {

            this.getAllCameras()
            .then((response) => {

              if (response)
              {
                  console.log(response.data)

                  this.$refs.mapbck.showMarker(response.data);

                } else {

                  this.$message.error(this.$store.getters.getError);

                }
            })

        },

        showBtnModal(data) {

            this.btnOpenModal = data['show']
            this.text = data['text']
            console.log(data['text'])

        }



    },

};



</script>

<style scoped lang="scss">

#button {
    // background-color:  #ffffff;
    // padding: 3%;
    margin-right: 1%;
    margin-left: 16%;
    margin-bottom: 4%;
    margin-top: 2%;
    // margin: 3%;

}
#autocomplite {
    width: 100%;
    margin-right: 5%;
    margin-left: 7%;
    margin-bottom: 2%;
    margin-top: 5%;
}

.el-button {

    color: #909399;
    margin-top: 1%;


}

#panel {
    position: fixed;
    right: 0%;
    width: 22%;
    padding: 0%;
    height: 100%;
    z-index: 1000;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    overflow: auto;

}
#getall {
    text-align: center;
    width: 70%;
    height: 5%;
    margin: 5%;
    margin-right: 0%;
    margin-left: 0%;
    margin-bottom: 1%;
    margin-top: 1%;

    // padding: 2%;
    background-color: #ffffff;
}





</style>
