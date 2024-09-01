<template>
    <button
        @click="handleClick"
        type="button"
        :class="[
            {
                'bg-orange-500 hover:bg-orange-400 focus-visible:outline-orange-600':
                    primary,
            },
            'base-button inline-flex items-center gap-x-1.5 rounded-md px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        ]"
    >
        {{ text }}
        <slot />
    </button>
</template>

<script lang="ts" setup>
const emits = defineEmits(["handleClick"]);
interface Props {
    text: string;
    primary: boolean;
    secondary: boolean;
    link: boolean;
}

defineProps({
    text: { type: String, default: "Text" },
    primary: { type: Boolean, default: false },
    secondary: { type: Boolean, default: false },
    link: { type: Boolean, default: false },
}) satisfies Props;

const handleClick = () => {
    emits("handleClick");
};
</script>
