import { User } from './user'

export const USER : User[] = [
	{ username :"santo" , 
    password : "santo",
    posts : [{
      caption:"My First Post",
      img:"https://i.pinimg.com/originals/4c/28/3b/4c283b0fb76da7a57406ae25bebfa602.jpg",
      likes:"251",
      comments:[{
        comment:"this is first comment"
      }],
      savepost: false,
      posttime: "5",
      
    }] 
  },
  { username :"1234" , 
    password : "user1",
    posts: [{

    }]
  }
]
	