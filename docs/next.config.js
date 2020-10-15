const basePath = process.env.GITHUB_PAGES ? "/fabricjs-eraser" : "";
module.exports = {
  experimental: {
    basePath
  },
  env: { BASE_PATH: basePath }
}
