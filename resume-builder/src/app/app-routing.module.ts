import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserInformationComponent } from './add-user-information/add-user-information.component';

const routes: Routes = [
  {
    path: 'add-info',
    component: AddUserInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
