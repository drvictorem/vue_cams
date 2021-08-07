export default {

    state: {
        status: '',
        user:[{
            login: "rt",
            password: "123"
        }]

    },

    actions: {
        login(ctx, user){

            ctx.commit('request', 'await')

            console.log(user)

            if (user.login == 'rt'){
                ctx.commit('success','success')
            } else {
                ctx.commit('error','error')
            }


        }
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
            console.log(state.status)
        }
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
