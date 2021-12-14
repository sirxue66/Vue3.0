<template>
<!-- 动态指令 -->
  <div v-bind:[attribute]="d">颜色模块</div>
  <button @click="changeMsg">换色</button>
  <button @[eventType]="changeMsg">换色</button>
</template>

<script>

export default {
  name: 'App',
  data () {
      return {
          attribute: "id",
          d: "d",
          eventType: "click"
      }
  },
  methods: {
      changeMsg(){
          this.attribute = this.attribute == "id" ? "class" : "id";
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
</style>
