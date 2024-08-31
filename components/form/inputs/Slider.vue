<template>
    <div class="w-full border-t-[1px] pt-4">
        <label
            for="default-range"
            class="block mb-2 text-base font-semibold text-gray-900"
            >{{ label }}</label
        >
        <v-range-slider
            color="orange"
            class="mt-10"
            :min="min"
            :max="max"
            v-model="value"
            @update:modelValue="updateValue"
            step="10"
            thumb-label="always"
        ></v-range-slider>
    </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
    label: { type: String, default: "" },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 1500 },
});

const value = ref([props?.min, props?.max]);

const setValue = (val: number[]) => {
    value.value = val;
};

const updateValue = (value: number | number[]) => {
    emits("update:modelValue", value);
};

defineExpose({
    setValue,
});
</script>

<style scoped>
.slider {
    -webkit-appearance: none;
    background: #ddd;
}

/* WebKit browsers (Chrome, Safari) */
.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #f97316;
    cursor: pointer;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
}

/* Firefox */
.slider::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #f97316;
    cursor: pointer;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
}

/* Internet Explorer / Edge */
.slider::-ms-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #f97316;
    cursor: pointer;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
}
</style>
