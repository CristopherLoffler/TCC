import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../Perfil/criar-conta.module').then(m => m.CriarContaPageModule)
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../Map/tab4.module').then(m => m.Tab4PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab4',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
