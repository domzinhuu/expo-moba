// gluestack-ui.config.ts

import { createConfig, config as defaultConfig } from "@gluestack-ui/themed";
import { theme } from "./src/theme/base";

const config = createConfig({
  ...defaultConfig.theme,
  tokens: {
    ...defaultConfig.theme.tokens,
    colors: {
      ...defaultConfig.theme.tokens.colors,
      primary300: "#913feb",
      primary500: "#7634bf",
      primary700: "#441f6e",
      secondary300: "#48d4d0",
      secondary500: "#3acbc7",
      secondary700: "#288582",
    },
  },

  components: {
    Toast: {
      theme: {
        variants: {
          variant: {
            danger: {
              bg: theme.colors.danger[500],
              _text: {
                color: theme.colors.white[500],
              },
            },
          },
        },
      },
    },
  },
});

export { config };

// Get the type of Config
type ConfigType = typeof config;

// Extend the internal ui config
declare module "@gluestack-ui/themed" {
  interface UIConfig extends ConfigType {}
}
