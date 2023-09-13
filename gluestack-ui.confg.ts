// gluestack-ui.config.ts

import { createConfig, config as defaultConfig } from "@gluestack-ui/themed";
import { theme } from "./src/theme/base";

const config = createConfig({
  ...defaultConfig.theme,
  tokens: {
    ...defaultConfig.theme.tokens,
    colors: {
      ...defaultConfig.theme.tokens.colors,
      primary600_alpha_10: "#1a91ff1a",
      primary600_alpha_20: "#1a91ff33",
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

// Get the type of Config
type ConfigType = typeof config;

// Extend the internal ui config
declare module "@gluestack-ui/themed" {
  interface UIConfig extends ConfigType {}
}
