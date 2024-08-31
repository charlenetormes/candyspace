<template>
    <div class="flex flex-col items-start justify-start gap-5">
        <div class="flex justify-between w-full">
            <h2 class="text-lg font-medium">Filter by:</h2>
            <BaseButton text="Reset all" primary @handleClick="reset" />
        </div>

        <div class="flex justify-between w-full">
            <FormInputsSearch
                placeholder="Search make, model, or year"
                v-model="searchQuery"
                :modelValue="searchQuery"
            />
        </div>

        <div class="flex justify-between w-full">
            <FormInputsDisclosure />
        </div>

        <div class="flex justify-between w-full">
            <FormInputsSlider
                :min="min"
                :max="max"
                label="Price"
                ref="sliderRef"
                v-model="slider"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useCarStore } from "../../stores/car.store";
import { storeToRefs } from "pinia";
const carStore = useCarStore();
const { min, max, filters } = storeToRefs(carStore);
const searchQuery = ref();
const sliderRef = ref();
const slider = ref([0, 1500]);

const reset = () => {
    carStore.reset();
    searchQuery.value = "";
    slider.value = [min.value, max.value];
    sliderRef.value.setValue([min.value, max.value]);
};

/**
 *  Watch for search query changes so we can filter the results
 */
watch(
    () => searchQuery.value,
    (newVal) => {
        filters.value.query = newVal;
    }
);

/**
 * Watch for changes in the min - max price to adjust range slider
 */
watch(
    () => max.value,
    () => {
        sliderRef.value.setValue([min.value, max.value]);
        slider.value = [min.value, max.value];
    }
);

/**
 * Watch for changes in the slider price to adjust car listings
 */
watch(
    () => slider.value,
    () => {
        filters.value.min = slider.value?.[0];

        filters.value.max = slider.value?.[1];
    }
);
</script>

<style scoped></style>
