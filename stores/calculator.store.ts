import { defineStore } from "pinia";

interface State {
    display: string;
    currentOperand: string;
    previousOperand: string;
    operator: string;
}

export const useCalculatorStore = defineStore("calculator", {
    state: () =>
        ({
            display: "0",
            currentOperand: "",
            previousOperand: "",
            operator: "",
        } as State),
    getters: {
        getDisplay(state) {
            return state.display;
        },
        getCurrentOperand(state) {
            return state.currentOperand;
        },
        getPreviousOperand(state) {
            return state.previousOperand;
        },
        getOperator(state) {
            return state.operator;
        },
    },
    actions: {
        parseInputDigit(value: string) {
            // do not duplicate decimal point
            if (this.currentOperand?.includes(".") && value === ".") return;

            // same makes sure to not dupe decimal point
            if (this.currentOperand === "0" && value !== ".") {
                this.currentOperand = value;
            } else {
                this.currentOperand += value;
            }

            // re-render
            this.renderDisplay();
        },
        handleAction(action: string) {
            switch (action) {
                case "clear":
                    this.clear();
                    break;
                case "absolute":
                    this.absolute();
                    break;
                case "percentage":
                    this.percentage();
                    break;
                case "division":
                case "multiplication":
                case "subtraction":
                case "addition":
                    this.setOperator(action);
                    break;
                case "equals":
                    this.calculate();
                    break;
                default:
                    break;
            }
        },
        clear() {
            this.currentOperand = "";
            this.previousOperand = "";
            this.operator = "";

            this.renderDisplay();
        },
        absolute() {
            if (this.currentOperand) {
                this.currentOperand = (
                    Number(this.currentOperand) * -1
                )?.toString();
            }

            this.renderDisplay();
        },
        percentage() {
            if (this.currentOperand) {
                this.currentOperand = (
                    Number(this.currentOperand) / 100
                )?.toString();
            }

            this.renderDisplay();
        },
        setOperator(operation: string) {
            if (this.currentOperand === "") return;

            if (this.previousOperand !== "") {
                this.calculate();
            }

            this.operator = operation;
            this.previousOperand = this.currentOperand;
            this.currentOperand = "";
        },
        calculate() {
            let result;

            const prev = Number(this.previousOperand);
            const current = Number(this.currentOperand);

            if (isNaN(prev) || isNaN(current)) return;

            switch (this.operator) {
                case "addition":
                    result = prev + current;
                    break;
                case "subtraction":
                    result = prev - current;
                    break;
                case "multiplication":
                    result = prev * current;
                    break;
                case "division":
                    result = prev / current;
                    break;
                default:
                    return;
            }

            this.currentOperand = result?.toFixed(7);
            this.operator = "";
            this.previousOperand = "";
            this.renderDisplay();
        },
        renderDisplay() {
            this.display = this.currentOperand || "0";
        },
    },
});
