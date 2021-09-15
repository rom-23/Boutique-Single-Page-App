import Service from '../../service';

const post = {
    // namespaced : true,
    state: {
        posts: []
    },
    mutations: {
        GET_POSTS(state, posts) {
            state.posts = posts;
        },
        SET_POST(state, posts) {
            state.posts.push(posts);
        }
    },
    actions: {
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
                    commit('SET_POST', response.data);
                }
            ).catch(error => {
                console.log(error.message);
            });
        }
    },
    getters: {
        allPosts: state => {
            return state.posts;
        }
    }
};
export default post;
