import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import {Post} from './subscription-form.component';

@Injectable ({providedIn: 'root'})


export class PostsService {
    firstName: string;
  lastName: string;
  emailAddress: string;
  companyName: string;

    constructor (private http: HttpClient) {}
    createAndStorePost (
        firstName: string,
        lastName: string,
        emailAddress: string,
        companyName: string
    )
    {
        const postData: Post = {firstName: firstName, lastName: lastName, emailAddress: emailAddress, companyName: companyName};
        this.http
        this.http.post('url', postData).subscribe(responseData => {

            });
            console.log(postData)
    }
    
}