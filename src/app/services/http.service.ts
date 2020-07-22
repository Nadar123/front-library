import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    baseUrl: string;
    constructor(private http: HttpClient) {
      this.baseUrl = environment.apiUrl;
    }
  
    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
      return this.http.get(`${this.baseUrl}/${path}`, { params });
    }
  
    put(path: string, body: Object = {}): Observable<any> {
      return this.http.put(`${this.baseUrl}/${path}`, JSON.stringify(body));
    }
  
    post(path: string, body: Object = {}, options: Object = {}): Observable<any> {
      return this.http.post(
        `${this.baseUrl}/${path}`,
        // JSON.stringify(body),
        options
      );
    }
  
    delete(path): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${path}`);
    }
  }