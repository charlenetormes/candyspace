import{i as t}from"./Ch3CHRDU.js";const r=t("app",{state:()=>({page:"calculator",sidebar:!1}),getters:{getPage(e){return e.page},getSideBar(e){return e.sidebar}},actions:{setPage(e){this.page=e},setSideBar(e){this.sidebar=e},toggleSideBar(){this.sidebar=!this.sidebar}}});export{r as u};
