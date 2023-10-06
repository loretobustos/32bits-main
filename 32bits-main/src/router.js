import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./components/Inicio')
const Busqueda = () => import('./components/Busqueda')
const Venta = () => import('./components/Venta')
const Total = () => import('./components/Total')
const NotFound = () => import('./components/NotFound')

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio
        },
        {
            path: '/busqueda',
            name: 'busqueda',
            component: Busqueda
        },
        {
            path: '/venta',
            name: 'venta',
            component: Venta
        },
        {
            path: '/total',
            name: 'total',
            component: Total
        },
        {
          path: '*',
          component: NotFound
        }
    ]
})
