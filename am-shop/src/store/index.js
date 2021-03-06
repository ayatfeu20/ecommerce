import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import product from './product'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      user,
      product
    },

    strict: process.env.DEV
  })

  return Store
}