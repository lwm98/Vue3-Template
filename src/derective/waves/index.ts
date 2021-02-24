import waves from './waves'
import { App } from 'vue'

const install = function(app:App) {
  app.directive('waves', waves)
}

export default {
  install
}