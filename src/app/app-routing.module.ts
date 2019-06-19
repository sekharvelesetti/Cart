import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { SingleComponent } from './product/single/single.component';

const routes: Routes = [
  {path:'products',component:ProductComponent},
  {path:'products/:cat',component:SingleComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'}
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
