const state = {
  token: 'sdlaiglnaglkh',
  count:0
}

const mutations = {
  COUNT_ADD:function (state:any) {
    state.count++
  }
}

const actions = {
 
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}