// import dependency to handle HTTP request to our back end
import Vue from 'vue';
import Vuex from 'vuex';
import Service from '../service.js';
import post from './modules/post.js';
import category from './modules/category.js';

Vue.use(Vuex);

const myPlugin = store => {
    //called when the store is initialized
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

};

//to handle state
const getters = {

};

const actions = {

};

const mutations = {

};

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        post,
        category
    },
    plugins : [myPlugin],
    strict  : true
});
