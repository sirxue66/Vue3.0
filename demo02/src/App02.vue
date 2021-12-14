<template>
  <h2 @click="changeMsg">{{msg}}</h2>
  <h2 v-once>{{msg}}</h2>
  <input type="text" v-model="msg">
  <h2>{{msg.split('')}}</h2>
  <h2>{{msg.split('').reverse()}}</h2>
  <h2>{{msg.split('').reverse().join('')}}</h2>
</template>

<script>

export default {
  name: 'App',
  data () {
      return {
          msg: "hello word"
      }
  },
  methods: {
      changeMsg(){
          this.msg = "hello Chaina!"
      }
  }
}
</script>
