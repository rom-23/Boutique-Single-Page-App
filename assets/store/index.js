// import dependency to handle HTTP request to our back end
import Vue from 'vue';
import Vuex from 'vuex';
import Service from '../service.js';

Vue.use(Vuex);

const myPlugin = store => {
    // called when the store is initialized
    store.subscribe((mutation, state) => {
        if (mutation.type === 'GET_POSTS') {
            // alert('PLUGIN : mutation GET_POSTS appellée');
        }
        // called after every mutation.
        console.log('called after every mutation.');
        // The mutation comes in the format of `{ type, payload }`.
        console.log(mutation);
        console.log(state);
    });
};

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
                commit('GET_POSTS', response.data['hydra:member']);
            }
        ).catch(error => {
            console.log(error.message);
        });
    },
    setPost({commit}, params) {
        Service.post(
            'http://127.0.0.1:8000/api/posts',
            params,
            (response) => {
                commit('GET_POST', response);
            }
        ).catch(error => {
            console.log(error.message);
        });
    }
};

const mutations = {
    GET_POSTS(state, posts) {
        state.posts = posts;
    },
    setError(state, msg) {
        state.error = msg;
        if (msg) { console.log(`Error: ${msg}`); }
    }
};

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    plugins: [myPlugin]
});
