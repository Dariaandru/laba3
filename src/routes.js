import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();

import slider from "./components/pages/slider.vue";
import calculator from "./components/pages/calculator.vue";
import vacancies from "./components/pages/vacancies.vue";


const routes = createRouter({
    history: routerHistory,
    routes: [
        {
            path: "/",
            name: "slider",
            component: slider,
        },
        
        {
            path: "/calculator",
            name: "about",
            component: calculator,
        },

        {
            path: "/vacancies",
            name: "vacancies",
            component: vacancies,
        },
    ],
});


export default routes;
