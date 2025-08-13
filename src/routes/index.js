import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../views/HomePage.vue") },
  { path: "/about", component: () => import("../views/AboutPage.vue") },
  { path: "/tech", component: () => import("../views/TechnologiesPage.vue") },
  { path: "/contact", component: () => import("../components/form/contactForm.vue") },
  { path: "/services", component: () => import("../views/ServicesPage.vue")}
];

const router = createRouter({
  history: createWebHistory('/vue-app/'),
  routes,
  scrollBehavior(savedPosition) {
    if(savedPosition) {
      return {
        ...savedPosition,
        behavior: 'smooth'
      }
    }
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
});

export default router;
