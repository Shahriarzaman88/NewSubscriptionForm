import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { PostsService } from './post.service';


@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {

  constructor(private Http: HttpClient, private postsService: PostsService) { }

  ngOnInit(): void {

  }

  SubscriptionForms = [];

  firstName: string;
  lastName: String;
  emailAddress: String;
  companyName: String;
}

 


  //onAddUser() {

    //this.SubscriptionForms.push({


      //FirstName: this.firstName,
      //LastName: this.lastName,
      //Email: this.emailAddress,
      //Company: this.companyName
    //});
    //console.log(this.SubscriptionForms)

    //if(this.firstName ==='admin')
    //{
    //alert("Admin SignUp");


    //}
    //else
    //{

    //alert("new login")
    //}



  //onCreatePost (postData: {FirstName: string; LastName: string; Email: string; companyName: string})
  


  //this.Http.post('url', postData).subscribe(responseData => {

  //});
  //console.log(postData)
  //}



