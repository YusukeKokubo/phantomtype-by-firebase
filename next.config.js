module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/kyoto': { page: '/kyoto' },
      '/nagoya': { page: '/nagoya' },
      '/matsushima': { page: '/matsushima' },
      '/kanazawa': { page: '/kanazawa' },
    }
  },
  exportTrailingSlash: true
}