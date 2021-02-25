const getters = {
  count: (state:any) => state.user.count,
  token: (state:any) => state.user.token,
  sidebarStatus: (state:any) => state.app.sidebar.opened
}

export default getters
