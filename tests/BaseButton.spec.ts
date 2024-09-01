import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest"; // Use 'jest' instead if using Jest
import Button from "../components/base/Button.vue";

describe("BaseButton.vue", () => {
    it("renders button with correct text", () => {
        const wrapper = mount(Button, {
            props: { text: "Click Me" },
        });
        expect(wrapper.text()).toContain("Click Me");
    });

    it("emits an event when clicked", async () => {
        const wrapper = mount(Button);
        await wrapper.trigger("click");
        expect(wrapper.emitted()).toHaveProperty("click");
    });

    it("renders primary button color correctly", async () => {
        const wrapper = mount(Button, {
            props: {
                primary: true,
                secondary: false,
                link: false,
            },
        });
        const element = wrapper.find(".base-button");
        expect(element.classes()).toContain("bg-orange-500");
    });
});
