import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EmailService {
 
  private apiUrl = "http://localhost:5000/send-email"; // L'URL de ton backend

  constructor(private http: HttpClient) {}

  sendEmail(name: string, email: string, message: string) {
    return this.http.post(this.apiUrl, { name, email, message });
  }
}
