import { defineStore } from "pinia";

interface State {
    page: string;
}

export const useAppStore = defineStore("app", {
    state: () =>
        ({
            page: "calculator",
        } as State),
    getters: {
        getPage(state) {
            return state.page;
        },
    },
    actions: {
        setPage(pageTitle: string) {
            this.page = pageTitle;
        },
    },
});
