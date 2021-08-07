<template>
    <Nav/>
    <el-main>
        <div class="search_cam">

            <Search />

        </div>
    </el-main>

</template>

<script>

import Search from '@/components/Search.vue'
import Nav from '@/components/Nav.vue'
export default {
  name: 'search_cam',
  components: {
    Nav,
    Search,

  }
}
</script>
<style scoped lang="scss">


.search_cam {
    height: 70%;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
}

.el-main {
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    text-align: center;

  }


</style>
