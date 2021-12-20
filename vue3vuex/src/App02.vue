<template>
  <h1>ajax请求事例</h1>
  <HelloWorld msg="Hello Vue 3.0 + Vite" @Cnext="next" v-if="showChild"></HelloWorld>

  <h2>父组件数据</h2>
  <div v-for="(item,index) in store.state.message" :key="index">
      <p>{{item.text}}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import {reactive} from "vue"
import store from "./store/index"
import {ref,provide,reactive} from 'vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  provide: {
    store: store
  },
  setup() {	
      console.log("这是父组件");
    let showChild = ref(false);
    let api = "https://api.apiopen.top/getJoke?page=1&count=10&type=video";

    fetch(api).then(res => res.json()).then(result => {
        console.log(result);
        store.setmsaage(result.result);
        showChild.value = true;
    })
      let n = 1;
      function next(){
          n += 1;
          let api = `https://api.apiopen.top/getJoke?page=${n}&count=10&type=video`;
          fetch(api).then(res => res.json()).then(result => {
              console.log("下一页",result)
              store.setmsaage(result.result);
              console.log(store.state.message);
          });
      };
      return { next, showChild, store }
  }
}
</script>
