import { t } from 'testcafe'
import basePage from './basePage'
import XPathSelector from '../utilities/xpath-selector'

const loginPage = {
  url: 'login/',
  usernameInput: XPathSelector("//input[@id='username']"),
  passwordInput: XPathSelector("//input[@id='password']"),
  loginBtn: XPathSelector("//button[@id='login']"),
  errorMsg: XPathSelector("//div[@id='errorMessage']"),

  async login (username, password) {
    await t
      .typeText(this.usernameInput, username)
      .typeText(this.passwordInput, password)
      .click(this.loginBtn)
  }
}
export default { ...basePage, ...loginPage }
