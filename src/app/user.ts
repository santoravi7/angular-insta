export interface User {
    id:number;
    username:string;
    password:string;
    fullname:string;
    email:string;
    profilepic:string;
    posts: [];
    stories: [];
    suggesstions: [];
}