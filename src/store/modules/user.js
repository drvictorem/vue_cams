export default {

    state: {
        status: null,
        user:[{
            login: "rt",
            password: "123"
        }],


    },

    actions: {
        logon(ctx, user){

            ctx.commit('request', 'await')

            console.log(user)

            if (user.login == 'rt'){



                let authStatus = JSON.stringify('success')
                localStorage.setItem("authStatus", authStatus)
                console.log(authStatus)
                ctx.commit('statusAuth','success')

                return 'success'


            } else {

                let authStatus = JSON.stringify('error')
                localStorage.setItem("authStatus", authStatus)

                ctx.commit('statusAuth','error')

                return 'error'
            }


        },

        logout(ctx) {

          localStorage.removeItem("authStatus")
          ctx.commit('statusAuth', null)

        },

        incorrectLogin(ctx) {
          ctx.commit('statusAuth','error')
        }

    },
    mutations: {

        request(state,data) {
            state.status = data
            console.log(state.status)
        },

        statusAuth(state,data) {
          state.status = data
          console.log(state.status)
        },

    },

    getters: {
        getStatus(state) {
            return state.status
        },
        getUser(state) {
            console.log(state.user)
            return state.user[0].login
        }
    },
}
