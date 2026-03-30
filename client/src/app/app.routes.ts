import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Resources } from './resources/resources';
import { Services } from './services-page/services';
import { Pricing } from './pricing/pricing';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'resources', component: Resources },
  { path: 'services', component: Services },
  { path: 'pricing', component: Pricing },
  { path: '**', redirectTo: '' },
];
