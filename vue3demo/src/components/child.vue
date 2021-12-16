<template>
    <p>用户的名字：{{userName}}</p>
    <p>用户的年龄：{{userAge}}</p>
    <p>
        该用户的描述： {{description}}
    </p>

    <p>二次使用inject获取的名字：{{people.name}}</p>
    <p>二次使用inject获取的年龄： {{people.age}}</p>
</template>
<script>
import {toRefs, inject, onMounted} from "vue"
export default {
    name: "children",
    props: ["name","age"],
    setup(props){
        console.log(props);
        const propUser = inject('user');
        const description = propUser.userName + "的年龄是" + propUser.userAge;

        const people = inject('people');
        onMounted(() => {
            console.log("接收的props", people);
        })
        return {...propUser, description, people}
    }
}
</script>