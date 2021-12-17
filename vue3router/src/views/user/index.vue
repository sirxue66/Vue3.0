<template>
    <h1>用户模块页面 --------->    类型{{userType}}</h1></h1>
    <p>这是用户father 。。。。。。。。。。。。。。。</p>

    <router-link to="/user/:type/children">Go to Children</router-link>&nbsp;&nbsp;&nbsp;
    <router-link to="/user/:type/brother">Go to Brother</router-link>

    <router-view></router-view>
</template>
<script>
import {getCurrentInstance,ref} from 'vue'
export default {
    setup() {
        const {proxy} = getCurrentInstance();
        const userType = proxy.$root.$route.params.type;
        console.log("用户模块接参", userType);
        return {userType}
    },
}
</script>

<style scoped>
h1{
    color: olivedrab;
    text-align: center;
}
p{
    color: orange;
    text-align: center;
}

</style>