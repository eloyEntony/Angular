import { Component, OnInit } from '@angular/core';
import {CharactersService} from 'src/app/service/characters.service'
import { characterDTO } from '../models/characterDTO';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  home = [
    {id: 1, name: "Gryffindor"},
    {id: 2, name: "Hufflepuff"},
    {id: 3, name: "Ravenclaw"},
    {id: 4, name: "Slytherin"}
  ];

  selectedValue:string

  characters:Array<characterDTO>
  constructor(private charactersService:CharactersService) { }

  ngOnInit() {
    this.load();
  }

  load(){
    this.charactersService.getCharacters()
    .subscribe((res:Array<characterDTO>)=>{
        console.log(res)
        this.characters = res
    })
  }

  SelectHouse(){
    console.log(this.selectedValue)
    this.charactersService.getFromHouse(this.selectedValue).subscribe(
      (res:Array<characterDTO>)=>{
        console.log(res)
        this.characters = res
    }
    )
  }
}
