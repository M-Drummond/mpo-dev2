import type { StorybookConfig } from "@storybook-vue/nuxt";

const config: StorybookConfig = {
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  stories: [
    "../components/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook-vue/nuxt",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
