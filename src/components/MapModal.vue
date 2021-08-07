<template>

    <div>
           <transition name="modal">

               <div class="modal">

                   <div v-if="centerDialogVisible">

                       <div class="overlay" @click.self="centerDialogVisible = false;">

                           <div  class="modal">

                               <slot name="body">
                                   <div class="modal-content">
                                       Дефолтный контент модального окна
                                   </div>
                               </slot>


                           </div>

                        </div>

                    </div>

             </div>

           </transition>

     </div>


</template>

<script>

import {  ref } from 'vue'
// import VideoPlayer from './VideoPlayer.vue'


export default {
    name:"MapModal",
    // components: {
    //   VideoPlayer
    // },
    data () {
      return {
        centerDialogVisible: false,
        // showvideo:false,

    }

},
    mounted() {
         console.log('mounted!')
      },

    onUpdated() {
        console.log('updated!')
    },
    methods: {
        // showv() {
        //     this.showvideo = true;
        // },

        openModal() {

            this.centerDialogVisible = true;
            // setTimeout(this.showv, 1000)



    },

  },

  }

</script>

<style scoped lang="scss">


.modal {
  width: 70%;
  height: 80%;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 px 1px 1px;
  transition: all 0.2s ease-in;
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;
}
.fadeIn-enter {
  opacity: 0;
}

.fadeIn-leave-active {
  opacity: 0;
  transition: all 0.2s step-end;
}

.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
  transform: scale(1.1);
}


.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 1100;
  transition: opacity 0.2s ease;
}

.modal-enter-active, .modal-leave-active {
        transition: opacity 1s
    }

.modal-enter, .modal-leave-to {
        opacity: 1s
    }




















</style>
