import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { Newuser } from '../newuser'
import { USER } from '../user-credentials';
import { RouterModule, Router } from '@angular/router';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  users : User[];
  username:string;
  password:string;
  fullname:string;
  email:string;
  validate: boolean;
  constructor(private router: Router,private usersService: UsersService) { }
  
  ngOnInit() {
    this.getUsers();
  }
  getUsers():void{
    this.usersService.getUsers()
        .subscribe(users=>this.users=users)
  }

  validate_form(choice : string) : void {
    console.log("validate form");
      
      var userName = (<HTMLInputElement>document.getElementById("user-name")).value;
      var pass = (<HTMLInputElement>document.getElementById("password")).value;
      var fName = (<HTMLInputElement>document.getElementById("full-name")).value;
      var emailVal = (<HTMLInputElement>document.getElementById("email")).value;
      if(choice == 'username'){
        this.username=""
        if(userName == "")
        {
          this.username = "Username cannot be null";
        }
        for (var value of this.users) {
          if(userName === value.username){
            this.username = "Username already exists";
          }
        }
      }
      else if(choice == 'password'){
        this.password=""
        if(pass == "")
        {
          this.password += "Password cannot be null";
        }
        
      }
      else if(choice == 'email'){
        this.email=""
        if(emailVal == ""){
          this.email+="Email cannot be null"
        }
        for (var value of this.users) {
          if(emailVal === value.email){
            this.email = "Email already registered!!! Please login or use another email!";
          }
        }
      }
      else if(choice == 'fullname'){
        this.fullname=""
        if(fName == ""){
          this.fullname+="Fullname cannot be null"
        }
      }
      else if(choice == 'register'){
        if(userName==""||emailVal==""||fName==""||pass==""){
              this.username = "Username cannot be null";
        }
        else{
            console.log("before add user call");
            this.addUser(userName,pass,fName,emailVal);
            this.validate=true
            this.router.navigate(['/']);
              
        }
        
      }
  }
  addUser(username: string,password:string,fullname:string,email:string): void {
    console.log("addUser");
    username=username.trim();
    var profilepic = "https://image.flaticon.com/icons/svg/1246/1246351.svg";
    var stories = [];
    var suggestions = [];
    var posts=[];
    if (!username) { return; }
    this.usersService.addUser({ username,password,fullname,email,profilepic,posts,stories,suggestions})
      .subscribe(user => {
        this.users.push(user);
      });
  }

}