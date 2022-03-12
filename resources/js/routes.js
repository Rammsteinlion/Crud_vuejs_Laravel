const Home  = () => import('./components/Home.vue');
const Contacto  = () => import('./components/Contacto.vue');



const Mostrar  = () => import('./components/prestamo/Mostrar.vue');
const Crear  = () => import('./components/prestamo/Crear.vue');
const Editar  = () => import('./components/prestamo/Editar.vue');



export const routes = [
 {
     name:'home',
     path:'/',
     component:Home
 },
 {
    name:'contacto',
    path:'/contacto',
    component:Contacto
},
{
    name:'mostrarprestamo',
    path:'/prestamos',
    component:Mostrar
},
{
    name:'crearprestamo',
    path:'/crear',
    component:Crear
},
{
    name:'editarprestamo',
    path:'/editar/:id',
    component:Editar
}
]