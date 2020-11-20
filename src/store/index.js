import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state = {
    showFlag: false,
    count: 100
}

const getters ={
    isShow:function(){
        return state.showFlag
    },

    getCount: function(){
        return state.count;
    }
}

const mutations = {
    setIsShow: function(state){
        state.showFlag = !state.showFlag;
    },
    setCount: function(state,num){
        state.count = num;
    }
}

const actions = {
    showActions : function(context){
        context.commit('setIsShow')
    },
    countActions: function(context,num){
        context.commit('setCount',num);
    }
}
const store = new Vuex.Store({state,getters,mutations,actions});
export default store;