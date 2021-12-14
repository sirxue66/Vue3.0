<template>
  <p>-----------------子组件------------------</p> 
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      count: 0
    }
  },
  beforeUnmount(){
     console.log("子组件卸载前生命周期函数");
  },
}
</script>
