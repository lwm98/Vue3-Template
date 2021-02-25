import router from '../../router'

const state = {
  token: 'sdlaiglnaglkh',
  count: 0
}

const mutations = {
  COUNT_ADD: function(state:any) {
    state.count++
  }
}

const actions = {
  LOGIN_OUT: function() {
    router.replace({ name: 'Index' })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
