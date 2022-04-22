import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { LoansTypesComponent } from './loans-types/loans-types.component';
import { LoansComponent } from './loans/loans.component';

const routes: Routes = [
  {
    path: 'loans',
    component: LoansComponent
  },
  {
    path: 'loans-types',
    component: LoansTypesComponent
  },
  {
    path: 'loans/add-loans',
    component: AddLoansComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
