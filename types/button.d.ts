export { ICalculatorButton };

declare global {
    interface ICalculatorButton {
        primary: boolean;
        secondary: boolean;
        tertiary: boolean;
        singleColumn: boolean;
        text?: string;
        action?: string;
        value?: string;
        icon?: string;
    }
}
