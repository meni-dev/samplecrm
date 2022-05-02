import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerComponent } from './customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';

const routes: Routes = [{ path: '', component: CustomerComponent },
{ path: 'add', component: AddCustomerComponent },
{ path: 'delete', component: DeleteCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
