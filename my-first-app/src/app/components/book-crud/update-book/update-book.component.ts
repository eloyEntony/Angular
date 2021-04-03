import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCollectionResponse } from 'src/app/models/apiResponse';
import { BookDTO } from 'src/app/models/bookDTO';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  id: string 
  constructor(private route:ActivatedRoute,
             private bookService: BookService,
             private router: Router) { }

  currentBook: string;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!
    console.log(this.id)

    this.bookService.getBook(parseInt(this.id))
    .subscribe((res:ApiCollectionResponse)=>{
      if(res.isSuccessful){
        console.log(res.data)
        this.currentBook = res.data[0].name;
        console.log(this.currentBook)
      }
    })
  }

  onClick(newBook: string){
    
    var updateBook:BookDTO = {name: newBook, id: parseInt(this.id), categoryName: ''}

    this.bookService.updateBook(updateBook)
    .subscribe((res:ApiCollectionResponse)=>{
      if(res.isSuccessful){
        console.log(res)
        this.router.navigate(['/books'])
      }
    })

  }

}
