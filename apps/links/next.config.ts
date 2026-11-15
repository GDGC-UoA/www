import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
}

export default nextConfig
