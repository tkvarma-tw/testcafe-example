import { t } from 'testcafe'
import basePage from './basePage'
import XPathSelector from '../utilities/xpath-selector'

/**
 * search can exist on multiple pages so we make it a module
 * that we can then require on multiple pages
 */
const searchModule = {
  box: XPathSelector("//input[@id='search']"),
  results: XPathSelector("//h2[@class='post-title']"),
  noResultsMsg: XPathSelector("//h2[@id='no-results']"),

  /**
   * Search blog posts
   * @param  {string}
   */
  async forText (text) {
    await t
      .typeText(this.box, text)
      .pressKey('enter')
  }
}
export default { ...basePage, ...searchModule }
