<template>
  <h1>{{count}}</h1>
  <button @click="add">add</button>

  <h1>{{Num}}</h1>
  <button @click="addNum">add</button>
  <HelloWorld v-if="show" />

  <p>姓名： {{people.name}}</p>
  <p>反转 姓名： {{reName}}</p>
  <p>年龄： {{people.age}}</p>
  <p>性别： {{sex}}</p>
  <button @click="changName">改名</button>
</template>

<script>
import {reactive, ref, toRefs, computed, watchEffect, watch} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
//   选项型api
  data(){
      console.log("data");
    return{
        count: 0,
        show: true
    }
  },
  components: {
      HelloWorld
  },
  methods: {
      add(){
          this.count ++;
          this.show = !this.show;
      }
  },

//   组合api
    setup(props) {
        console.log("setup");
        const Num = ref(0);       // ref 响应式一些字符串 数字
        const addNum = () => {
            Num.value += 10
        };
        const people = reactive({      // reactive 响应式对象
            name: "小刘",
            age: 20,
            sex: "男", 
            reName: computed(() => {           //计算属性
                return people.name.split('').reverse().join('');
            })
        });
        const changName = () => {
            console.log("改变姓名");
            people.name = "老王";
        };
        watchEffect(() => {            //自动监听函数中的变量
            let a = people.name;
            console.log("监听people 的 name改变");
        });
        watch(Num,(newval,oldval) => {          //指定监听
            console.log(newval, oldval);
            console.log("监听Num");
        });

        return {Num, addNum, people, changName, ...toRefs(people)}
    },


    beforeCreate() {
        console.log("数据初始化之前")
    },
    created() {
        console.log("数据初始化之后")
    },
    beforeMount() {
        console.log("数据挂载之前")
    },
    mounted() {
        console.log("数据挂载之后")
    },
    beforeUnmount() {
        console.log("卸载之前")
    },
    unmounted() {
        console.log("卸载之后")
    },
}
</script>
