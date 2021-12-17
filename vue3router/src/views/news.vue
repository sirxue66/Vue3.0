<template>
    <h1>今日头条[ {{paramsId}} ]</h1>
    <p>安达李亚，今日。。。。。。。。。。。。。。。。。。。。。。。。。。</p>


    <p>{{ID}}</p>
    <router-link to="/">to home</router-link>


    <footer>阅读完毕</footer>
</template>

<script>
import {onMounted, getCurrentInstance} from 'vue'
import {useRoute, useRouter} from "vue-router"
export default {
    setup(props) {
        /**
         * 方法一
         */
        const {proxy} = getCurrentInstance();      //获取当前实例
        const paramsId = proxy.$root.$route.params.id;
        onMounted(() => {
            console.log("params传参id",paramsId);
        })

        /**
         * 方法二
         */
        const route = useRoute();
        const router = useRouter();
        const ID = route.params.id;
        const tohome = () => {
            router.push('/');
        }

        return {paramsId, ID, tohome}
    },
}
</script>
<style scoped>
h1{
    color: indigo;
    text-align: center;
}
p{
    color: lawngreen;
    text-align: center;
}
footer{
    height: 20px;
    color: #e60027;
    text-align: center;
    border: 2px solid #e60027;
}
</style>