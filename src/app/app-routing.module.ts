import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { LoansComponent } from './loans/loans.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import { LeadsGridComponent } from './leads/leads-listing/leads-grid/leads-grid.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SuperAdminGuard } from './super-admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { LoansTypesComponent } from './loans-types/loans-types.component';
import { UsersComponent } from './users/users.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';



const routes: Routes = [
  { path: 'product/:id', component: ProductComponent },
  { path: 'loans-types', component: LoansTypesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'update', component: EditCustomerComponent },


  { path: 'product/:productId /photos/:photoId', component: ProductComponent },
  {
    path: 'client', component: ClientsComponent
  },

  {
    path: 'search',
    component: SearchComponent
  },
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  {
    path: 'admin',
    canActivate: [customElements],
    children: [
      {
        path: '',
        component: AdminComponent
      },
      {
        path: '',
        canActivateChild: [AdminAccessGuard],
        children: [
          { path: 'edit', component: AdminEditComponent },
          { path: 'delete', component: AdminDeleteComponent },
          { path: 'manage', component: AdminManageComponent }

        ]

      },
    ]
  }
]
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
