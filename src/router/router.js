import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import EditUser from '../views/auth/EditUser.vue'
import ListUser from '../views/auth/ListUser.vue'
import LoginUser from '../views/auth/LoginUser.vue'
import RegisterUser from '../views/auth/Registeruser.vue'
import datosPersonales from '../views/User/datosPersonales.vue'
import verconvocatoria from '../views/User/verConvocatoria.vue'
import misPostulaciones from '../views/User/misPostulaciones.vue'
import configuracion from '../views/User/configuracion.vue'
import errorNotFound from '../views/pages/errorNotFound.vue'
//Perfil Profecional 
import cv_Educacion from '../views/User/cv-educacion.vue'
import cv_Cursos from '../views/User/cv-cursos.vue'
import cv_Experiencia from '../views/User/cv-experiencia.vue'
import cv_Conocimientos from '../views/User/cv-conocimientos.vue'
import widget1 from '../views/widgets/widget1.vue'


//
import { useUserStore } from '../stores/userAuth'

const linkAccess = '/convocatorias';
const routes = [

    {
        path: '/',
        component: Dashboard
        //meta: { auth: true }
    },
    { path: '/para-nicole-by-wesllytcito', component: widget1 },
    { path: '/datos-personales', component: datosPersonales, meta: { auth: true } },
    { path: '/ver-convocatorias', component: verconvocatoria, meta: { auth: true } },
    { path: '/mis-postulaciones', component: misPostulaciones, meta: { auth: true } },
    { path: '/configuracion', component: configuracion, meta: { auth: true } },
    {
        path: '/perfil-profesional',
        name: 'PerfilProfesional',
        meta: { auth: true },
        children: [
            {
                path: 'cv-educacion',
                name: 'cv_Educacion',
                component: cv_Educacion
            },
            {
                path: 'cv-cursos',
                name: 'cv_Cursos',
                component: cv_Cursos
            },
            {
                path: 'cv-experiencia',
                name: 'cv_Experiencia',
                component: cv_Experiencia
            },
            {
                path: 'cv-conocimientos',
                name: 'cv_Conocimientos',
                component: cv_Conocimientos
            }
        ]
    },
    { path: '/login', component: LoginUser },
    { path: '/register', component: RegisterUser },
    { path: '/edit', component: EditUser },
    { path: '/list', component: ListUser },
    {
        path: "/:catchAll(.*)*", component: errorNotFound
    }
]
const router = createRouter({
    history: createWebHistory(linkAccess),
    routes
});

router.beforeEach(async (to, from, next) => {
    const requireAuth = to.meta.auth
    const userStore = useUserStore();

    if (userStore.token) {
        return next();
    }

    if (requireAuth || sessionStorage.getItem('user')) {
        await userStore.refreshToken();
        if (userStore.token) {
            return next();
        }
        return next("/login")
    }
    return next()
});


export default router