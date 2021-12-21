import { Routes } from '@angular/router';
import { LoginPageComponent } from "./login-page/login-page.component";
import { LogoutPageComponent } from "./logout-page/logout-page.component";
import { SignUpPageComponent } from "./sign-up-page/sign-up-page.component";
import { UsersPageComponent } from "./users-page/users-page.component";
import { ModifyPageComponent } from "./modify-page/modify-page.component";

export const ROUTES: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'logout', component: LogoutPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'users', component: UsersPageComponent },
  { path: 'modify', component: ModifyPageComponent },
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

