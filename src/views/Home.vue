<template>
  <div class="home">

        <FirstPage />
    
  </div>
</template>

<script>

import FirstPage from '@/components/FirstPage.vue'

export default {
  name: 'first',
  components: {
    FirstPage
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
