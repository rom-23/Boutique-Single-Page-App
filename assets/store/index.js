import Vue from 'vue';
import Vuex from 'vuex';
import post from './modules/post.js';
import category from './modules/category.js';

Vue.use(Vuex);

const myPlugin = store => {
    //called when the store is initialized
    store.subscribe((mutation, state) => {
        if (mutation.type === 'post/SET_POST') {
            alert('PLUGIN Mutation : mutation du state post');
        }
        // called after every mutation.
        console.log(mutation.payload);
        console.log(state.post);

    });
    store.subscribeAction({
        after: (action, state) => {
            if (action.type === 'post/setPost') {
                alert('PLUGIN Action : enregistrement en base de post');
            }
        }
    });

};

//export store module
export default new Vuex.Store({
    modules: {
        post,
        category
    },
    plugins : [myPlugin],
    strict  : true
});
