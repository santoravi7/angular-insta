export interface User {
    id:number;
    username:string;
    password:string;
    fullname:string;
    email:string;
    posts: [];
    stories: [];
    suggesstions: [];
}