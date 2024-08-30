<template>
    <div class="flex justify-center w-full p-4 relative">
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
                },
            }"
        >
            <CalculatorPhone />
        </div>
    </div>
</template>
<script lang="ts" setup></script>
