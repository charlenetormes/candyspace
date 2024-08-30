<template>
    <div class="p-6 bg-custom-gray-100 cars-container">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
            <FormCardsCar />
            <FormCardsCar />
            <FormCardsCar />

            <FormCardsCar />
            <FormCardsCar />
            <FormCardsCar />

            <FormCardsCar />
            <FormCardsCar />
            <FormCardsCar />

            <FormCardsCar />
            <FormCardsCar />
            <FormCardsCar />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useAppStore } from "../stores/app.store";
const appStore = useAppStore();

definePageMeta({
    layout: "listing",
});

onMounted(() => {
    appStore.setPage("cars");
});
</script>

<style scoped>
.cars-container {
    min-height: calc(100vh - 136px);
}
</style>
