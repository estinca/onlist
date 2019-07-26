import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private readonly baseUrl: string = './assets';
  // private readonly baseUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }


  public get(endpoint: string, token: string, paginated: boolean = true): Observable<any> {
    return this.http.get(this.baseUrl + endpoint);
  }
}
