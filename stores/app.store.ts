import { defineStore } from "pinia";

interface State {
    page: string;
    sidebar: boolean;
}

export const useAppStore = defineStore("app", {
    state: () =>
        ({
            page: "calculator",
            sidebar: false,
        } as State),
    getters: {
        getPage(state) {
            return state.page;
        },
        getSideBar(state) {
            return state.sidebar;
        },
    },
    actions: {
        setPage(pageTitle: string) {
            this.page = pageTitle;
        },
        setSideBar(value: boolean) {
            this.sidebar = value;
        },
        toggleSideBar() {
            this.sidebar = !this.sidebar;
        },
    },
});
