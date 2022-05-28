import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
  }

  SubscriptionForms = [ ];
  firstName:string;
  lastName: String;
  emailAddress: String;
  companyName: String;

  onAddUser() {
    
    this.SubscriptionForms.push({

      
      FirstName: this.firstName,
      LastName: this.lastName,
      Email: this.emailAddress,
      Company: this.companyName
    });
    console.log(this.SubscriptionForms)

    if(this.firstName ==='admin')
    {
      alert("Admin SignUp");
      
      
    }
    else
    {
      
      alert("new login")
    }
    
  }



}
