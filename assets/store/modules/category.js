import Service from '../../service';

const category = {
    namespaced : true,
    state      : {
        categories: []
    },
    mutations: {
        GET_CATEGORIES(state, categories) {
            state.categories = categories;
        }
    },
    actions: {
        getCategories({commit}) {
            Service.get(
                'http://127.0.0.1:8000/api/categories',
                (response) => {
                    commit('GET_CATEGORIES', response.data['hydra:member']);
                }
            ).catch(error => {
                console.log(error.message);
            });
        }
    },
    getters: {
        allCategories: state => {
            return state.categories;
        }
    }
};
export default category;
