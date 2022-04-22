import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { LoansComponent } from './loans/loans.component';
import { AddLoansComponent } from './add-loans/add-loans.component';


const routes: Routes = [
  { path: 'loans', component: LoansComponent },
  { path: 'add-loans', component: AddLoansComponent }

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
