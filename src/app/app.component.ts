import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { AppService } from './app.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  userList!: any;
  constructor(private appService: AppService, public matDialog: MatDialog){}
  ngOnInit() {
    this.appService.getUsers().toPromise().then(data=>{
      this.userList = data;
      console.log(this.userList);
    // for (let key in data)
    // if (data.hasOwnProperty(key))
    // this.userList.push(data[key]);

    });
  }
 
// loadUserData(){
//   this.appService.getUsers.subscribe
// }

  title = 'Front-End-Sample-Project';

expandAcc = false;

reverseExpand(){
  this.expandAcc = !this.expandAcc;
  console.log("!!!!" + this.expandAcc);
}


  openModal(user: any) {
    // let userValue = {title: "userId", value: userID};
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "700px";
    dialogConfig.width = "700px";
    dialogConfig.data = user;
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }
}
