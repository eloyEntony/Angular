import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiCollectionResponse, ApiResponse } from 'src/app/models/apiResponse';
import { CatagoryDTO } from 'src/app/models/catagoryDTO';
import { CatagoryService } from 'src/app/services/catagory.service';

@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.css']
})
export class CatagoriesComponent implements OnInit {

  catagories: Array<CatagoryDTO>;
  

  constructor(private categoryService: CatagoryService, 
    private spinner: NgxSpinnerService,
    private notifier: NotifierService,
    private router: Router) { }

  ngOnInit() {
    this.spinner.show();
    this.loadCatagories();
    setTimeout(()=>{this.spinner.hide();}, 2000)
   this.notifier.notify('success', 'ok')
    
  }

  onClick(id:number){
    this.router.navigate(['/category/books/' + id])
  }

  onDelete(id:number){
    this.categoryService.deleteCatagories(id)
    .subscribe((res:ApiResponse)=>{
      if(res.isSuccessful){
        this.loadCatagories()
      }
    })
  }

  loadCatagories(){
    this.categoryService.getCategoties()
    .subscribe((res:ApiCollectionResponse)=>{
        if(res.isSuccessful){
          console.log(res.data)
          this.catagories = res.data
        }
    })
  }

}
