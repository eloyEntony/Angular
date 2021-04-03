import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCollectionResponse, ApiResponse } from 'src/app/models/apiResponse';
import { BookDTO } from 'src/app/models/bookDTO';
import { CatagoryDTO } from 'src/app/models/catagoryDTO';
import { BookService } from 'src/app/services/book.service';
import { CatagoryService } from 'src/app/services/catagory.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  catagories: Array<CatagoryDTO>;
  selectedCategoryId: string;

  newBook: BookDTO = {id:-1, name: '', categoryName: ''};

  constructor(private bookService: BookService, 
              private router: Router, 
              private categoryService: CatagoryService,
              ) { }

  ngOnInit() {
    this.loadCategory();
  }
 

  onAdd(){
    
    console.log(this.selectedCategoryId)

    this.newBook.categoryName = this.selectedCategoryId;

    console.log(this.newBook)
    this.bookService.addBook(this.newBook)
    .subscribe((res:ApiResponse)=>{
      if(res.isSuccessful){
        console.log(res.message)
        this.router.navigate(['/books'])
      }
    })
  }

  loadCategory(){
    this.categoryService.getCategoties()
    .subscribe((res:ApiCollectionResponse)=>{
        if(res.isSuccessful){
          console.log(res.data)
          this.catagories = res.data
        }
    })
  }

}
