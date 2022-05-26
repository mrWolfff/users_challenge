import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UsersServiceService } from 'src/app/service/users-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UsersServiceService) { 
  }

  users!: User[];
  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      console.log(data);
    })
  }

  create(value:any){
    let data = {
      email: value.email,
      password: value.password
    };
    this.userService.createUser(data).subscribe(response => {
      console.log(response);
    })
  }

  update(value: any){
    let data = {
      id: value.id,
      email: value.email,
      password: value.password
    };

    this.userService.updateUser(data, data.id)
    .subscribe(response => {
      console.log(response);
    })
  }

  delete(id:string){
    this.userService.deleteUser(id)
    .subscribe((response: any) => {
      console.log(response);
    })
  }

}
