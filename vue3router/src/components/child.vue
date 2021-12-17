<template>
    <p>用户的名字：{{userName}}</p>
    <p>用户的年龄：{{userAge}}</p>
    <p>
        该用户的描述： {{description}}
    </p>
    <div>二次ingect获取的名字：{{name}}</div>
    <div>二次ingect获取的年龄： {{age}}</div>
</template>
<script>
import {toRefs, inject, onMounted} from "vue"
export default {
    name: "children",
    setup(props){
        console.log(props);
        const propUser = inject('user');
        const description = propUser.userName + "的年龄是" + propUser.userAge;

        const propPeople = inject('people');
        onMounted(() => {
            console.log("接收的props",propUser, propPeople);
            let a = {...propUser}
            let b = {...propPeople}
            console.log("解构",a);
            console.log("解构2",b);
        })
        let Obj = Object.assign({},propUser,propPeople)
        let c = {...toRefs(Obj), description};
        console.log("555555555555555",c);
        return {...toRefs(Obj), description}
    }
}
</script>