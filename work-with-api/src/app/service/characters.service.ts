import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { characterDTO } from '../models/characterDTO';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

constructor(private http: HttpClient) { }

  getCharacters():Observable<Array<characterDTO>>{
    return this.http.get<Array<characterDTO>>('https://hp-api.herokuapp.com/api/characters')
  }

  getStudents():Observable<Array<characterDTO>>{
    return this.http.get<Array<characterDTO>>('http://hp-api.herokuapp.com/api/characters/students')
  }

  getStaff():Observable<Array<characterDTO>>{
    return this.http.get<Array<characterDTO>>('http://hp-api.herokuapp.com/api/characters/staff')
  }
}
