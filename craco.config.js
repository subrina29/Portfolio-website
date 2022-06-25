const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@menu-dark-item-active-bg": "#222222",
        },
      },
    },
  ],
};
