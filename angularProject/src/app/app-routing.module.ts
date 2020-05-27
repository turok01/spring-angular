import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path : 'employees', component : EmployeeComponent },
  { path: '404', component: EmployeeComponent },  // Wildcard route for a 404 page
  { path : '**', component : AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
