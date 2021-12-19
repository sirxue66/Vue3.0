<template>
  <h1>{{ msg }}</h1>
  <h2>{{store.state.stateMsg}}</h2>
  <button @click="store.changeMsg('store 已改变')">change store</button>

  <div v-for="(item,i) in list" :key="i" style="text-align:left;">
    <p>{{item.text}}</p>
  </div>
  <button @click="fatherNext">下一页</button>
</template>

<script>
import {inject, reactive} from "vue"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
setup(props,context) {
  console.log("这是子组件");
  console.log("子组件接受的props",props);
  console.log("子组件接受的context",context);
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