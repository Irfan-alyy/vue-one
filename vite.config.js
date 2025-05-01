import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8081, // Set the desired port
  },
  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({
      resolvers: [IconsResolver()],
    }),
    Components({
      resolvers: [
        IconsResolver({
          prefix: 'i', // use <i-collection-name-icon-name />
          enabledCollections: ['material-symbols', 'mdi', 'heroicons', 'carbon'], // Add needed sets here
        }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
