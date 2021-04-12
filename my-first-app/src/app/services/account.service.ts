import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDTO } from '../models/userDTO';
import { map } from 'rxjs/operators';
import { LoginDTO } from '../models/loginDTO';
import { ApiLoginResponse, ApiResponse } from '../models/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private currentUserSubject: BehaviorSubject<UserDTO>;
  public currentUser: Observable<UserDTO>;

  constructor(private http: HttpClient) {
      //this.currentUserSubject = new BehaviorSubject<UserDTO>(JSON.parse(localStorage.getItem('currentUser')));
      //this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserDTO {
      return this.currentUserSubject.value;
  }

  login(user:LoginDTO) {
      return this.http.post<ApiLoginResponse>(`https://localhost:44357/api/account/login`, user)       
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('id_token');
      
      //this.currentUserSubject.next(null);
  }

  register(newUser: UserDTO){
    return this.http.post<ApiResponse>('https://localhost:44357/api/account/register', newUser)
  }

}
