import { createApp } from "vue";
import { router } from "./router";
import pinia from "./stores";
import App from "./App.vue";
import "normalize.css";
import "./assets/styles/main.scss";

import "virtual:svg-icons-register";
// import svgIDs from "virtual:svg-icons-names";
// console.log("loaded svg icons", svgIDs);
import SvgIcon from "./components/SvgIcon.vue";

import "./libs/varlet";

const app = createApp(App);

app.use(router);
app.use(pinia);

app.component("svg-icon", SvgIcon);

app.mount("#app");

window.$vm = app;
window.$pinia = pinia;
