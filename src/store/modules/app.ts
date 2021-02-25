import { local } from '../../utils/storage'

const state = {
  sidebar: {
    opened: local.get('sidebarStatus') ? !!+local.get('sidebarStatus') : true,
    withoutAnimation: false
  }
}

const mutations = {
  TOGGLE_SIDEBAR: (state:any) => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      local.set('sidebarStatus', 1)
    } else {
      local.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state:any, withoutAnimation:boolean) => {
    local.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  }
}

const actions = {
  toggleSideBar(context:any) {
    context.commit('TOGGLE_SIDEBAR')
  },
  closeSideBar(context:any, { withoutAnimation }:any) {
    context.commit('CLOSE_SIDEBAR', withoutAnimation)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
