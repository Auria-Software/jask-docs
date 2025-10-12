// next.config.mjs
import path from "path";
import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
  staticImage: true,
});

export default withNextra({
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
        "@components": path.resolve("./components"),
        "@public": path.resolve("./public")
    };
    return config;
  },

  async redirects() {
    return [
      { source: "/", destination: "/docs", permanent: true }
    ];
    },
});