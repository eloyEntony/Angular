import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatagoriesComponent } from './components/catagories-crud/catagories/catagories.component';
import { FirstComponent } from './components/first/first.component';

const routes: Routes = [
  {path: '', component: CatagoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
