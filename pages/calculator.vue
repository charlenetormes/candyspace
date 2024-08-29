<template>
    <div class="flex justify-center w-full p-4">
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
