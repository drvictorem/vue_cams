<template>
  <div class="age_map">
      <Nav />
      <Map />


  </div>
</template>


<script>

import Map from '@/components/Map.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'page_map',
  components: {
    Nav,
    Map,

  },
  // computed: {
  //
  //   errorMessageFromRe() {
  //
  //     if(this.$store.getters.getStatusMessage === true) {
  //
  //               this.errorMessage()
  //             }
  //     return this.$store.getters.getStatusMessage
  //   },
  //
  // },
  //
  //
  // watch: {
  //
  //   'statusMessage': {
  //     handler() {
  //       this.errorMessage()
  //
  //     }
  //   },
  //   // deep: true
  //
  // },
  //
  // methods: {
  //   errorMessage() {
  //     this.$message.error('Некорректные данные')
  //   },
  // }
}
</script>


<style lang="scss">

</style>
