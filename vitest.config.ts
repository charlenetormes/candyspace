import { defineConfig } from "vitest/config";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
    test: {
        environment: "jsdom",
        globals: true,
        deps: {
            inline: ["vuetify"],
        },
        coverage: {
            reporter: ["text", "json", "html"],
        },
    },
    resolve: {
        alias: [
            {
                find: "@",
                replacement: resolve(__dirname, "../"),
            },
        ],
    },
});
