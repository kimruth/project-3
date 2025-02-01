import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl = 'mongodb://root:matricule@localhost/commentDB';

  // private baseUrl = 'https://api.commento.com/comments'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getComments(page: number, limit: number): Observable<Comment[]> {
    const params = new HttpParams().set('_page', page).set('_limit', limit);
    return this.http.get<Comment[]>(this.apiUrl, { params });
  }

  addComment(comment: Partial<Comment>): Observable<Comment> {
    return this.http.post<Comment>(this.apiUrl, comment);
  }
}
