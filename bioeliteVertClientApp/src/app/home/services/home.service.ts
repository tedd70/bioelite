import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

// Interfaces
import { GuestBookInterface } from '../business/interfaces/guestBook.interface';

@Injectable({
  providedIn: "root"
})
export class HomeService {

  constructor(private http: HttpClient) {}

  public getAllGuestBooks(): Observable<GuestBookInterface[]> {
    return this.http.get<GuestBookInterface[]>('https://localhost:44348/GuestBook');
  }

  public addNewGuestBook(guestBook): Observable<GuestBookInterface> {
    return this.http.post<GuestBookInterface>('https://localhost:44348/GuestBook', guestBook)
  }
}
