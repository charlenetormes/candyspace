<template>
    <MockPhone>
        <div
            class="screen-container absolute top-0 w-[306px] min-h-[570px] z-20 mx-[3px] mt-[35px] mb-[20px] px-4 rounded-[16px] bg-[#17181A]"
        >
            <div class="pt-28">
                <CalculatorExpressions :display="display" primary />
            </div>
            <div class="pt-8 w-full grid grid-cols-4 gap-5 px-1">
                <CalculatorButton
                    v-for="(btn, index) in calculatorButtons"
                    :key="index"
                    v-bind="btn"
                    @click="handleClick(btn)"
                />
            </div>
        </div>
    </MockPhone>
</template>

<script lang="ts" setup>
import { calculatorButtons } from "../../utilities/data";
import { useCalculatorStore } from "../../stores/calculator.store";
import { storeToRefs } from "pinia";

const calculatorStore = useCalculatorStore();
const { display } = storeToRefs(calculatorStore);

const handleClick = (btn: ICalculatorButton) => {
    if (btn?.action) {
        calculatorStore.handleAction(btn.action);
    } else if (btn?.value) {
        calculatorStore.parseInputDigit(btn.value);
    }
};
</script>
