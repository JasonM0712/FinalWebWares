import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PageContact from '../views/PageContact.vue'
import LoginPage from '@/views/LoginPage.vue'

import SignUp from '@/views/SignUp.vue'
                          // Catalogue
import ProduitsView from '../views/ProduitsView.vue'
import FicheProduit from '../views/FicheProduit.vue'
import TapisView from '../views/TapisView.vue'
import LampeView from '../views/LampeView.vue'
import ChaiseView from '../views/ChaiseView.vue'
import VaseVue from '../views/VaseVue.vue'
import TableView from '../views/TableView.vue'

import PagePartenaire from '@/views/PagePartenaire.vue'
import PanierView from '../views/PanierView.vue'
import CommResume from '../views/CommResume.vue'
                        // Footer
import PageCgv from '@/views/PageCgv.vue'
import PageCgu from '@/views/PageCgu.vue'
import PolitiqueConf from '@/views/PolitiqueConf.vue'
import PageCarriere from '@/views/PageCarriere.vue'
                        // DashBoard User & Admin
import AdminPage from '@/views/DashBoard/AdminPage.vue'
import AdminParametre from '@/views/DashBoard/AdminParametre.vue'
import AdminProfile from '@/views/DashBoard/AdminProfile.vue'
import UserPage from '@/views/DashBoard/UserPage.vue'
import UserProfile from '@/views/DashBoard/UserProfile.vue'
import UserParametre from '@/views/DashBoard/UserParametre.vue'
import ParametreUser from '@/views/DashBoard/ParametreUser.vue'
import ParametreProduit from '@/views/DashBoard/ParametreProduit.vue'
import ParametreCat from '@/views/DashBoard/ParametreCat.vue'
import AdminMsg from '@/views/DashBoard/AdminMsg.vue'
import AdminCommande from '@/views/DashBoard/AdminCommande.vue'
import UserMsg from '@/views/DashBoard/UserMsg.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aboutview',
    name: 'about',
    component: AboutView
  },
  {
    path: '/pagecontact',
    name: 'contact',
    component: PageContact
  },
  {
    path: '/loginpage',
    name: 'connexion',
    component: LoginPage
  },

  
  {
    path: '/produitsview',
    name: 'produits',
    component: ProduitsView
  },
  {
    path: '/ficheproduit/:produitsId',
    name: 'ficheproduit',
    component: FicheProduit
  },
  {

    path: '/signup',
    name: 'inscription',
    component: SignUp
  },
  
  {
    path: '/tapisview',
    name: 'tapis',
    component: TapisView
  },
  {
    path:'/lampeview',
    name:'lampe',
    component: LampeView,
  },
  {
    path:'/chaiseview',
    name:'chaise',
    component: ChaiseView,
  },
  {
    path:'/vasevue',
    name:'vase',
    component: VaseVue,
  },
  {
    path: '/tableview',
    name: 'table',
    component: TableView
  },

{
    path: '/panierview',
    name: 'panier',
    component: PanierView
  },
  {
    path: '/commresume',
    name: 'commresume',
    component: CommResume
   },

  {
    path: '/signup',
    name: 'inscription',
    component: SignUp
  },
  {


    path: '/pagecgv',
    name: 'cgv',
    component: PageCgv
  },
  {
  path: '/pagepartenaire',
  name: 'partenaire',
  component: PagePartenaire
},
{
  path: '/pagecgu',
  name: 'cgu',
  component: PageCgu
},
{
  path: '/politiqueconf',
  name: 'politiqueconf',
  component: PolitiqueConf
},
{
  path: '/pagecarriere',
  name: 'carriere',
  component: PageCarriere,
},
// DASHBOARD ADMIN
{
  path: '/adminpage',
  name: 'DashBoard',
  component: AdminPage,
  children: [
    {
      path: '/adminparametre',
      name: 'parametreadmin',
      component: AdminParametre,
    },
    {
      path: '/adminprofile',
      name: 'tableaudebord',
      component: AdminProfile,
    },
    {
      path: '/parametreuser',
      name: 'gestionuser',
      component: ParametreUser,
    },
    {
      path: '/parametreproduit',
      name: 'gestionproduit',
      component: ParametreProduit,
    },
    {
      path: '/parametrecat',
      name: 'gestioncategorie',
      component: ParametreCat,
    },
    {
      path: '/adminmsg',
      name: 'adminmessagerie',
      component: AdminMsg,
    },
    {
      path: '/admincommande',
      name: 'admincommande',
      component: AdminCommande,
    },
  ],
},
// DASHBOARD USER
{
  path: '/userpage',
  name: 'userboard',
  component: UserPage,
  children: [
    {
      path: '/userprofile',
      name: 'profile',
      component: UserProfile,
    },
    {
      path: '/userparametre',
      name: 'parametre',
      component: UserParametre,
    },
    {
      path: '/usermsg',
      name: 'usermessagerie',
      component: UserMsg,
    },
    {
    path: '/panierview',
    name: 'panier',
    component: PanierView,
  },
  ],
},



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
