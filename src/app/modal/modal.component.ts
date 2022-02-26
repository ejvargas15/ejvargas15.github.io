import { Component, OnInit, Inject  } from '@angular/core';
import { AppService } from '../app.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent{
  toDoList!: any;
  constructor(private appService: AppService, @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(){
    this.appService.getTodos(this.data.id).toPromise().then(obj=>{
      this.toDoList = obj;
      console.log(this.toDoList);
    // for (let key in data)
    // if (data.hasOwnProperty(key))
    // this.userList.push(data[key]);

    });
    console.log(this.data);
  }
  sortDropdown =[
    {value: 'id', viewValue:'id'},
    {value:'title', viewValue:'Title'}
  ]
  
  onDropdownselect(value:any){
    this.toDoList.sort(function (a:any, b:any) {
      return (a[value] > b[value] ? 1 : -1);
    });
    console.log(this.toDoList);
  }

  deleteTodo(id:any){
    console.log("Delete Clicked");
    this.appService.deleteTodos(id).subscribe(() => {
      // console.log('Delete successful')
      var index = this.toDoList.indexOf(id);
      if (index !== -1) {
        this.toDoList.splice(index, 1);
}
      // this.toDoList.splice(id);
      console.log(this.toDoList);
    }
    
    );
    
   
  }


}