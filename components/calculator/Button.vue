<template>
    <div
        :class="[
            { 'bg-custom-white-500 hover:bg-custom-white-400': primary },
            {
                'bg-custom-dark-gray-500 hover:bg-custom-dark-gray-400':
                    secondary,
            },
            { 'bg-custom-orange-500 hover:bg-custom-orange-400': tertiary },
            { 'col-span-2 w-full': !singleColumn },
            'flex justify-center items-center w-[57px] h-[57px] rounded-full cursor-pointer transition-all select-none',
        ]"
    >
        <span v-if="value" class="text-[32px] text-custom-white-500">{{
            value
        }}</span>
        <span v-else-if="text" class="text-[28px] text-black">{{ text }}</span>
        <img v-else-if="icon" :src="icon" v-bind="imgAttrs" />
    </div>
</template>

<script lang="ts" setup>
interface Props {
    primary: boolean;
    secondary: boolean;
    tertiary: boolean;
    singleColumn: boolean;
    value: string;
    text: string;
    icon: string;
    action: string;
}

defineProps({
    primary: { type: Boolean, default: false },
    secondary: { type: Boolean, default: false },
    tertiary: { type: Boolean, default: false },
    singleColumn: { type: Boolean, default: true },
    value: { type: String, default: null },
    text: { type: String, default: null },
    icon: { type: String, default: null },
    action: { type: String, default: "number" },
}) satisfies Props;

const imgAttrs = {
    draggable: "false",
    style: "-webkit-user-drag: none; user-drag: none;",
};
</script>
