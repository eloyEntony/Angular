import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCollectionResponse, ApiResponse } from '../models/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class CatagoryService {

constructor(private http: HttpClient) { }

getCategoties(): Observable<ApiCollectionResponse>{
  return this.http.get<ApiCollectionResponse>('https://localhost:44357/api/category');
}

}
