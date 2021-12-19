import {reactive} from 'vue'

const store = {
    state: reactive({
      stateMsg: "hello word",
      type: "状态管理",
      message: [],
    }),
    changeMsg(val){
      this.state.stateMsg = val;
    },
    changeType(val){
      this.state.type = val;
    },
    setmsaage(val){
        this.state.message = val;
    }
  }

  export default store