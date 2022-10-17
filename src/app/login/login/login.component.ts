import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Modules/user-management/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userList:any[]
  formLogin:FormGroup;
  submited:boolean=false;
  isInvalidUser:boolean=false;
  constructor(private fb:FormBuilder, private router: Router,private userService:UserService) { }

  ngOnInit(): void {
    this.formLogin=this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    });
    this.loadUser();
  }
  loadUser(){
    this.userService.getUserList().subscribe(res=>{
      this.userList=res;
    })
  }

  get f(){return this.formLogin.controls}

  login(){
  this.submited=true;
  //var loginUser=this.userList.filter((item:any)=>item.userName===this.formLogin.value.userName && item.password===this.formLogin.value.password);
  // if(loginUser.length>0){
  //   this.isInvalidUser=false;
  //   var role=loginUser[0].roles[0];
  //   localStorage.setItem('role',role);
  //   switch (role) {
  //     case 'SAdmin':
  //         this.router.navigate(['/admin-dashboard'], { replaceUrl: true });
  //         break;
  //     case 'User':
  //           this.router.navigate(['/user-dashboard'], { replaceUrl: true });
  //           break;
  //     default:
  //         this.router.navigate(['/login'], { replaceUrl: true });
  //         break;    
  //   }
   
  // }else{
  //   this.isInvalidUser=true;
  // }
  this.router.navigate(['/analyst'], { replaceUrl: true });
}

}
