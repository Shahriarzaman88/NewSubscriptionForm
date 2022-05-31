import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";



@Injectable ({providedIn: 'root'})




export class HttpService {
    
    baseUrl = '';

    constructor (private http: HttpClient) {}


    public post(url: string, data: any): Observable<any> {  

        // your .NET CORE project url
              // this.baseUrl = 'http://localhost:53860/Services/ServiceMain.svc/json/'
        
              return this.http.post<any>(this.baseUrl+url, data,{ observe: 'response' }).pipe(map((response: any) => response))
          
            } 
            
    
}