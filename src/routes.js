import MainPage from './components/MainPage.vue';
import Settings from './components/SettingsPage.vue'

export const routes = [
  { path: '', component: MainPage },
  { path: '/settings', component: Settings }
];