<template>
    <div
        class="select-none flex flex-col justify-items-center gap-4 bg-white hover:transition-all hover:duration-100 hover:bg-slate-500 drop-shadow-md rounded-lg p-4 cursor-pointer"
    >
        <div class="flex w-full justify-between">
            <FormCardsRating :rating="rating" :reviews="reviews" />
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
                :src="thumbnailImage"
                v-bind="imgAttrs"
            />
        </div>
        <div class="flex flex-col">
            <span class="text-slate-400 font-semibold"
                >{{ make }} {{ model }}</span
            >
            <p class="font-semibold">${{ formatNumberWithComma(price) }}</p>
            <div class="flex border-t-[1px] mt-2 pt-2 gap-4">
                <div class="flex gap-2 items-center">
                    <CalendarDaysIcon
                        class="w-[24px] h-[24px] text-orange-400"
                    />
                    <p class="mt-[2px]">{{ year }}</p>
                </div>

                <div class="flex gap-2 items-center">
                    <AdjustmentsVerticalIcon
                        class="w-[24px] h-[24px] text-orange-400"
                    />
                    <p class="mt-[2px]">
                        {{ formatNumberWithComma(mileage) }} KM
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { formatNumberWithComma } from "../../../utilities/helpers";
import { HeartIcon } from "@heroicons/vue/24/solid";
import {
    HeartIcon as OutlinedHeartIcon,
    CalendarDaysIcon,
    AdjustmentsVerticalIcon,
} from "@heroicons/vue/24/outline";

const favorite = ref(false);

defineProps({
    make: { type: String, default: "Honda" },
    model: { type: String, default: "Civic" },
    rating: { type: Number, default: 109 },
    reviews: { type: Number, default: 4.7 },
    price: { type: Number, default: 3000 },
    mileage: { type: Number, default: 4645 },
    year: { type: Number, default: 2012 },
    thumbnailImage: { type: String, default: "/images/cars/city.jpg" },
});

const imgAttrs = {
    draggable: "false",
    style: "-webkit-user-drag: none; user-drag: none;",
};
</script>
