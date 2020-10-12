import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        token: null,
        albums: []
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_ALBUMS(state, albums) {
            state.albums = albums
        }
    },
    actions: {
        setToken({ commit }) {
            // var axios = require('axios'); 
            const username = '6629aeac5f454beaa9ac32f3775de9d7';
            const password = '0b4440d602c540baabfd65042d52432c';
            var urlencoded = new URLSearchParams();
            urlencoded.append("grant_type", "client_credentials");
            var config = {
                method: 'post',
                url: 'https://accounts.spotify.com/api/token',
                headers: {
                    'Authorization': 'Basic ' + new Buffer.from(username + ':' + password).toString('base64'),
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                data: urlencoded
            };
            Axios(config)
                .then(function(response) {
                    commit('SET_TOKEN', response.data.access_token)
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        getAlbums({ commit, state }, id) {
            const config = {
                headers: { Authorization: `Bearer ${state.token}` }
            }
            Axios.get('https://api.spotify.com/v1/albums/?ids=' + id, config).then((response) => {
                commit('SET_ALBUMS', response.data)
            })
        }
    },
    modules: {}
})