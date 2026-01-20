import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development",
  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },

  devServer: {
    static: "./dist",
    port: 3000,
    open: true,

    proxy: [
      {
        context: ["/api"],
        target: "http://localhost:3001",
        changeOrigin: true
      }
    ]
  }
};

