import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        token: undefined
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
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
            axios(config)
                .then(function(response) {
                    commit('SET_TOKEN', response.data.acces_token)
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    },
    modules: {}
})