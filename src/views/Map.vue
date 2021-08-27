<template>
  <div class="page_map">
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

}
</script>


<style lang="scss">
// html {
//   overflow:  hidden;
// }




#page_map {
  height: 100%;
  width: 100%;
  margin: 0%;
  // overflow:  hidden;
}

</style>
