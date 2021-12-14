<template>
<!-- 动态class -->
  <div :class="id == '1' ? 'd' : 'a'">颜色模块</div>
<!-- 对象模式class -->
  <div :class="{d:isActive}">颜色模块</div>
  <button @click="change">切换</button>
<!-- 数组模式class -->
  <div :class="classList">颜色模块</div>
  <button @click="changeA">切换</button>
<!-- 组合模式class -->
  <div :class="['o','p',{c:isActive}]">颜色模块</div>
  <button @click="changeA">切换</button>
</template>

<script>

export default {
  name: 'App',
  data () {
      return {
          id: "0",
          isActive: true,
          classList:['m']
      }
  },
  methods: {
      change(){
          this.isActive = !this.isActive;
      },
      changeA(){
          this.classList.push('n');
      }
  }
}
</script>
<style scoped>
#d{
    width: 500px;
    height: 500px;
    background-color: aqua;
}
.d{
    width: 600px;
    height: 300px;
    background-color: brown;
}
.a{
    width: 600px;
    height: 300px;
    background-color: rgb(42, 99, 165);
}
.m{
    width: 600px;
    height: 100px;
}
.n{
    background-color: rgb(165, 42, 42);
}
.c{
    width: 600px;
    height: 100px;
    background-color: rgb(42, 165, 48);
}
</style>
