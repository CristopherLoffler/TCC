import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'criar', loadChildren: './criar-conta/criar-conta.module#CriarContaPageModule' },
  { path: 'developers', loadChildren: './pages/developers/developers.module#DevelopersPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
