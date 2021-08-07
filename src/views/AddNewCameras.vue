<template>
  <div class="add_new_cameras">
      <Nav />
      <el-main>
        <AddNewCameras />
    </el-main>
  </div>
</template>

<script>

import AddNewCameras from '@/components/AddNewCameras.vue'
import Nav from '@/components/Nav.vue'


export default {
  name: 'add',
  components: {
    Nav,
    AddNewCameras
  }
}
</script>
<style scoped lang="scss">

.el-main {
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    text-align: center;

  }


</style>
