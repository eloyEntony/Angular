import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/apiResponse';
import { CatagoryDTO } from 'src/app/models/catagoryDTO';
import { CatagoryService } from 'src/app/services/catagory.service';

@Component({
  selector: 'app-addCatagories',
  templateUrl: './addCatagories.component.html',
  styleUrls: ['./addCatagories.component.css']
})
export class AddCatagoriesComponent implements OnInit {

  newCategoty: CatagoryDTO = {id:-1, name: ''};
 

  constructor(private categoryService: CatagoryService, private router: Router) { }

  ngOnInit() {
  }

  onAdd(){
    console.log(this.newCategoty.name)
    this.categoryService.addCategory(this.newCategoty)
    .subscribe((res:ApiResponse)=>{
      if(res.isSuccessful){
        console.log(res.message)
        this.router.navigate(['/category'])
      }
    })
  }

}
