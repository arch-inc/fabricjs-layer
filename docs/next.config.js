const basePath = process.env.GITHUB_PAGES ? "/fabricjs-layer" : "";
module.exports = {
  basePath,
  env: { BASE_PATH: basePath }
}
