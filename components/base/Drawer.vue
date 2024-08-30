<template>
    <TransitionRoot as="template" :show="open">
        <Dialog class="relative z-10" @close="open = false">
            <div class="fixed inset-0" />

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div
                        class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16"
                    >
                        <TransitionChild
                            as="template"
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enter-from="translate-x-full"
                            enter-to="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leave-from="translate-x-0"
                            leave-to="translate-x-full"
                        >
                            <DialogPanel
                                class="pointer-events-auto w-screen max-w-2xl"
                            >
                                <div
                                    class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
                                >
                                    <div class="px-4 sm:px-6">
                                        <div
                                            class="flex items-start justify-between"
                                        >
                                            <DialogTitle
                                                class="text-base font-semibold leading-6 text-gray-900"
                                                >{{ car?.make }}
                                                {{ car?.model }}</DialogTitle
                                            >
                                            <div
                                                class="ml-3 flex h-7 items-center"
                                            >
                                                <button
                                                    type="button"
                                                    class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    @click="open = false"
                                                >
                                                    <span
                                                        class="absolute -inset-2.5"
                                                    />
                                                    <span class="sr-only"
                                                        >Close panel</span
                                                    >
                                                    <XMarkIcon
                                                        class="h-6 w-6"
                                                        aria-hidden="true"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex flex-col relative mt-6 flex-1 px-4 sm:px-6"
                                    >
                                        <!-- Your content -->
                                        <BaseCarousel :images="car?.images" />
                                        <div
                                            class="w-full flex flex-col border-t-[1px] my-8 gap-2"
                                        >
                                            <p
                                                class="pt-4 text-lg font-semibold"
                                            >
                                                Make:
                                                <span class="font-medium">{{
                                                    car?.make
                                                }}</span>
                                            </p>
                                            <p class="text-lg font-semibold">
                                                Model:
                                                <span class="font-medium">{{
                                                    car?.model
                                                }}</span>
                                            </p>
                                            <p class="text-lg font-semibold">
                                                Year:
                                                <span class="font-medium">{{
                                                    car?.year
                                                }}</span>
                                            </p>
                                            <p class="text-lg font-semibold">
                                                Price:
                                                <span class="font-medium"
                                                    >${{
                                                        formatNumberWithComma(
                                                            car?.price
                                                        )
                                                    }}</span
                                                >
                                            </p>
                                            <p class="text-lg font-semibold">
                                                Description:
                                                <span class="font-medium">{{
                                                    car?.description
                                                }}</span>
                                            </p>
                                        </div>
                                        <v-btn
                                            color="#FF9500"
                                            variant="elevated"
                                            size="large"
                                            >Inquire</v-btn
                                        >
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { useAppStore } from "../../stores/app.store";
import { storeToRefs } from "pinia";
import { formatNumberWithComma } from "../../utilities/helpers";
const appStore = useAppStore();
const { sidebar } = storeToRefs(appStore);

const props = defineProps({
    isVisible: { type: Boolean, default: false },
    car: { type: Object as PropType<ICar>, default: null },
});

const open = ref(sidebar);
</script>
