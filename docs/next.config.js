const basePath = process.env.GITHUB_PAGES ? "/fabricjs-layer" : "";
module.exports = {
  experimental: {
    basePath
  },
  env: { BASE_PATH: basePath }
}
