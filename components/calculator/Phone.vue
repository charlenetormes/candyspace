<template>
    <MockPhone>
        <div
            class="screen-container absolute top-0 w-[306px] min-h-[570px] z-20 mx-[3px] mt-[35px] mb-[20px] px-4 rounded-[16px] bg-[#17181A]"
        >
            <div class="pt-28">
                <CalculatorExpressions primary />
            </div>
            <div class="pt-8 w-full grid grid-cols-4 gap-5 px-1">
                <CalculatorButton
                    v-for="(btn, index) in calculatorButtons"
                    :key="index"
                    v-bind="btn"
                />
            </div>
        </div>
    </MockPhone>
</template>

<script lang="ts" setup>
import { calculatorButtons } from "../../utilities/data";
</script>
