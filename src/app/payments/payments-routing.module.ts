import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { PaymentsComponent } from './payments.component';

const routes: Routes = [{ path: '', component: PaymentsComponent },
{ path: 'succSess', component: PaymentsComponent },
{
  path: 'payments',
  component: PaymentsComponent,
  canActivate: [AuthGuard]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
