import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiCollectionResponse, ApiResponse } from 'src/app/models/apiResponse';
import { BookDTO } from 'src/app/models/bookDTO';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.css']
})
export class GetBooksComponent implements OnInit {

  books: Array<BookDTO>;

  constructor(private bookService: BookService, 
    private spinner: NgxSpinnerService,
    private notifier: NotifierService) { }

  ngOnInit() {
    this.spinner.show();
    this.loadCatagories();
    setTimeout(()=>{this.spinner.hide();}, 2000)
   this.notifier.notify('success', 'ok')
    
  }

  onDelete(id:number){
    this.bookService.deleteBook(id)
    .subscribe((res:ApiResponse)=>{
      if(res.isSuccessful){
        this.loadCatagories()
      }
    })
  }

  loadCatagories(){
    this.bookService.getBooks()
    .subscribe((res:ApiCollectionResponse)=>{
        if(res.isSuccessful){
          console.log(res.data)
          this.books = res.data
        }
    })
  }
}
