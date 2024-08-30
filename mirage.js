// mirage.js
import { createServer, Model, Factory } from "miragejs";
import {
    generateRandomNumber,
    generateRandomDecimalNumber,
} from "./utilities/helpers";

export function makeServer({ environment = "development" } = {}) {
    let server = createServer({
        environment,

        models: {
            car: Model,
        },

        factories: {
            car: Factory.extend({
                make(i) {
                    const makes = ["Honda", "Ford"];
                    return makes[i % makes.length];
                },
                model(i) {
                    const make = this.make;
                    let models = [];
                    switch (make) {
                        case "Honda":
                            models = ["City", "Civic", "BRV"];
                            break;
                        case "Ford":
                            models = ["Everest"];
                    }
                    return models[i % models.length];
                },
                year() {
                    return Math.floor(Math.random() * (2022 - 2000 + 1)) + 2000;
                },
                price() {
                    return (
                        Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000
                    );
                },
                mileage() {
                    return (
                        Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000
                    );
                },
                rating() {
                    return generateRandomDecimalNumber(4);
                },
                reviews() {
                    return generateRandomNumber(200);
                },
                thumbnailImage() {
                    if (this.model === "Civic") {
                        return "/images/cars/civic.jpg";
                    } else if (this.model === "City") {
                        return "/images/cars/city.jpg";
                    } else if (this.model === "BRV") {
                        return "/images/cars/black-brv.jpg";
                    } else if (this.model === "Everest") {
                        return "/images/cars/everest.jpeg";
                    }
                },
                images() {
                    // Return an array of image URLs
                    if (this.model === "City") {
                        return [
                            "https://via.placeholder.com/150?text=Image1",
                            "https://via.placeholder.com/150?text=Image2",
                            "https://via.placeholder.com/150?text=Image3",
                        ];
                    } else {
                        return [];
                    }
                },
            }),
        },

        seeds(server) {
            server.createList("car", 10);
        },

        routes() {
            this.namespace = "api";

            this.get("/cars", (schema) => {
                return schema.cars.all();
            });
        },
    });

    return server;
}
