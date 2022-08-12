const path = require('path')

module.exports = {
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  staticDirs: ['../public'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook-addon-next-router',
    "@storybook/addon-next",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5",
    "disableTelemetry": true
  }
}
// module.exports = {
//   "stories": [
//     "../stories/**/*.stories.mdx",
//     "../stories/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-interactions"
//   ],
//   "framework": "@storybook/react",
//   "core": {
//     "builder": "@storybook/builder-webpack5"
//   }
// }
