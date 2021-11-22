<template>
  <div id="app">
    <el-button @click="show">按钮</el-button>
  </div>
</template>

<script>


export default {
  name: 'app',
  methods:{
    show(){
      this.$message.success('成功')
    }
  }
}
</script>

<style>

</style>
