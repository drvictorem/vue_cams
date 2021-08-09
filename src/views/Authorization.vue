<template>
  <div class="home">

        <FirstPage @invalidData="errorMessage" />

  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
import FirstPage from '@/components/FirstPage.vue'


export default {
  name: 'authorization',
  components: {
    FirstPage
  },
  data() {
    return {
      status: false
    }


  },

  computed: {

    statusMessage() {
      
      if(this.$store.getters.getStatusMessage == true) {

                this.errorMessage()
              }
      return this.$store.getters.getStatusMessage
    },

  },


  watch: {

    'statusMessage': {
      handler() {
        this.errorMessage()

      }
    },
    deep: true

  },

  methods: {
    errorMessage() {
      this.$message.error('Некорректные данные')
    },
  }


}
</script>
<style scoped lang="scss">

.el-main {
    height: 100%;
    width: 100%;
    background-color: #f5f5f5;
    text-align: center;

  }


</style>
