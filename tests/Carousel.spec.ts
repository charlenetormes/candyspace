import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Carousel from "../components/base/Carousel.vue";

describe("Carousel.vue", () => {
    it("emits an event when clicked", async () => {
        const wrapper = mount(Carousel, {
            global: {
                stubs: {
                    "v-carousel": true,
                    "v-carousel-item": true,
                    "v-btn": true,
                },
            },
            props: {
                images: [
                    "../images/cars/everest/ford1.jpeg",
                    "../images/cars/everest/ford2.jpeg",
                    "../images/cars/everest/ford3.jpeg",
                ],
            },
        });

        await wrapper.trigger("click");
        expect(wrapper.emitted()).toHaveProperty("click");
    });
});
