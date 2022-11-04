[![Codeship Status for qualityshepherd/testcafe-example](https://app.codeship.com/projects/833a4d80-7100-0137-f6e1-16b3e657657a/status?branch=master)](https://app.codeship.com/projects/348317).


## Testcafe Example
Example e2e tests (some of which are slightly silly) written in [Testcafe](https://github.com/DevExpress/testcafe), that:
- use a page object pattern (now with 100% _less class_)
- are es6y
- use async/await
- run in parallel
- run on multiple browsers
- run headlessly
- run tests on [BrowserStack](https://browserstack.com)

## Setup
1. clone `clone git@github.com:tkvarma-tw/testcafe-example.git`
2. install `npm install`

## Run
* run `npm test` to watch in browser, or
* `npm run all` to run parallel, headless, on Chrome and Firefox or
* `npm run browserstack` to run tests in the cloud (requires an account and env keys to be set)
* `npm run` to see more options

## Run in Browserstack.
* Enter the browserstack username and access key in `export_env.sh` file
* Run `sh export_env.sh` to set the environment variables from bash script.
* run `npm run browserstack_chrome` to run tests in browserstack.
* You can check the build running in Browserstack Automate Dashboard.

---

![Test Run Gif](https://qualityshepherd.com/screencasts/testrun.gif)
