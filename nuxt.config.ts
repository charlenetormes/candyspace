// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: "/candyspace",
    },
    runtimeConfig: {
        baseURL: "/candyspace",
    },
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ["@/assets/css/main.css", "@/assets/css/global.css", "vuetify/styles"],
    build: {
        transpile: ["vuetify"],
    },
    plugins: ["@/plugins/vuetify", "@/plugins/mirage.ts"],
    modules: ["@pinia/nuxt", "@vueuse/motion/nuxt"],
});
