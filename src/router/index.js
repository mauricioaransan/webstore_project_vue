import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/detalleProducto',
    name: 'detalleProducto',
    
    component: () => import('../views/DetalleView.vue')
  },
  {
    path: '/carrito',
    name: 'carrito',
    
    component: () => import('../views/CarritoView.vue')
  },
  {
    path: '/detalle',
    name: 'detalle',
    
    component: () => import('../views/DetalleView.vue')
  },
  {
    path: '/filtroview',
    name: 'filtroview',
    
    component: () => import('../views/FiltroView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
