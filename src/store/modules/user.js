export default {

    state: {
        status: '',
        user:[{
            login: "rt",
            password: "123"
        }],
        showErrorMessage: null,

    },

    actions: {
        login(ctx, user){

            ctx.commit('request', 'await')

            console.log(user)

            if (user.login == 'rt'){
                ctx.commit('success','success')
            } else {
                // ctx.commit()
                ctx.commit('error','error')
            }


        },

        incorrectLogin(ctx,user) {

          ctx.commit('status')

        },
    },
    mutations: {
        request(state,data) {
            state.status = data
            console.log(state.status)
        },
        success(state,data) {
            state.status = data
            console.log(state.status)
        },
        error(state,data) {
            state.status = data
            state.showErrorMessage = true
            console.log(state.showErrorMessage)

        },
        status(state) {
          // console.log(72873)
          state.showErrorMessage = true
          console.log(state.showErrorMessage)
        }
    },

    getters: {
        getStatus(state) {
            return state.status
        },
        getUser(state) {
            console.log(state.user)
            return state.user[0].login
        },
        getStatusMessage(state) {

          return state.showErrorMessage
        }
    },
}
