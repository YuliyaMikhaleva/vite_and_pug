import { defineConfig } from "vite"
import pugPlugin from "./plugins";
export default defineConfig({
  plugins: [pugPlugin(undefined, { hello: "world"})],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        // main: "./index.html",
        // nested: "./main/index.html",
        // contacts: "./pages/contacts/index.html"
      }
    }
  }
})
