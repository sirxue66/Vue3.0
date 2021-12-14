<template>
<h1 @click="change">{{num}}</h1>
<!-- 绑定多个事件 -->
<h1 :class="{colo:isActive}" @click="change(),changeA()">{{num}}</h1>

<!-- 事件修饰符 -->
<!-- 
    阻止冒泡 .stop
    阻止默认事件 .prevent
    只触发一次 .once
 -->
<h1 :class="{colo:isActive}" @click.once="change(),changeA()">{{num}}</h1>
<!-- 按键修饰符 -->
<!-- enter/tab/delete/esc/up/down ... -->
<h1 :class="{colo:isActive}" @keydown.enter="change(),changeA()">{{num}}</h1>
</template>
<script>

export default {
  name: 'App',
  data () {
      return {
          num: 0,
          isActive: false
      }
  },
  methods: {
      change(){
          this.num += 2;
      },
      changeA(){
          this.isActive = !this.isActive;
      }
  }
}
</script>
<style scoped>
.colo{
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
