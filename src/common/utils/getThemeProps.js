const themes = require("../config/themes");

const getDefaultThemeProps = () =>
  getThemeProps(themes[0].key, themes[0].variants[0].key);

const getDefaultVariantProps = variants =>
  getVariantProps(variants, variants[0].key);

const getVariantProps = (variants, variantName) => {
  if (!variantName) return getDefaultVariantProps(variants);

  const variant = Object.assign(
    {},
    variants.find(({ key }) => key === variantName)
  );

  if (!variant) return getDefaultVariantProps();

  let variantProps = {
    variant: variant.key
  };

  delete variant.key;

  return { ...variantProps, ...variant };
};

const getThemeProps = (themeName, variantName) => {
  if (!themeName) return getDefaultThemeProps();

  const theme = Object.assign({}, themes.find(({ key }) => key === themeName));

  if (!theme) return getDefaultThemeProps();

  const variants = theme.variants;
  const hasVariants = variants && variants.length;

  let themeProps = {
    theme: theme.key
  };

  delete theme.key;
  delete theme.variants;

  themeProps = { ...themeProps, ...theme };

  if (!hasVariants) return themeProps;

  return { ...themeProps, ...getVariantProps(variants, variantName) };
};

module.exports = getThemeProps;
