import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import WelcomeCard from '../components/WelcomeCard.vue';
import ExpulsionCard from '../components/ExpulsionCard.vue';
import Invitation from '../components/Invitation.vue';
import NotInvited from '../components/NotInvited.vue';

const routes = [
  {
    path: '/',
    name: 'Invitation',
    component: Invitation
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/welcome',
    name: 'WelcomeCard',
    component: WelcomeCard
  },
  {
    path: '/expulsion',
    name: 'ExpulsionCard',
    component: ExpulsionCard
  },
  {
    path: '/not-invited',
    name: 'NotInvited',
    component: NotInvited
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
