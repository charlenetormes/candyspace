<template>
    <div class="w-full">
        <div class="mx-auto w-full max-w-md rounded-2xl bg-white">
            <div class="w-full h-2 border-t-[1px] pt-4"></div>
            <Disclosure v-slot="{ open }">
                <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-orange-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                >
                    <span class="text-base">CAR BRAND</span>
                    <ChevronUpIcon
                        :class="open ? 'rotate-180 transform' : ''"
                        class="h-5 w-5 text-orange-500"
                    />
                </DisclosureButton>
                <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
                    <FormInputsCheckbox v-model="make" ref="makeRef" />
                </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" class="mt-2" v-slot="{ open }">
                <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-orange-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                >
                    <span class="text-base">YEAR</span>
                    <ChevronUpIcon
                        :class="open ? 'rotate-180 transform' : ''"
                        class="h-5 w-5 text-orange-500"
                    />
                </DisclosureButton>
                <DisclosurePanel
                    class="px-4 pb-2 pt-4 text-sm text-gray-500"
                    @click="reset"
                >
                    <FormInputsCheckbox
                        :options="years"
                        v-model="yearsValue"
                        ref="yearRef"
                    />
                </DisclosurePanel>
            </Disclosure>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { years } from "@/utilities/data";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/20/solid";
import { useCarStore } from "@/stores/car.store";
import { storeToRefs } from "pinia";

const carStore = useCarStore();
const { filters, isResetTriggered } = storeToRefs(carStore);

const yearsValue = ref<number[]>([]);
const make = ref<string[]>([]);
const makeRef = ref();
const yearRef = ref();

watch(
    () => isResetTriggered.value,
    (newVal) => {
        if (newVal) {
            makeRef.value.reset();
            yearRef.value.reset();
            isResetTriggered.value = false;
        }
    }
);

watch(
    () => make.value,
    (newVal) => {
        filters.value.make = newVal;
    }
);

watch(
    () => yearsValue.value,
    (newVal) => {
        filters.value.year = newVal;
    }
);
</script>

<style scoped></style>
