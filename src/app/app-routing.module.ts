import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PreloaderComponent} from "./features/application/pages/preloader/preloader.component";
import {AuthGuard} from "./core/guards/auth.guard";
import {LoginRedirectGuard} from "./core/guards/login-redirect.guard";

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./features/authentication/authentication.module').then(m => m.AuthenticationModule), canActivate: [LoginRedirectGuard] },
  { path: 'preloader', component: PreloaderComponent },
  { path: 'authorise', loadChildren: () => import('./features/application/application.module').then(m => m.ApplicationModule),canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
