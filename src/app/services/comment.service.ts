import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CommentService {
  private apiUrl = "http://localhost:3000/comments";

  constructor(private http: HttpClient) {}

  addComment(message: string): Observable<any> {
    return this.http.post(this.apiUrl, { message });
  }

  getComments(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}`);
  }
}
