import WebFont from 'webfontloader';

const defaultConfig = {
  google: {
    families: ['Roboto:400,500,700']
  }
};

export default function loadWebFont(_, themeOptions) {
  const { webFontConfig } = themeOptions;
  WebFont.load(webFontConfig || defaultConfig);
}