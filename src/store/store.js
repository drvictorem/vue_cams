import { createStore } from 'vuex'
import axios from 'axios'
import user from './modules/user'
import apiReq from './modules/apiReq'

const store = createStore({

    modules: {
        user,
        apiReq
    }

})




export default store
