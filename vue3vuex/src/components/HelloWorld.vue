<template>
  <h1>{{ msg }}</h1>
  <h2>{{store.state.stateMsg}}</h2>
  <button @click="store.changeMsg('store 已改变')">change store</button>

  <div v-for="(item,i) in list" :key="i">
    <p>{{item.cname}}  --------------->----------------------  {{item.title}}</p>
  </div>
  <button @click="fatherNext">下一页</button>
</template>

<script>
import {inject, reactive } from "vue"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
setup(props,context) {
  console.log("这是子组件");
    let store = reactive(inject('store'));
    let list = reactive(store.state.message);

    function fatherNext(){
        context.emit('Cnext');
        
    }
    return {store, list, fatherNext}
}
}
</script>
<style scoped>
  h2{
    color: tomato;
  }
  button{
    background: #e60027;
    width: 200px;
    height: 50px;
    position: fixed;
    bottom: 0;
    font-weight: bold;
    font-size: 25px;
  }
</style>