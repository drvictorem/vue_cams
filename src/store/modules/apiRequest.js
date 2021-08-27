import axios from 'axios'

export default {

    state: {

        cameras:[],
        error: '',
        statusResponse:'',

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
        },

        addNewCams(ctx, body) {
          console.log(body)
          return axios
          .post('http://10.0.0.19:1111/cams_viewer/api/cams/add_new_cam',body,{
             headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
                  }
                })
            .then(response => {
              console.log(response)
              ctx.commit('pushResponse', response)
            })
            .catch(error => {

                console.log(error)


                ctx.commit('pushResponse', error.message)


            });
        },


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

        },
        pushResponse(state, response) {
          state.statusResponse = response
        }

    },

    getters: {

        getCams(state){
            return state.cameras
        },
        getError(state){
            return state.error
        },
        getStatusResponse(state) {
          return state.statusResponse
        }

    },
}
