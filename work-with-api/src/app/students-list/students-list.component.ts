import { Component, OnInit } from '@angular/core';
import { characterDTO } from '../models/characterDTO';
import { CharactersService } from '../service/characters.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  students:Array<characterDTO>

  home = [
    {id: 1, name: "Gryffindor"},
    {id: 2, name: "Hufflepuff"},
    {id: 3, name: "Ravenclaw"},
    {id: 4, name: "Slytherin"}
  ];

  selectedValue = null;
  constructor(private charactersService:CharactersService) { }

  ngOnInit() {
    this.load();
  }

  load(){
    this.charactersService.getStudents()
    .subscribe((res:Array<characterDTO>)=>{
        console.log(res)
        this.students = res
    })
  }

}
