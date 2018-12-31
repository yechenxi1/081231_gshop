/**
 * vuex的管理对象store
 */

 import Vue from 'vue'
 import Vuex from 'vues'
 import state from './state'
 import mutations from './mutations'
 import actions from './actions'
 import getters from './getters'

 Vue.use(Vuex)
 export default new Vuex.store({
     state,
     mutations,
     actions,
     getters
 })