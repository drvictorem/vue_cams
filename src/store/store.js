import { createStore } from 'vuex'
import axios from 'axios'
import user from './modules/user'
import apiRequest from './modules/apiRequest'

const store = createStore({

    modules: {
        user,
        apiRequest
    }

})




export default store
