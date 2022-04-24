import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { LoansComponent } from './loans/loans.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import { LeadsGridComponent } from './leads/leads-listing/leads-grid/leads-grid.component';



const routes: Routes = [
  { path: 'product/:id', component: ProductComponent },
  { path: 'product/:productId /photos/:photoId', component: ProductComponent },
  {
    path: 'client', component: ClientsComponent
  },
  {
    path: '',
    redirectTo: 'leads',
    pathMatch: 'full'
  },
  {
    path: 'leads',
    component: LeadsGridComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
