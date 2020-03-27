import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { USER } from '../user-credentials';
import { UsersService } from '../users.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  validate: boolean;
  users : User[];
  constructor(private usersService: UsersService,
  private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers():void{
    this.usersService.getUsers()
        .subscribe(users=>this.users=users)
  }
  validate_form(choice : string) : void {
    var userName = (<HTMLInputElement>document.getElementById("user-name")).value;
    var pass = (<HTMLInputElement>document.getElementById("password")).value;
    if(choice == 'username'){
      this.username=""
      if(userName.length < 1)
      {
        this.username = "Username cannot be null";
      }
      
    }
    else if(choice == 'password'){
      this.password=""
      if(pass.length < 1)
      {
        this.password += "Password cannot be null";
      }
    }
    else if(choice == 'login'){
      var flag=0
      for (var value of this.users) {
        console.log("credentials -- "+value.username+" --- "+value.id) 
        if((value.username == userName) && (value.password == pass)){
          flag=1;
          this.router.navigate(['/home/'+value.id]);
        }
      }
      if(flag==1){
        this.validate = true
        
      }
      else{
        this.validate = false
      }
    }
 }
}