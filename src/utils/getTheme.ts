const themes = require("../common/config/themes");

export const getDefaultTheme = () => ({
  theme: themes[0].key,
  variant: themes[0].variants[0].key
});

export const getNextTheme = (currentThemeKey, currentVariantKey, direction) => {
  const currentTheme = themes.find(({ key }) => key === currentThemeKey);

  if (!currentTheme) return getDefaultTheme();

  if (direction === "right" || direction === "left") {
    let nextThemeKey = currentThemeKey;
    let nextVariantKey = null;

    themes.forEach(({ key }, i) => {
      if (key !== currentThemeKey) return;

      let nextTheme;

      if (direction === "right") {
        nextTheme = themes[i + 1] || themes[0];
      } else {
        nextTheme = themes[i - 1] || themes[themes.length - 1];
      }

      if (!nextTheme) return;

      nextThemeKey = nextTheme.key;

      if (nextTheme.variants && nextTheme.variants.length > 0) {
        nextVariantKey = nextTheme.variants[0].key;
      }
    });

    if (nextThemeKey === currentThemeKey) {
      return {
        theme: currentThemeKey,
        variant: currentVariantKey
      };
    }

    return {
      theme: nextThemeKey,
      variant: nextVariantKey
    };
  }

  const { variants } = currentTheme;

  if (!variants || variants.length < 1) {
    return { theme: currentThemeKey, variant: currentVariantKey };
  }

  let nextVariantKey = currentVariantKey;

  variants.forEach(({ key }, i) => {
    if (key !== currentVariantKey) return;

    let nextVariant;

    if (direction === "up") {
      nextVariant = variants[i + 1] || variants[0];
    } else if (direction === "down") {
      nextVariant = variants[i - 1] || variants[variants.length - 1];
    } else {
      return;
    }

    if (!nextVariant) return;

    nextVariantKey = nextVariant.key;
  });

  return {
    theme: currentThemeKey,
    variant: nextVariantKey
  };
};
