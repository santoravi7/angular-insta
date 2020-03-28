import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const users =[
      {
        id:1,
        username :"santo" , 
        password : "santo",
        fullname : "santosh Ravi",
        email : "santoravi7@gmail.com",
        profilepic: "https://avatars3.githubusercontent.com/u/17864688?s=460&u=bdac48fc1d47ae913915a65e16f972ffb59ea954&v=4",
        posts : [{
          id:1,
          name:"ScratchedStories1",
          profilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIi3vEDnvue29P8-GSDrcxFn-pGNcSjoRQomgvqvxPqBB9tIwL",
          caption:"My First Post",
          img:"https://i.pinimg.com/originals/4c/28/3b/4c283b0fb76da7a57406ae25bebfa602.jpg",
          likes:"251",
          comments:[{
            comment:"this is first comment"
          }],
          savepost: false,
          posttime: "5",
          liked: false
        },
        {
          id:2,
          name:"ScratchedStories2",
          profilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIi3vEDnvue29P8-GSDrcxFn-pGNcSjoRQomgvqvxPqBB9tIwL",
          caption:"#instaedits #doubletap",
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSA2zrAgbxuYjZZzrMYPefp6oEjrk48Yy0YdYAVkhGRDlR1rrzw",
          likes:"251",
          comments:[{
            comment:"heyyyyy"
          }],
          savepost: false,
          posttime: "5",
          liked: false
        },
        {
          id:3,
          name:"ScratchedStories3",
          profilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIi3vEDnvue29P8-GSDrcxFn-pGNcSjoRQomgvqvxPqBB9tIwL",
          caption:"#instaedits #doubletap",
          img:"https://img.wallpapersafari.com/desktop/1920/1080/59/57/862AkR.jpg",
          likes:"251",
          comments:[{
            comment:"heyyyyy"
          }],
          savepost: false,
          posttime: "5",
          liked: false
        }],
        stories : [
          {
            id:1,
            name:"ScratchedStories",
            profilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIi3vEDnvue29P8-GSDrcxFn-pGNcSjoRQomgvqvxPqBB9tIwL",
            img:"https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/89271398_228216721557201_7674244792956090752_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=64pqtzGAdccAX9cAWWI&oh=38a0d7f6db8f569d4d73b7113e56a43e&oe=5E92539E",
            posttime: "2"
          },
          {
            id:2,
            name:"Dhoni",
            profilepic: "https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-5tujqdum4b4isn8u7vdcnd54t1-20180113235252.Medi.jpeg",
            img:"https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/01/dhoni-bike-1579516499.jpg",
            posttime: "4"
          },
          {
            id:3,
            name:"kohli",
            profilepic: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Virat_Kohli_in_New_Delhi_on_December_2018.jpg",
            img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201912/Darbar1-770x433.jpeg?yA_Gr2aG1KhKMOYZGLKjATLDrmMANIol",
            posttime: "4"
          },
          {
            id:4,
            name:"Yuvan Shankar Raja",
            profilepic: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Yuvan_Shankar_Raja_exclusive_HQ_Photos_Silverscreen.jpg",
            img:"https://i.pinimg.com/originals/23/23/a4/2323a4d1c315ae2bd2f6ec9ca617c44e.jpg",
            posttime: "4"
          }
        ],
        suggestions :[
          {
            id:1,
            name:"Sri_dancer",
            profilepic: "https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-5tujqdum4b4isn8u7vdcnd54t1-20180113235252.Medi.jpeg",
            followedby:"nisha.mano"
          },
          {
            id:2,
            name:"srinithish",
            profilepic: "https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-5tujqdum4b4isn8u7vdcnd54t1-20180113235252.Medi.jpeg",
            followedby:"santo_ravi"
          },
          {
            id:3,
            name:"virat_kohli",
            profilepic: "https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-5tujqdum4b4isn8u7vdcnd54t1-20180113235252.Medi.jpeg",
            followedby:"dhoni"
          },
          {
            id:4,
            name:"MeenuRavi",
            profilepic: "https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-5tujqdum4b4isn8u7vdcnd54t1-20180113235252.Medi.jpeg",
            followedby:"santo_ravi"
          }
        ] 
      },
      {
        id:2,
        username :"1234" , 
        password : "user1",
        fullname : "santosh Ravi",
        email : "santoravi@gmail.com",
        profilepic: "https://avatars3.githubusercontent.com/u/17864688?s=460&u=bdac48fc1d47ae913915a65e16f972ffb59ea954&v=4",
        posts: [{
          id:1,
          name:"ScratchedStories",
          profilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIi3vEDnvue29P8-GSDrcxFn-pGNcSjoRQomgvqvxPqBB9tIwL",
          caption:"My First Post",
          img:"https://i.pinimg.com/originals/4c/28/3b/4c283b0fb76da7a57406ae25bebfa602.jpg",
          likes:"251",
          comments:[{
            comment:"this is first comment"
          }],
          savepost: false,
          posttime: "5",
          liked: false
        }],
        stories : [
          {
            id:1,
            name:"ScratchedStories",
            profilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIi3vEDnvue29P8-GSDrcxFn-pGNcSjoRQomgvqvxPqBB9tIwL",
            img:"https://i.pinimg.com/originals/4c/28/3b/4c283b0fb76da7a57406ae25bebfa602.jpg",
            posttime: "5"
          }
        ],
        suggestions :[
          {
            id:1,
            name:"Sri_dancer",
            profilepic: "https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-5tujqdum4b4isn8u7vdcnd54t1-20180113235252.Medi.jpeg",
            followedby:"nisha.mano"
          },
          {
            id:2,
            name:"srinithish",
            profilepic: "https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-5tujqdum4b4isn8u7vdcnd54t1-20180113235252.Medi.jpeg",
            followedby:"santo_ravi"
          },
          {
            id:3,
            name:"virat_kohli",
            profilepic: "https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-5tujqdum4b4isn8u7vdcnd54t1-20180113235252.Medi.jpeg",
            followedby:"dhoni"
          },
          {
            id:4,
            name:"MeenuRavi",
            profilepic: "https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-5tujqdum4b4isn8u7vdcnd54t1-20180113235252.Medi.jpeg",
            followedby:"santo_ravi"
          }
        ]  
      }
    ];
    return {users};
  }
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(users => users.id)) + 1 : 11;
  }
}