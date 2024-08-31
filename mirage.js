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
                    return Math.floor(Math.random() * (2024 - 2000 + 1)) + 2000;
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
                thumbnailImage(i) {
                    if (this.model === "Civic") {
                        const models = [
                            "/candyspace/images/cars/city.jpg",
                            "/candyspace/images/cars/blue-civic.jpg",
                        ];
                        return models[i % models.length];
                    } else if (this.model === "City") {
                        return "/candyspace/images/cars/civic.jpg";
                    } else if (this.model === "BRV") {
                        return "/candyspace/images/cars/black-brv.jpg";
                    } else if (this.model === "Everest") {
                        return "/candyspace/images/cars/everest.jpeg";
                    }
                },
                images() {
                    // Return an array of image URLs
                    if (this.model === "City") {
                        return [
                            "/candyspace/images/cars/city/city1.jpg",
                            "/candyspace/images/cars/city/city2.jpg",
                            "/candyspace/images/cars/city/city3.jpg",
                        ];
                    } else if (this.model === "Civic") {
                        return [
                            "/candyspace/images/cars/civic/civic1.jpg",
                            "/candyspace/images/cars/civic/civic2.jpg",
                            "/candyspace/images/cars/civic/civic3.jpg",
                        ];
                    } else if (this.model === "Everest") {
                        return [
                            "/candyspace/images/cars/everest/ford1.jpeg",
                            "/candyspace/images/cars/everest/ford2.jpeg",
                            "/candyspace/images/cars/everest/ford3.jpeg",
                        ];
                    } else if (this.model === "BRV") {
                        return [
                            "/candyspace/images/cars/brv/brv1.jpg",
                            "/candyspace/images/cars/brv/brv2.jpg",
                            "/candyspace/images/cars/brv/brv3.jpg",
                        ];
                    } else {
                        return [];
                    }
                },
                description() {
                    const sentences = [
                        "The quick brown fox jumps over the lazy dog.",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "To be or not to be, that is the question.",
                        "All human beings are born free and equal in dignity and rights.",
                        "A journey of a thousand miles begins with a single step.",
                        "The only thing we have to fear is fear itself.",
                        "I think, therefore I am.",
                        "In the beginning, God created the heavens and the earth.",
                        "The best way to predict the future is to invent it.",
                        "To infinity and beyond!",
                    ];

                    // Shuffle the sentences array and select the first 'sentenceCount' sentences
                    const shuffled = sentences.sort(() => 0.5 - Math.random());
                    const selectedSentences = shuffled.slice(0, 3);

                    // Join the selected sentences into a single paragraph
                    return selectedSentences.join(" ");
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
