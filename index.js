/**
 * GitDeployerWebpackPlugin
 * 一个将指定文件推送到Git远程仓库的webpack插件。
 * A webpack plugin that pushes specified files to a Git remote repository.
 **/
const deployer = require('./lib/deployer')

const PLUGIN_ID = 'git-deployer-webpack-plugin'

class GitDeployerWebpackPlugin {
  constructor(options) {
    this.options = options
  }

  apply(compiler) {
    compiler.hooks.done.tap(PLUGIN_ID, () => {
      deployer(this.options)
    })
  }
}

module.exports = GitDeployerWebpackPlugin
