import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialSharedModule } from 'projects/social/src/app/app.module';
import { HeaderComponent } from 'projects/social/src/app/header/header.component';

const routes: Routes = [
  {path: 'social', 
  children:[
    {
      path:'one', component: HeaderComponent
    }
  ]
  // loadChildren: () => import('projects/social/src/app/app.module#SocialSharedModule')},
  // loadChildren: () => import('projects/social/src/app/app.module')},
  },
  { path: '**', redirectTo: '/app1/one'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
}),
  SocialSharedModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
