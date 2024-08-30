<template>
    <div class="w-full border-t-[1px] pt-4">
        <label
            for="default-range"
            class="block mb-2 text-base font-medium text-gray-900"
            >{{ label }}</label
        >
        <input
            id="default-range"
            type="range"
            value="50"
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
    </div>
</template>

<script lang="ts" setup>
defineProps({
    label: { type: String, default: "" },
});
</script>

<style scoped>
.slider {
    -webkit-appearance: none; /* Removes default styling */
    background: #ddd; /* Slider track color */
}

/* WebKit browsers (Chrome, Safari) */
.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px; /* Thumb width */
    height: 24px; /* Thumb height */
    border-radius: 50%; /* Rounded thumb */
    background: #f97316; /* Thumb color */
    cursor: pointer; /* Pointer cursor on hover */
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5); /* Optional shadow */
}

/* Firefox */
.slider::-moz-range-thumb {
    width: 24px; /* Thumb width */
    height: 24px; /* Thumb height */
    border-radius: 50%; /* Rounded thumb */
    background: #f97316; /* Thumb color */
    cursor: pointer; /* Pointer cursor on hover */
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5); /* Optional shadow */
}

/* Internet Explorer / Edge */
.slider::-ms-thumb {
    width: 24px; /* Thumb width */
    height: 24px; /* Thumb height */
    border-radius: 50%; /* Rounded thumb */
    background: #f97316; /* Thumb color */
    cursor: pointer; /* Pointer cursor on hover */
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5); /* Optional shadow */
}
</style>
