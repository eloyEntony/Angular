import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StudentsListComponent } from './students-list/students-list.component';

const routes: Routes = [
  {path: '', component:CharactersListComponent},
  {path: 'students', component:StudentsListComponent},
  {path: 'staff', component:StaffListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
