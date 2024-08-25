const imageModules = import.meta.glob('../assets/**/*', { eager: true });

export const images = Object.fromEntries(
  Object.entries(imageModules).map(([key, value]) => [
    key.replace('../assets/', ''),
    value.default
  ])
);