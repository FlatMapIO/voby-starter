import { defineConfig } from "vite";
import voby from "voby-vite";
import tsconfigPaths from 'vite-tsconfig-paths'
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    voby({
      hmr: {
        enabled: true,
      },
    }),
  ],
});
