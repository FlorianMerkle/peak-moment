import {observable, action, decorate} from 'mobx'

class StoreModel {
  device = 'desktop'
  language = (typeof window !== `undefined` && window.navigator.language.includes("de"))?'de':'en'

  setDevice = (device) => {
    this.device = device
  }

  switchLanguage = (lang) => {
    this.language = lang
  }
}

decorate(StoreModel, {
  device: observable,
  language: observable,
  switchLanguage: action,
})
const AppStore = new StoreModel()
export default AppStore