import { Component, OnInit, TemplateRef } from '@angular/core';
import { User } from '../user'
import { USER } from '../user-credentials';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/observable/timer'
import { MyOrderByPipe } from '../shared/sort.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:User; modalRef: BsModalRef;
  userPost; alive = true;
  reversedList=[];
  order:string = 'id';
  ngOnInit() {
   this.getUser();
  }

  constructor( private route: ActivatedRoute,private usersService:UsersService,private modalService: BsModalService,private orderPipe: MyOrderByPipe) { 
    console.log("list of objects "+this.user);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(id)
      .subscribe(
        user => this.user = user
      );
  }

  watchAll():void{
      Observable.timer(0,10000)
      .takeWhile(() => this.alive) // only fires when component is alive
      .subscribe(() => {
        this.usersService.getStories().subscribe(data=> {
          console.log("user stories from service -- "+data);
        })
      });
  }
  
  
  onSelectFile(event,user) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event:any) => {
                   
                   user.posts.push({
                        id:user.posts.length+1,
                        name: user.username,
                        profilepic: user.profilepic,
                        caption:"My First Post...#firstpost #instaedits",
                        img:event.target.result,
                        likes:"0",
                        comments:[{
                          comment:"this is first comment.. "
                        }],
                        savepost: false,
                        posttime: "0",
                        liked: false
                   }    
                   ); 
                }
                reader.readAsDataURL(event.target.files[i]);
        }
    }
    this.usersService.updateUser(user).subscribe();
  }

  updateProfile(event,user) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event:any) => {
                   user.profilepic=event.target.result; 
                }
                reader.readAsDataURL(event.target.files[i]);
        }
    }
    this.usersService.updateUser(user).subscribe(); 
  }

  addComment(postId:number,user:User):void{
    var newComment = (<HTMLInputElement>document.getElementById("new-comment")).value;
    console.log("new comment === "+newComment+"---id==="+postId+"==user---"+user.posts[postId-1]);
    user.posts[postId-1].comments.push({
      comment:newComment
    });
    (<HTMLInputElement>document.getElementById("new-comment")).value="";
    this.usersService.updateUser(user).subscribe(); 
  };

  updateImg(liked:boolean, postId:number, user:User):void{
    user.posts[postId-1].liked = liked;
    this.usersService.updateUser(user).subscribe();
  }

}