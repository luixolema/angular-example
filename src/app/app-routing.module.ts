import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './app-components/page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './app-components/compose-message/compose-message.component';
import { LoginComponent } from './app-components/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'crisis-center',
    loadChildren: () => import('./crisis/crisis.module').then(m => m.CrisisModule),
  },
  { path: '**', component: PageNotFoundComponent },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
    preloadingStrategy: PreloadAllModules,
    enableTracing: true,
    relativeLinkResolution: 'legacy'
} // <-- debugging purposes only
 // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
