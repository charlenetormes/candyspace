<template>
    <div
        class="w-full flex flex-col justify-end items-end text-custom-gray-500"
    >
        <div class="w-full flex flex-col justify-end">
            <div
                v-if="!main"
                :class="['flex gap-[9px] text-[12px] pr-[20px] font-medium']"
            >
                <span>1999</span>
                <span>÷</span>
                <span>2</span>
            </div>
            <div
                :class="[
                    'flex gap-[9px] text-[12px] justify-end select-none overflow-hidden',
                    { ' text-5xl': main },
                ]"
            >
                <span class="text-custom-white-500 font-medium text-5xl">{{
                    formatNumberWithComma(display)
                }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { formatNumberWithComma } from "../../utilities/helpers";
interface Props {
    main: Boolean;
    display: string;
}

defineProps({
    main: { type: Boolean, default: true },
    display: { type: String, default: "0" },
}) satisfies Props;
</script>
