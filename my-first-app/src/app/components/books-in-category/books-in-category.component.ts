import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCollectionResponse, ApiResponse } from 'src/app/models/apiResponse';
import { BookDTO } from 'src/app/models/bookDTO';
import { BookService } from 'src/app/services/book.service';
import { CatagoryService } from 'src/app/services/catagory.service';

@Component({
  selector: 'app-books-in-category',
  templateUrl: './books-in-category.component.html',
  styleUrls: ['./books-in-category.component.css']
})
export class BooksInCategoryComponent implements OnInit {

  books: Array<BookDTO>;
  id: string 
  constructor(private bookService: BookService, private categoryService: CatagoryService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.id = this.route.snapshot.paramMap.get('id')!
    this.load()
  }

  onDelete(id:number){
    this.bookService.deleteBook(id)
    .subscribe((res:ApiResponse)=>{
      if(res.isSuccessful){
        //this.loadCatagories()
      }
    })
  }


  load(){
    this.categoryService.getBooksFromCategory(parseInt(this.id))
    .subscribe((res:ApiCollectionResponse)=>{
        if(res.isSuccessful){
          console.log(res.data)
          this.books = res.data
        }
    })
  }

}
