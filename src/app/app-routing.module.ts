import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';
import { AuthGuard } from './core/guard/auth.guard';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';
import { ExchangeModule } from './views/pages/exchange/exchange.module';
import { ConfigurationComponent } from './views/pages/configuration/configuration.component';


const routes: Routes = [
  { path:'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule) },
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
   
      {
        path: 'sftp',
        loadChildren: () => import('./views/pages/sftp/sftp.module').then(m => m.SftpModule)
      },
      {
        path: 'pii',
        loadChildren: () => import('./views/pages/unified-registry/unified-registry.module').then(m => m.UnifiedRegistryModule)
      },
      {
        path: 'non-pii',
        loadChildren: () => import('./views/pages/unified-registry/unified-registry.module').then(m => m.UnifiedRegistryModule)
      },
     
      {
        path: 'blockchain',
        loadChildren: () => import('./views/pages/blockchain/blockchain-routing.module').then(m => m.BlockchainRoutingModule)
      },
      {
        path: 'reward&payment',
        loadChildren: () => import('./views/pages/payment/payment.module').then(m => m.PaymentModule)
      },
      {
        path: 'dataVerification',
        loadChildren: () => import('./views/pages/exchange/exchange.module').then(m => m.ExchangeModule)
      },
     {
      path: 'dataAnalysis',
      loadChildren:()=> import('./views/pages/analysis/analysis.module').then(m => m.AnalysisModule)
     },
     {
      path: 'dataInference',
      loadChildren:()=> import('./views/pages/data-inference/data-inference.module').then(m => m.DataInferenceModule)
     },
     {
      path: 'setting',
      loadChildren:()=> import('./views/pages/configuration/configuration.module').then(m => m.ConfigurationModule)
     },
    //  {
    //   path: 'charts-graphs',
    //   loadChildren: () => import('./views/pages/charts-graphs/charts-graphs.module').then(m => m.ChartsGraphsModule)
    // },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
      // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { 
    path: 'error',
    component: ErrorPageComponent,
    data: {
      'type': 404,
      'title': 'Page Not Found',
      'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
    }
  },

  {
    path: 'error/:type',
    component: ErrorPageComponent
  },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
