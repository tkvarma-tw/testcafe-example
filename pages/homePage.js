import { t } from 'testcafe'
import basePage from './basePage'
import search from './searchModule'
import XPathSelector from '../utilities/xpath-selector'

const homePage = {
  url: '',
  // include modules...
  search,
  posts: XPathSelector("//h2[@class='post-title']"),
  siteTitle: XPathSelector("//h1"),
  loadMoreBtn: XPathSelector("//button[@id='load-more']"),
  titleAnchor: XPathSelector("//a"),

  /**
   * test if post title exists
   * @param  {string} postTitle
   * @return {bool}
   */
  async postTitleExists (postTitle) {
    return await this.titleAnchor.withText(postTitle).exists
  },

  /**
   * Page back till we find the post title or run out of posts
   * @param  {string} postTitle
   * @return {bool}
   */
  async findPostByPaging (postTitle) {
    await t.click(this.loadMoreBtn)
    return await this.postTitleExists(postTitle) ? true : await this.findPostByPaging(postTitle)
  }
}
export default { ...basePage, ...homePage }
