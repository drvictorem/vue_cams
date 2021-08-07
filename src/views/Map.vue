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

  }
}
</script>


<style lang="scss">

</style>
