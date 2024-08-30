<template>
    <div
        class="select-none flex flex-col justify-items-center gap-4 bg-white hover:transition-all hover:duration-100 hover:bg-slate-500 drop-shadow-md rounded-lg p-4 cursor-pointer"
    >
        <div class="flex w-full justify-between">
            <FormCardsRating />
            <div>
                <HeartIcon
                    v-if="favorite"
                    class="w-[24px] h-[24px] text-red-500"
                    @click="favorite = false"
                />
                <OutlinedHeartIcon
                    v-if="!favorite"
                    class="w-[24px] h-[24px] hover:text-red-400"
                    @click="favorite = true"
                />
            </div>
        </div>
        <div class="w-full max-h-[200px]">
            <img
                class="w-full h-full object-cover"
                src="/images/cars/civic.jpg"
                v-bind="imgAttrs"
            />
        </div>
        <div class="flex flex-col">
            <span class="text-slate-400 font-semibold">HONDA CIVIC</span>
            <p class="font-semibold">$30,000</p>
            <div class="flex border-t-[1px] mt-2 pt-2 gap-4">
                <div class="flex gap-2 items-center">
                    <CalendarDaysIcon
                        class="w-[24px] h-[24px] text-orange-400"
                    />
                    <p class="mt-[2px]">2012</p>
                </div>

                <div class="flex gap-2 items-center">
                    <AdjustmentsVerticalIcon
                        class="w-[24px] h-[24px] text-orange-400"
                    />
                    <p class="mt-[2px]">23,756 KM</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { HeartIcon } from "@heroicons/vue/24/solid";
import {
    HeartIcon as OutlinedHeartIcon,
    CalendarDaysIcon,
    AdjustmentsVerticalIcon,
} from "@heroicons/vue/24/outline";

const favorite = ref(false);

const imgAttrs = {
    draggable: "false",
    style: "-webkit-user-drag: none; user-drag: none;",
};
</script>
