export class Newuser {
  id: number;
  email : string;
  fullname : string;
  username : string;
  password : string;
  profilepic : string;
  posts:[];
  stories:[];
  suggestions:[];
  constructor(id:number,email:string,fullname:string,username:string,password:string,profilepic:string,posts:[],stories:[],suggestions:[]){
    this.id=id;
    this.email=email;
    this.fullname=fullname;
    this.username=username;
    this.password=password;
    this.profilepic=profilepic;
    this.posts=posts;
    this.stories=stories;
    this.suggestions=suggestions;
  }
}