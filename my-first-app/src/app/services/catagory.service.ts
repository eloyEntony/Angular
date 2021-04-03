import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCollectionResponse, ApiResponse } from '../models/apiResponse';
import { CatagoryDTO } from '../models/catagoryDTO';

@Injectable({
  providedIn: 'root'
})
export class CatagoryService {

constructor(private http: HttpClient) { }

getCategoties(): Observable<ApiCollectionResponse>{
  return this.http.get<ApiCollectionResponse>('https://localhost:44357/api/category/getall');
}

deleteCatagories(id:number): Observable<ApiResponse>{
  return this.http.delete<ApiResponse>('https://localhost:44357/api/category?id=' + id)
}

addCategory(newCategoty:CatagoryDTO):Observable<ApiResponse>{
  return this.http.post<ApiResponse>('https://localhost:44357/api/category', newCategoty)
}

getCategory(id:number):Observable<ApiCollectionResponse> {
  return this.http.get<ApiCollectionResponse>('https://localhost:44357/api/category/' + id)

}

updateCategory(category: CatagoryDTO):Observable<ApiCollectionResponse>{
  return this.http.patch<ApiCollectionResponse>('https://localhost:44357/api/category/', category)
}

getBooksFromCategory(id:number):Observable<ApiCollectionResponse>{
  return this.http.get<ApiCollectionResponse>('https://localhost:44357/api/category/books/' + id)
}

}
