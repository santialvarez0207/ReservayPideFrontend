import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { TablesComponent } from './components/tables/tables.component';
import { OrderComponent } from './components/order/order.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RegisterComponent } from './components/register/register.component';
import { SoldsComponent } from './components/solds/solds.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  
  {path: '',
   component: LayoutComponent,
   children: [
    {path: '', component: ProductsComponent},
    {path: 'Menu', component: ProductsComponent},
    {path: 'Tables', component: TablesComponent},
    {path: 'Order', component: OrderComponent},
    {path: 'Solds', component: SoldsComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
