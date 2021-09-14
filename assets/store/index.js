// import dependency to handle HTTP request to our back end
import Vue from 'vue';
import Vuex from 'vuex';
import Service from '../service.js';

Vue.use(Vuex);

//to handle state
const state = {
    posts: []
};

//to handle state
const getters = {
    allPosts: state => {
        return state.posts;
    }
};

const actions = {
    getPosts({commit}) {
        Service.get(
            'http://127.0.0.1:8000/api/posts',
            (response) => {
                commit('SET_POSTS', response.data['hydra:member']);
            }
        ).catch(error => {
            console.log(error.message);
        });
    }
};

const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts;
    }
};

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});
