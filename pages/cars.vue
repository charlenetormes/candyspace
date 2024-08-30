<template>
    <div class="p-6 bg-custom-gray-100 cars-container">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
            <FormCardsCar v-for="(car, i) in cars" :key="i" v-bind="car" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useAppStore } from "../stores/app.store";
const appStore = useAppStore();
const cars = ref([]);

definePageMeta({
    layout: "listing",
});

onMounted(async () => {
    appStore.setPage("cars");
    const response = await fetch("/api/cars");
    const responseJson = await response?.json();
    cars.value = responseJson?.cars;
});
</script>

<style scoped>
.cars-container {
    min-height: calc(100vh - 136px);
}
</style>
