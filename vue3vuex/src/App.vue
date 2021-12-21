<template>
  <h1>ajax请求事例(配置代理 跨域)</h1>
  <HelloWorld msg="Hello Vue 3.0 + Vite" @Cnext="next" v-if="showChild"></HelloWorld>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import {reactive} from "vue"
import store from "./store/index"
import {ref} from 'vue'
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
    let api = "/api/web201605/js/herolist.json";
    fetch(api).then(res => res.json()).then(result => {
        console.log(result);
        store.setmsaage(result.result);
        showChild.value = true;
    })
      return { showChild }
  }
}
</script>
