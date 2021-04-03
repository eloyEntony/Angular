import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbPaginationNumber } from '@ng-bootstrap/ng-bootstrap';
import { ApiCollectionResponse, ApiResponse } from 'src/app/models/apiResponse';
import { CatagoryDTO } from 'src/app/models/catagoryDTO';
import { CatagoryService } from 'src/app/services/catagory.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  id: string 
  constructor(private route:ActivatedRoute,
             private categoryService: CatagoryService,
             private router: Router) { }

  currentCategory: string;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!
    console.log(this.id)

    this.categoryService.getCategory(parseInt(this.id))
    .subscribe((res:ApiCollectionResponse)=>{
      if(res.isSuccessful){
        console.log(res.data)
        this.currentCategory = res.data[0].name;
        console.log(this.currentCategory)
      }
    })
  }

  onClick(newCategory: string){
    
    var updateCategory:CatagoryDTO = {name: newCategory, id: parseInt(this.id)}

    this.categoryService.updateCategory(updateCategory)
    .subscribe((res:ApiCollectionResponse)=>{
      if(res.isSuccessful){
        console.log(res)
        this.router.navigate(['/category'])
      }
    })

  }

}
