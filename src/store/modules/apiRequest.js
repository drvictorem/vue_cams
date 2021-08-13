import axios from 'axios'

export default {

    state: {

        cameras:[],
        error: '',

    },

    actions: {
        getAllCameras(ctx) {
            return axios
            .get('http://10.0.0.19:1111/cams_viewer/api/cams/get_all_cams',{
               headers: {
                      "Access-Control-Allow-Origin": "*",
                      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
                    }
                  })
            .then(response => {

                ctx.commit('pushAll', response.data)

                return response

            })
            .catch(error => {

                console.log(error)
                let message = error.message
                ctx.commit('pushAll', [])
                ctx.commit('pushError', message)

                // return error

            }
            );
        },
        getFromSearch(ctx, word) {

            let URL = "http://10.0.0.19:1111/cams_viewer/api/cams/get_cams_search?word="+word

            return axios
            .get(URL,{
               headers: {
                      "Access-Control-Allow-Origin": "*",
                      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                      "Access-Control-Allow-Credentials": "true",
                      'Content-Type': 'application/json',
                      "Access-Control-Allow-Headers": "*"
                    }
                  })
            .then(response => {

                ctx.commit('pushFromSearch', response.data)
                console.log(response)
                return response

            })
            .catch(error => {

                console.log(error)

                let message = error.message
                ctx.commit('pushFromSearch', [])
                ctx.commit('pushError', message)

                // return error
            });

        },

        resetError(ctx) {
          ctx.commit('pushError', '')
        }
    },
    mutations: {
        pushAll(state, response) {
            state.cameras = response

        },
        pushFromSearch(state, response) {
            state.cameras = response

        },
        pushError(state, response) {
            state.error = response

        }

    },

    getters: {

        getCams(state){
            return state.cameras
        },
        getError(state){
            return state.error
        }

    },
}
