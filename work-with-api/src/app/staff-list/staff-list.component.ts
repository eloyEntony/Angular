import { Component, OnInit } from '@angular/core';
import { characterDTO } from '../models/characterDTO';
import { CharactersService } from '../service/characters.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {

  staff:Array<characterDTO>
  constructor(private charactersService:CharactersService) { }

  ngOnInit() {
    this.load();
  }

  load(){
    this.charactersService.getStaff()
    .subscribe((res:Array<characterDTO>)=>{
        console.log(res)
        this.staff = res
    })
  }

}
