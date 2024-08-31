import { makeServer } from "@/mirage";

export default defineNuxtPlugin(() => {
    makeServer({ environment: "development" });
});
