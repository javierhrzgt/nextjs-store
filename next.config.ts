import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ["./src/sass"],
    prependData: `@import "main.sass"`,
  },
};

export default nextConfig;
