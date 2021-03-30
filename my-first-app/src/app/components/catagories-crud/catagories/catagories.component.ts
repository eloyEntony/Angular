import { Component, OnInit } from '@angular/core';
import { ApiCollectionResponse } from 'src/app/models/apiResponse';
import { CatagoryDTO } from 'src/app/models/catagoryDTO';
import { CatagoryService } from 'src/app/services/catagory.service';

@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.css']
})
export class CatagoriesComponent implements OnInit {

catagories: Array<CatagoryDTO>;

  constructor(private categoryService: CatagoryService) { }

  ngOnInit() {
    this.categoryService.getCategoties()
    .subscribe((res:ApiCollectionResponse)=>{
        if(res.isSuccessful){
          console.log(res.data)
          this.catagories = res.data
          console.log(this.catagories)
        }
    })
  }

}
