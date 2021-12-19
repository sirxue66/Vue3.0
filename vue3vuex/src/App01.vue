<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import {reactive} from "vue"
import store from "./store/index"

// const store = {
//   state: reactive({
//     stateMsg: "hello word",
//     type: "状态管理"
//   }),
//   changeMsg(val){
//     this.state.stateMsg = val;
//   },
//   changeType(val){
//     this.state.type = val;
//   }
// }

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  provide: {
    store: store
  }
}
</script>
