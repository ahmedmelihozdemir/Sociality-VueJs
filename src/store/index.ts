import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        showMenu: false,
        data: {},
    },
    getters: {
        getData: (state) => state.data,
    },
    mutations: {
        setData(state, payload) {
            state.data = payload;
        },
    },
    actions: {
        dataJson({ commit }) {
            axios.get("./data.json").then((response) => {
                console.log(response);
                commit("setData", response.data);
            });
        },
    },
    modules: {},
});
