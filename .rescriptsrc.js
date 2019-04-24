module.exports = [
  [
    'use-babel-config',
    {
      presets: ['react-app'],
      plugins: [
        [
          'babel-plugin-named-asset-import',
          {
            loaderMap: {
              svg: {
                ReactComponent: '@svgr/webpack?-svgo,+ref![path]',
              },
            },
          },
        ],
        [
          'import',
          {
            libraryName: 'antd',
            style: true,
          },
        ],
      ],
    },
  ],
  config => {
    const newConfig = config;

    let rule = newConfig.module.rules.find(rule => rule.oneOf);

    rule.oneOf.unshift({
      test: /\.less$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true,
            // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
            modifyVars: {
              '@primary-color': '#005d9a',
              '@link-color': '#0099d2',
            },
          },
        },
      ],
    });

    return newConfig;
  },
];
