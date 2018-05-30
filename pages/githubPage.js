import { Selector as $, t } from 'testcafe';
import BasePage from './basePage';

class GithubPage extends BasePage {
    constructor() {
        super();
        this.username = $('.vcard-names');
        this.url = 'https://github.com/qualityshepherd';
        this.isLoaded = this.username.with({ visibilityCheck: true });
    }
}
export default new GithubPage();