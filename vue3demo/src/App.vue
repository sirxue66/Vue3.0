<template>

  <h1>{{Num}}</h1>
  <button @click="addNum">add</button>

  <p>姓名： {{people.name}}</p>
  <p>反转 姓名： {{reName}}</p>
  <p>年龄： {{people.age}}</p>
  <p>性别： {{sex}}</p>
  <button @click="changName">改名</button>

  <children :name="name" :age="age"></children>

  <child></child>
</template>

<script>
import {reactive, ref, toRefs, computed, watchEffect, watch, provide} from 'vue'
import Children from "./components/children.vue"
import Child from './components/child.vue'
export default {
  name: 'App',
    components: {
        Children,
        Child  
    },
//   组合api
    setup() {
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
        provide('people', people);
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

        const user = reactive({
            userName: "张飞",
            userAge: 21,
            userSex: "男人"
        });
        provide("user", user)

        return {Num, addNum, people, changName, ...toRefs(people)}
    },
}
</script>
