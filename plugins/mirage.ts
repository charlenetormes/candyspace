import { makeServer } from "../mirage";

export default defineNuxtPlugin(() => {
    if (process.env.NODE_ENV === "development") {
        makeServer({ environment: "development" });
    }
});
