import loginPage from '../pages/loginPage'
import homePage from '../pages/homePage'

fixture`Login Test`.page("https://qualityshepherd.com/login")

// uses testcafe's User Roles functionality
// https://devexpress.github.io/testcafe/documentation/test-api/authentication/user-roles.html
test('should log into QualityShepherd.com', async t => {
  await loginPage.login('test', 'test');
  // await t.debug()
  await t.expect(homePage.siteTitle.exists).ok()
})

test('invalid credentials should display error', async t => {
  await loginPage.login('invalid', 'user');
  await t.expect(loginPage.errorMsg.visible).ok();
})
