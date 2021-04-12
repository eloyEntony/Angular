import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/book-crud/add-book/add-book.component';
import { GetBooksComponent } from './components/book-crud/get-books/get-books.component';
import { UpdateBookComponent } from './components/book-crud/update-book/update-book.component';
import { BooksInCategoryComponent } from './components/books-in-category/books-in-category.component';
import { AddCatagoriesComponent } from './components/catagories-crud/addCatagories/addCatagories.component';
import { CatagoriesComponent } from './components/catagories-crud/catagories/catagories.component';
import { UpdateCategoryComponent } from './components/catagories-crud/update-category/update-category.component';
import { FirstComponent } from './components/first/first.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { UserViewComponent } from './components/user-profile/user-view/user-view.component';

const routes: Routes = [

  {path: 'account', children:[
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'user', component:UserViewComponent}
  ]},
  
  {path: 'category', children:[
    {path: '', component: CatagoriesComponent},
    {path: 'add', component: AddCatagoriesComponent},
    {path: 'update/:id', component: UpdateCategoryComponent},
    {path: 'books/:id', component: BooksInCategoryComponent}
  ]},

  {path:'books', children:[
    {path: '', component: GetBooksComponent},
    {path: 'add', component: AddBookComponent},
    {path: 'update/:id', component: UpdateBookComponent},

  ]},
  { path: '**', redirectTo: '' }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
