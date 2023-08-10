import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './component/list/list.component';
import { StepperFormComponent } from './component/form/stepper-form/stepper-form.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'form', component: StepperFormComponent },
  { path: 'edit/:id', component: StepperFormComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
