import { defineStore } from "pinia";

interface State {
    cars: ICar[];
    years: string[];
    make: string[];
    min: number;
    max: number;
    isResetTriggered: boolean;
    filters: {
        query?: string;
        min?: number;
        max?: number;
        make?: string[];
        year?: number[];
    };
}

export const useCarStore = defineStore("cars", {
    state: () =>
        ({
            cars: [],
            years: [],
            make: [],
            min: 0,
            max: 1500,
            isResetTriggered: false,
            filters: {
                query: "",
                min: 0,
                max: 1500,
                make: [],
                year: [],
            },
        } as State),
    getters: {
        getCars(state) {
            return state.cars;
        },
        getFilteredCars(state) {
            let results = state.cars;
            const query = state.filters?.query ?? "";
            const makeFilters = state?.filters?.make ?? [];
            const yearFilters = state?.filters?.year ?? [];
            if (query !== "") {
                results = state.cars.filter(
                    (car) =>
                        car.make.toLowerCase().includes(query.toLowerCase()) ||
                        car.model.toLowerCase().includes(query.toLowerCase()) ||
                        car.year.toString().includes(query)
                );
            }

            //filter by make
            if (makeFilters?.length > 0) {
                results = results.filter((car) =>
                    makeFilters.includes(car.make)
                );
            }

            //filter by year
            if (yearFilters?.length > 0) {
                results = results.filter((car) =>
                    yearFilters.includes(car.year)
                );
            }

            //filter by min and max
            const min = state?.filters?.min ?? 0;
            const max = state?.filters?.max ?? 1500;
            results = results.filter(
                (car) => car.price >= min && car.price <= max
            );

            return results;
        },
        getMake(state) {
            return state.make;
        },
        getYears(state) {
            return state.years;
        },
        getMax(state) {
            return state.max;
        },
        getMin(state) {
            return state.min;
        },
        getResetTriggered(state) {
            return state.isResetTriggered;
        },
    },
    actions: {
        reset() {
            this.isResetTriggered = true;
            this.filters.query = "";
            this.filters.make = [];
            this.filters.year = [];
            this.filters.min = this.min;
            this.filters.max = this.max;
        },
        setCars(cars: ICar[]) {
            this.cars = cars;
        },
        setMax(value: number) {
            this.max = value;
        },
        setMin(value: number) {
            this.min = value;
        },
        setIsResetTriggered(value: boolean) {
            this.isResetTriggered = value;
        },
        setMaxMin() {
            const min = Math.min(...this.cars.map((car) => car.price));
            const max = Math.max(...this.cars.map((car) => car.price));

            this.min = min;
            this.max = max;
            this.filters.min = min;
            this.filters.max = max;
        },
    },
});
