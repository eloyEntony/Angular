import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  counter: number
  //counterS: string
  counterB: boolean = false
  counterA: Array<number> = []
  count:any

  constructor() { 
    
    
    
  }

  ngOnInit(): void {
  }

}
