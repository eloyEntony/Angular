import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatagoriesComponent } from './components/catagories-crud/catagories/catagories.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { analyzeNgModules } from '@angular/compiler';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCatagoriesComponent } from './components/catagories-crud/addCatagories/addCatagories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateCategoryComponent } from './components/catagories-crud/update-category/update-category.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { AddBookComponent } from './components/book-crud/add-book/add-book.component';
import { UpdateBookComponent } from './components/book-crud/update-book/update-book.component';
import { GetBooksComponent } from './components/book-crud/get-books/get-books.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BooksInCategoryComponent } from './components/books-in-category/books-in-category.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const customNotifierOptions: NotifierOptions = {
  position: { horizontal: { position: 'right' }, vertical: { position: 'top' } }
};

@NgModule({
  declarations: [
    AppComponent,    
    CatagoriesComponent,
    FirstComponent,
    SecondComponent,
    AddCatagoriesComponent,
    UpdateCategoryComponent,
    AddBookComponent,
    UpdateBookComponent,
    GetBooksComponent,
    NavbarComponent,
    BooksInCategoryComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NotifierModule.withConfig(customNotifierOptions),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
