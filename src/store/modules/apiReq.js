import axios from 'axios'

export default {

    state: {

        cameras:[],

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

                ctx.commit('getall', response.data)

                return response

            })
            .catch(error => {

                console.log(error)
                ctx.commit('getall', [])

                return error

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
                console.log('+++')

                ctx.commit('getsearch', response.data)
                console.log(response)
                return response

            })
            .catch(error => {

                console.log(error)
                ctx.commit('getsearch', [])
                return error

            });

        },
    },
    mutations: {
        getall(state, response) {
            state.cameras = response

        },
        getsearch(state, response) {
            state.cameras = response

        }

    },

    getters: {

        getCams(state){
            return state.cameras
        }

    },
}
