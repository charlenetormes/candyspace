<template>
    <div
        class="grid lg:grid-cols-2 grid-cols-1 bg-custom-orange-100 calculator-container"
    >
        <div
            class="flex flex-col justify-center md:items-start items-center w-full p-4 md:gap-5 gap-2 md:mt-0 mt-4"
            v-motion-slide-visible-once-top
        >
            <h1
                class="md:text-5xl text-2xl w-[400px] font-semibold md:ml-[8%] ml-[0px] md:text-start sm:text-center"
            >
                Use Calculator on iPhone
            </h1>
            <img
                class="md:w-32 w-16 md:ml-[8%] ml-[0px]"
                :src="'/svg/ios.svg'"
                alt="iosIcon"
            />
        </div>
        <div
            class="flex justify-center w-full p-4 mt-[2%] relative overflow-hidden"
        >
            <img
                v-motion="{
                    initial: {
                        x: 50,
                        y: 100,
                        opacity: 0,
                    },
                    enter: {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 500,
                        },
                    },
                }"
                class="absolute top-[-2px] w-[760px]"
                src="/svg/ellipse.svg"
            />
            <div
                class="phone-container ml-[7%]"
                v-motion="{
                    initial: {
                        y: 100,
                        opacity: 0,
                    },
                    enter: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 1000,
                        },
                    },
                }"
            >
                <CalculatorPhone />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useAppStore } from "../stores/app.store";
import { useHead } from "@vueuse/head";
const appStore = useAppStore();

useHead({
    title: "Calculator Page",
    meta: [
        {
            name: "description",
            content:
                "Use the calculator to perform basic arithmertic operations similar to the iphone app",
        },
        { property: "og:title", content: "Calculator" },
    ],
});

onMounted(() => {
    appStore.setPage("calculator");
});
</script>

<style scoped>
.calculator-container {
    min-height: calc(100vh - 136px);
}
</style>
