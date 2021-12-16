<template>
    <p>接受的名字：{{name}}</p>
    <p>接收的年龄：{{age}}</p>
    <p>
        组合得描述： {{description}}
    </p>
</template>
<script>
import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated,onBeforeUnmount,onUnmounted} from "vue"
export default {
    name: "children",
    props: ["name","age"],
    setup(props){
        console.log(props);
        const description = ref(props.name + "得年龄是：" + props.age);

        // 组合api中的生命周期         生命周期可以二次调用
        onBeforeMount(() => {
            console.log("dom挂载之前");
        });
        onBeforeMount(() => {
            console.log("生命周期二次调用");
        });

        onMounted(() => {
            console.log("dom挂载之后");
        });

        onBeforeUpdate(() => {
            console.log("组件更新之前");
        });

        onMounted((val) => {
            console.log("组件更新之后");
        });

        onBeforeUnmount(() => {
            console.log("组件卸载之前");
        });

        onUnmounted(() => {
            console.log("组件卸载之后");
        });

        return {description}
    }
}
</script>