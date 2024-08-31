<template>
    <div class="grid grid-rows-5 grid-flow-col">
        <div
            v-for="(option, i) in options"
            :key="i"
            class="flex items-center mb-4 cursor-pointer"
        >
            <input
                type="checkbox"
                :value="option.value"
                v-model="selectedValues"
                @change="updateValue"
                :id="option.value"
                class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded"
            />
            <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900"
                >{{ option?.label }}</label
            >
        </div>
    </div>
</template>

<script lang="ts" setup>
import { provide } from "vue";
const emits = defineEmits(["update:modelValue"]);
const selectedValues = ref<string[]>([]);

defineProps({
    options: {
        modelValue: { type: String, default: [] },
        type: Object as PropType<{ value: String; label: String }>,
        default: [
            {
                value: "Honda",
                label: "Honda",
            },
            {
                value: "Ford",
                label: "Ford",
            },
        ],
    },
});

const reset = () => {
    selectedValues.value = [];
};

const updateValue = (event: Event) => {
    emits("update:modelValue", selectedValues.value);
};

defineExpose({
    reset,
});
</script>
