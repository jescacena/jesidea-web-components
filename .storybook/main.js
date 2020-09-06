// const path = require("path");
const { mdjsTransformer } = require("@mdjs/core");

module.exports = {
    stories: ["../src/**/*.stories.{js,mdx,mdjs,md}"],
    addons: [
        "storybook-prebuilt/addon-knobs/register.js",
        "storybook-prebuilt/addon-docs/register.js",
        "storybook-prebuilt/addon-a11y/register.js",
        "storybook-prebuilt/addon-viewport/register.js",
        "storybook-prebuilt/addon-backgrounds/register.js",
    ],
    esDevServer: {
        // custom es-dev-server options
        nodeResolve: true,
        watch: true,
        open: true,
        responseTransformers: [mdjsTransformer],
    },
};
