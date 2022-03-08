<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: xuecheng
 * @Date: 2022-03-08 16:54:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-08 17:09:52
-->

<template>
    <div>

        <div id="div01">
            <div id="div02">
                <div id="div03"></div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    mounted () {
        // 事件冒泡
        var d1 = document.querySelector('#div01');
        var d2 = document.querySelector('#div02');
        var d3 = document.querySelector('#div03');
        d1.onclick = function(){
            console.log(this.id);
        };
        d2.onclick = function(e){
            console.log(this.id);
            e.stopPropagation();
        };
        d3.onclick = function(e){
            console.log(this.id);
            e.stopPropagation();
        };

        //事件捕获
        // d1.addEventListener('click',function(){
        //     console.log(this.id);
        // },true);
        // d2.addEventListener('click',function(){
        //     console.log(this.id);
        // },true);
        // d3.addEventListener('click',function(){
        //     console.log(this.id);
        // },true);
    }
}
</script>
<style scoped>
#div01{
    height: 400px;
    width: 400px;
    background: red;
}
#div02{
    height: 300px;
    width: 300px;
    background: rgb(0, 255, 98);
}
#div03{
    height: 200px;
    width: 200px;
    background: rgb(98, 0, 255);
}
</style>

