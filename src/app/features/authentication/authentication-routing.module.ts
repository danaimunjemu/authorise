import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthLayoutComponent} from "./layout/auth-layout/auth-layout.component";
import {SignInComponent} from "./pages/sign-in/sign-in.component";

const routes: Routes = [
  { path: '', component: AuthLayoutComponent, children: [
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
      { path: 'sign-in', component: SignInComponent },
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
