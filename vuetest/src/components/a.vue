<template>
  <div>
    a
    <button @click="addRoute">Add Route</button>
    <router-link to="/b">to component B</router-link>
  </div>
</template>

<script>
import B from './b'
export default {
    methods:{
        addRoute(){
            this.$router.addRoutes([
                {path:'/b', component: B}
            ])
        }
    },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  beforeRouteEnter(to, from, next) {
    // 不能获取组件实例 `this` ， 每次进入时候都调用
    console.log("beforeRouteEnter", to, from);
    next();
  },
  beforeRouteUpdate(to, from, next) {
    //http://localhost:8080/#/a?value=3   3发生变化时候调用
    //   http://localhost:8080/#/a/6/555   /a 后面的发生变化的时候察觉不出来
    console.log("beforeRouteUpdate", to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave", to, from);
    next();
  },
};
</script>

<style lang="scss"></style>
