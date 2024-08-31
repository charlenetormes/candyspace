<template>
    <div class="p-6 bg-custom-gray-100 cars-container">
        <div
            v-if="getFilteredCars?.length > 0"
            class="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8"
        >
            <FormCardsCar
                v-for="(car, i) in getFilteredCars"
                :key="i"
                @handleClick="handleClick"
                v-bind="car"
                v-motion="{
                    initial: { opacity: 0, y: 50 },
                    enter: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: (i + 1) * 100,
                            duration: 500,
                        },
                    },
                    leave: {
                        opacity: 0,
                        y: -50,
                        transition: {
                            delay: 300,
                            duration: 500,
                        },
                    },
                }"
            />
        </div>
        <div v-else>
            <h1>No results found</h1>
        </div>

        <BaseDrawer :car="activeCar" />
    </div>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/stores/app.store";
import { useCarStore } from "@/stores/car.store";
import { useHead } from "@vueuse/head";
import { storeToRefs } from "pinia";
const appStore = useAppStore();
const carStore = useCarStore();
const { cars, getFilteredCars } = storeToRefs(carStore);
const activeCar = ref();

useHead({
    title: "Used Cars Listing",
    meta: [
        {
            name: "description",
            content:
                "Displays a list of used cars listing in the area with filters",
        },
        { property: "og:title", content: "Used Cars Listing" },
    ],
});

definePageMeta({
    layout: "listing",
});

onMounted(async () => {
    appStore.setPage("cars");
    const response = await fetch("/api/cars");
    const responseJson = await response?.json();
    carStore.setCars(responseJson?.cars ?? []);

    //get max and min
    carStore.setMaxMin();
});

const handleClick = (car: ICar) => {
    appStore.toggleSideBar();
    activeCar.value = car;
};
</script>

<style scoped>
.cars-container {
    min-height: calc(100vh - 136px);
}
</style>
