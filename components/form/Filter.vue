<template>
    <div class="flex flex-col items-start justify-start gap-5">
        <div class="flex justify-between w-full">
            <h2 class="text-lg font-medium">Filter by:</h2>
            <BaseButton text="Reset all" primary @handleClick="reset" />
        </div>

        <div class="flex justify-between w-full">
            <FormInputsSearch v-model="searchQuery" />
        </div>

        <div class="flex justify-between w-full">
            <FormInputsDisclosure />
        </div>

        <div class="flex justify-between w-full">
            <FormInputsSlider label="Price" />
        </div>
    </div>
</template>

<script lang="ts" setup>
const searchQuery = ref();
const reset = () => {
    alert(`reset! ${searchQuery.value}`);
};
</script>

<style scoped></style>
