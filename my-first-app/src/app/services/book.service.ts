import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCollectionResponse, ApiResponse } from '../models/apiResponse';
import { BookDTO } from '../models/bookDTO';

@Injectable({
  providedIn: 'root'
})
export class BookService {

constructor(private http: HttpClient) { }

getBooks(): Observable<ApiCollectionResponse>{
  return this.http.get<ApiCollectionResponse>('https://localhost:44357/api/book/getall');
}

deleteBook(id:number): Observable<ApiResponse>{
  return this.http.delete<ApiResponse>('https://localhost:44357/api/book?id=' + id)
}

addBook(newBook:BookDTO):Observable<ApiResponse>{
  return this.http.post<ApiResponse>('https://localhost:44357/api/book', newBook)
}

getBook(id:number):Observable<ApiCollectionResponse> {
  return this.http.get<ApiCollectionResponse>('https://localhost:44357/api/book/' + id)

}

updateBook(book: BookDTO):Observable<ApiCollectionResponse>{
  return this.http.patch<ApiCollectionResponse>('https://localhost:44357/api/book/', book)
}

}
